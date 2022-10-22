import type { NextPage } from 'next';

import PageLayout from 'components/layouts/PageLayout';

const Home: NextPage = (): JSX.Element => {
  return (
    <PageLayout title="Hello">
      <h1>Home</h1>
    </PageLayout>
  );
};

export default Home;
