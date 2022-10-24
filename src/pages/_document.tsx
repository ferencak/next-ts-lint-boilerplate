// nextjs _document.tsx using function component
import { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = (): JSX.Element => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
