import type { MouseEventHandler, ReactNode } from 'react';

export function ListCredits({ avatar, cast, children, onClick }: {
  avatar: ReactNode;
  cast: ReactNode;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  return <div data-list-people="" onClick={onClick}>
    {avatar}
    <div data-list-credits="">
      <div data-list-person-line="">{children}</div>
      {cast}
    </div>
  </div>;
}
