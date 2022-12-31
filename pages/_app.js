import '../styles/globals.css';
import Script from 'next/script';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Script id="darkmode-script" src="/scripts/darkmode.js" strategy="beforeInteractive" />
        <Script id="show-links-script" src="/scripts/showlinks.js" strategy="beforeInteractive" />
        <Component {...pageProps} />
    </>
    )
}

