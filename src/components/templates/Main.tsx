import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div className="w-full  antialiased">
    {meta}

    <div className="">{children}</div>
  </div>
);

export { Main };
