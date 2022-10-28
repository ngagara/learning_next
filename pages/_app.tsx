import { AppPropsType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppPropsType): JSX.Element {
  return (
    <>
      <Head>
        <title>Create</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon2.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
