/* The post-setup tutorial's state. Imported from shared source and shipped with `peach-app.js`; the request generation is
   module-level state, and the shell and settings panel read and write the same copy.

   The tutorial DOM is assembled by application/tutorial.js; completion state and rendering are separate.
   Checklist completion follows the database (`/api/settings`'s `postSetupTutorialDone`), so another device is not taught
   again; collapsing and per-item skipping are how this screen is arranged right now and stay local.
   The three keys, signatures and request generation are kept here, and the assembly side only wires them to the DOM. */
export const POST_SETUP_TUTORIAL_KEY='peach.post-setup-tutorial.v1';
export const POST_SETUP_TUTORIAL_COLLAPSED_KEY='peach.post-setup-tutorial-collapsed.v1';
export const POST_SETUP_TUTORIAL_SKIPPED_KEY='peach.post-setup-tutorial-skipped.v1';

const readStored=(key:string)=>{try{return localStorage.getItem(key)}catch{return null}};
const writeStored=(key:string,value:string)=>{try{localStorage.setItem(key,value)}catch{}};

export const postSetupTutorialMarker=():string=>readStored(POST_SETUP_TUTORIAL_KEY)||'';
export const setPostSetupTutorialMarker=(value:string):void=>writeStored(POST_SETUP_TUTORIAL_KEY,value);
export const postSetupTutorialCollapsed=():boolean=>readStored(POST_SETUP_TUTORIAL_COLLAPSED_KEY)==='1';
export const setPostSetupTutorialCollapsed=(value:unknown):void=>
  writeStored(POST_SETUP_TUTORIAL_COLLAPSED_KEY,value?'1':'0');
export const postSetupTutorialSkipped=():Set<string>=>{
  try{
    const parsed=JSON.parse(readStored(POST_SETUP_TUTORIAL_SKIPPED_KEY)||'[]');
    return new Set(Array.isArray(parsed)?parsed.filter(key=>typeof key==='string'):[]);
  }catch{return new Set()}
};
export const setPostSetupTutorialSkipped=(values:Iterable<string>):void=>
  writeStored(POST_SETUP_TUTORIAL_SKIPPED_KEY,JSON.stringify([...values]));

/* Repaint criteria: each list item's text, target, and done state. As long as that string is unchanged, the card on screen is
   still correct, and repainting only interrupts whoever is reading it and the collapse just opened. */
export const postSetupTutorialSignature=(tasks:any[]):string=>JSON.stringify(
  tasks.map(task=>[task.key,task.done,task.label,task.description,task.href]));

/* Request epoch: the tutorial refetches on every route change, and by the time the slow response lands the page may have already moved on. */
let postSetupTutorialRequest=0;
export const nextPostSetupTutorialRequest=():number=>++postSetupTutorialRequest;
export const isCurrentPostSetupTutorialRequest=(request:number):boolean=>request===postSetupTutorialRequest;

/** Reopens the tutorial: clears skipped and collapsed state, returns the local flag to incomplete, and leaves the server half to the caller. */
export function resetPostSetupTutorialState():void{
  setPostSetupTutorialSkipped(new Set());
  setPostSetupTutorialCollapsed(false);
  setPostSetupTutorialMarker('pending');
}

/** The card shown when the manifest cannot be fetched: fixed copy only, close on the left and retry now on the right; events are still handled by the assembling side. */
export const postSetupTutorialErrorHtml=(alertIcon:string):string=>
  `<article class="post-setup-notification post-setup-error">${alertIcon}
      <div><h2>Can't check setup progress right now</h2><p>It checks again after you switch pages or reopen the app.</p>
      <div class="post-setup-error-actions"><button class="geist-button" type="button" data-tutorial-dismiss>Close</button>
      <button class="geist-button" type="button" data-tutorial-retry>Retry now</button></div></div></article>`;
