import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anura Dojo</title>
      </Head>
      <div suppressHydrationWarning className='bg-black'>
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </div>
    </>
  );
}

// https://nextjs.org/docs/advanced-features/custom-app
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
