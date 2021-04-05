import Head from 'next/head';
// Components
import MainWrap from '../components/utils/MainWrap';
import SkewWrap from '../components/utils/SkewWrap';
// Styling
import '../global/styles/index.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matt Postlethwaite </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <MainWrap>
        <SkewWrap>
          <Component {...pageProps} />
        </SkewWrap>
      </MainWrap>
    </>
  );
}
