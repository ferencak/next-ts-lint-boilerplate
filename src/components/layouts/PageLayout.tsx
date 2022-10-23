import Head from 'next/head';
import { FC, Fragment } from 'react';

import TopBar from 'components/molecules/TopBar';

interface IPageLayoutProps {
  title?: string;
  children: JSX.Element;
}

const PageLayout: FC<IPageLayoutProps> = ({ title, children }): JSX.Element => (
  <Fragment>
    <Head>
      <title>{`Chilluju.tv - ${title}`}</title>
    </Head>
    <main>
      <div className="flex flex-col w-full h-screen px-12 md:px-72 py-12 bg-black/75 backdrop-blur-md">
        <TopBar />
        {children}
      </div>
    </main>
  </Fragment>
);

export default PageLayout;
