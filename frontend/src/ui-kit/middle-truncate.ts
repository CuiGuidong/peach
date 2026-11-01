/* Peach's native adapter over Geist MiddleTruncate.
 *
 * Only verified behavior is reused: keep head and tail by container width, use a single ellipsis, recompute on width change,
 * and still provide the full original for copy and accessible name. Callers only add data-middle-truncate to a file name,
 * path, URL or ID; titles and descriptions keep tail ellipsis. Shipped with `peach-app.js`, with Application's startup and
 * the document-wide single observer; attributes written by native hosts and the React subtree are all its business. */

interface TruncateState { full: string; rendered: string; raf: number }

const ELLIPSIS='…';
const segmenter=typeof Intl.Segmenter==='function'
  ? new Intl.Segmenter(undefined,{granularity:'grapheme'})
  : null;
const states=new WeakMap<Element,TruncateState>();
let observed=new WeakSet<Element>();
let resizeObserver:ResizeObserver|null=null;
let disposeTruncation:(()=>void)|null=null;
let tracked=new Set<Element>();

const graphemes=(value:unknown)=>segmenter
  ? [...segmenter.segment(String(value??''))].map(part=>part.segment)
  : Array.from(String(value??''));

/* The pure algorithm boundary is exported separately so Node can test it directly without faking a DOM. fits(candidate) is injected by the
   browser measurement layer; the binary search finds the longest head-plus-tail combination that fits, and odd positions prefer keeping the head. */
function middleTruncateText(value:unknown,fits:(candidate:string)=>boolean):string{
  const parts=graphemes(value);
  if(!parts.length||fits(value as string))return String(value??'');
  let low=0,high=Math.max(0,parts.length-1),best=ELLIPSIS;
  while(low<=high){
    const kept=(low+high)>>1;
    const head=Math.ceil(kept/2),tail=Math.floor(kept/2);
    const candidate=parts.slice(0,head).join('')+ELLIPSIS+(tail?parts.slice(-tail).join(''):'');
    if(fits(candidate)){best=candidate;low=kept+1}else high=kept-1;
  }
  return best;
}

