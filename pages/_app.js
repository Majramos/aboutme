import Script from 'next/script';
import { useEffect } from 'react';

import '../styles/cookieconsent.css';
import '../styles/cookieconsent_custom.css';
import '../styles/globals.css';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Script
            type="module"
            src="/scripts/cookieconsent-config.js"
            strategy="beforeInteractive"
        />
        <Script
            id="base-script"
            src="/scripts/scripts.js"
            strategy="beforeInteractive"
            onReady={() => {themeChecker()}}
        />

        <Component {...pageProps} />

        {/*  Google Tag Manager */}
        <Script
            id="gtag-base"
            strategy="afterInteractive"
        >
            {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5XGV4NT')
            `}
        </Script>
    </>
    )
}
