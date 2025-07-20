import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html dir="ltr" lang="en">
      <Head />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XGV4NT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
        <canvas id="particle-background"></canvas>
      </body>
    </Html>
  );
}
