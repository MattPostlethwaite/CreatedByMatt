import { useEffect, useState } from "react";
import Head from "next/head";
// Components
import MainWrap from "../components/utils/MainWrap";

// Context
import { AppProvider } from "../components/utils/AppContext.js";

// Styling
import "../global/styles/index.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [favicon, setFavicon] = useState("🤓");
  const [siteTitle, setSiteTitle] = useState("Matt Postlethwaite");

  const siteTitleChanger = () => {
    window.addEventListener("blur", function () {
      setSiteTitle("Bye!");
      setFavicon("👋");

      setTimeout(() => {
        setSiteTitle("Matt Postlethwaite");
      }, 2000);
    });

    window.addEventListener("focus", function () {
      setSiteTitle("Welcome Back!");
      setFavicon("🥰");

      setTimeout(() => {
        setSiteTitle("Matt creates stuff here (sometimes)");
        setFavicon("🤓");
      }, 2000);
    });
  };

  useEffect(() => {
    siteTitleChanger();
  }, []);

  return (
    <AppProvider>
      <Head>
        <title>{siteTitle}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        ></link>

        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%221em%22 font-size=%2285%22>${favicon}</text></svg>`}
        ></link>
      </Head>

      <MainWrap>
        <Component {...pageProps} />
      </MainWrap>
    </AppProvider>
  );
}