const measuredWidth=Object.assign((element:Element,value:string)=>{
  const style=getComputedStyle(element);
  const canvas=measuredWidth.canvas||(measuredWidth.canvas=document.createElement('canvas'));
  const context=canvas.getContext('2d');
  if(!context)return Number.POSITIVE_INFINITY;
  /* Chromium returns the computed font shorthand as an empty string when font-variant-numeric's tabular figures are on;
     assigning it directly would make Canvas silently fall back to 10px sans-serif, underestimating CJK filename widths. */
  context.font=style.font||`${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  let width=context.measureText(value).width;
  const letterSpacing=parseFloat(style.letterSpacing);
  if(Number.isFinite(letterSpacing))width+=Math.max(0,graphemes(value).length-1)*letterSpacing;
  const wordSpacing=parseFloat(style.wordSpacing);
  if(Number.isFinite(wordSpacing))width+=(value.match(/\s/g)||[]).length*wordSpacing;
  return width;
},{canvas:null as HTMLCanvasElement|null});

/* Available width defaults to the element's own box. Elements with data-middle-truncate-within shrink to fit content (with
   something else right behind, like the "max" tag after a file name), so their own box is the current text's width; using it
   as the ceiling, the sub-pixel rounding loss in clientWidth would declare "does not fit" every round, truncating shorter
   each time. Such elements measure by the parent instead: the parent's content width minus all siblings and column gaps is
   what the text can take. */
const availableWidth=(element:HTMLElement)=>{
  if(element.dataset.middleTruncateWithin===undefined)return element.clientWidth;
  const box=element.parentElement;if(!box)return element.clientWidth;
  const style=getComputedStyle(box);
  const gap=parseFloat(style.columnGap)||0;
  let used=0,shown=0;
  for(const child of box.children){
    const width=child.getBoundingClientRect().width;
    if(child===element){shown++;continue}
    if(width>0){used+=width;shown++}
  }
  return box.getBoundingClientRect().width-(parseFloat(style.paddingLeft)||0)-(parseFloat(style.paddingRight)||0)
    -used-gap*Math.max(0,shown-1);
};

const paint=(element:HTMLElement)=>{
  const state=states.get(element);if(!state||!element.isConnected)return;
  const available=availableWidth(element);
  const rendered=available>0
    ? middleTruncateText(state.full,candidate=>measuredWidth(element,candidate)<=available)
    : state.full;
  state.rendered=rendered;
  if(element.textContent!==rendered)element.textContent=rendered;
  const truncated=rendered!==state.full;
  element.classList.toggle('middle-truncated',truncated);
  element.setAttribute('aria-label',state.full);
  if(!element.hasAttribute('title')||element.dataset.middleTitle==='true'){
    element.title=state.full;element.dataset.middleTitle='true';
  }
};

const schedule=(element:Element)=>{
  const state=states.get(element);if(!state||state.raf)return;
  state.raf=requestAnimationFrame(()=>{state.raf=0;paint(element as HTMLElement)});
};

const bind=(element:Element)=>{
  if(!(element instanceof HTMLElement))return;
  if(!states.has(element))states.set(element,{full:element.textContent||'',rendered:element.textContent||'',raf:0});
  if(!observed.has(element)){
    observed.add(element);
    tracked.add(element);
    /* Elements measured against their parent recompute with the parent's size: their own box changes only with the text, never with the window. */
    if(element.dataset.middleTruncateWithin!==undefined&&element.parentElement)resizeObserver?.observe(element.parentElement);
    else resizeObserver?.observe(element);
  }
  schedule(element);
};

const scan=(node:Node)=>{
  if(node.nodeType!==Node.ELEMENT_NODE)return;
  const element=node as Element;
  if(element.matches('[data-middle-truncate]'))bind(element);
  element.querySelectorAll('[data-middle-truncate]').forEach(bind);
};

function initMiddleTruncate(root:Document|Element=document):()=>void{
  disposeTruncation?.();
  observed=new WeakSet<Element>();tracked=new Set<Element>();
  const elements=tracked;
  let live=true;
  resizeObserver=new ResizeObserver(entries=>entries.forEach(entry=>{
    if(!live)return;
    schedule(entry.target);
    entry.target.querySelectorAll?.(':scope>[data-middle-truncate-within]').forEach(schedule);
  }));
  const resize=resizeObserver;
  scan((root as Document).documentElement||root);
  const mutations=new MutationObserver(records=>records.forEach(record=>{
    if(!live)return;
    record.addedNodes.forEach(scan);
    const element=record.target.nodeType===Node.TEXT_NODE?record.target.parentElement:record.target as Element;
    const target=element?.closest?.('[data-middle-truncate]') as HTMLElement|null|undefined;
    if(!target)return;
    const state=states.get(target);
    if(state&&target.textContent!==state.rendered){
      state.full=target.textContent||'';
      if(target.dataset.middleTitle==='true')target.removeAttribute('title');
      schedule(target);
    }
  }));
  mutations.observe((root as Document).body||root,{childList:true,characterData:true,subtree:true});
  document.fonts?.ready?.then(()=>{if(live)root.querySelectorAll('[data-middle-truncate]').forEach(schedule)});
  const copy:EventListener=event=>{
    const selection=document.getSelection();
    if(!selection||selection.isCollapsed)return;
    const anchor=selection.anchorNode?.nodeType===Node.ELEMENT_NODE?selection.anchorNode as Element:selection.anchorNode?.parentElement;
    const target=anchor?.closest?.('[data-middle-truncate]');
    const state=target&&states.get(target);
    if(!state||!target.contains(selection.focusNode)||!(event as ClipboardEvent).clipboardData)return;
    (event as ClipboardEvent).clipboardData?.setData('text/plain',state.full);event.preventDefault();
  };
  root.addEventListener('copy',copy);
  const dispose=()=>{
    if(!live)return;live=false;
    resize.disconnect();mutations.disconnect();root.removeEventListener('copy',copy);
    for(const element of elements){const state=states.get(element);if(state?.raf){cancelAnimationFrame(state.raf);state.raf=0}}
    elements.clear();
    if(disposeTruncation===dispose){disposeTruncation=null;resizeObserver=null}
  };
  disposeTruncation=dispose;
  return dispose;
}

export { initMiddleTruncate, middleTruncateText };
