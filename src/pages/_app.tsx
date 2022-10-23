import 'assets/styles/index.css';
import type { AppProps } from 'next/app';

import Authorization from 'components/hoc/Authorization';

import { StoreProvider } from 'providers/store.provider';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <StoreProvider>
    <Authorization>
      <Component {...pageProps} />
    </Authorization>
  </StoreProvider>
);

export default App;
