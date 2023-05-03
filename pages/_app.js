import '../styles/globals.css';
import Script from 'next/script';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Script id="darkmode-script" src="/scripts/darkmode.js" strategy="beforeInteractive" />
        <Script id="show-links-script" src="/scripts/showlinks.js" strategy="beforeInteractive" />
        <Component {...pageProps} />

        {/* Google tag (gtag.js) */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PFT90JX0Q4"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-PFT90JX0Q4');
            `}
        </Script>
    </>
    )
}

