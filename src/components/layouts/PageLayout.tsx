import Head from 'next/head';
import { FC, Fragment } from 'react';

interface IPageLayoutProps {
  title?: string;
  children: JSX.Element;
}

const PageLayout: FC<IPageLayoutProps> = ({ title, children }): JSX.Element => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <main>{children}</main>
  </Fragment>
);

export default PageLayout;
