import { useEffect } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

import { ThemeSwitch } from '../components/Buttons';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function Layout({ title, children }) {

    const pageSlug = usePathname();
    const pageURL = `${process.env.NEXT_PUBLIC_BASE_URL}${pageSlug}`;

    useEffect(() => {
        document.getElementById('theme-toggle').addEventListener('click', changeTheme);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeTheme);
    }, []);

    const metaDescription = "Marco Ramos personal page, with work experience, education timeline, skills and projects. Marco is a data scientist with skills in data modeling and engineering."

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="author" content="Marco Ramos" />
                <meta name="description" content={ metaDescription } />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Marco Ramos" />
                <meta name="application-name" content="Marco Ramos" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="notranslate" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={ metaDescription } />
                <meta property="og:image" content="/apple-touch-icon.png" />
                <meta property="og:image:alt" content="Image of the letter M" />
                <meta property="og:url" content="https://marcoramos.me" />
                <meta property="og:site_name" content="Marco Ramos" />

                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={ metaDescription } />
                <meta name="twitter:image:src" content="/apple-touch-icon.png" />
                <meta name="twitter:image:alt" content="Image of the letter M" />
                <meta name="twitter:url" content="https://marcoramos.me" />
                <meta name="twitter:site" content="@majramos" />

                <link rel='canonical' href={pageURL} />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                <link rel="preload" as="font" href="/fonts/mononoki-Regular.woff2" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" as="font" href="/fonts/mononoki-Bold.woff2" type="font/woff2" crossOrigin="anonymous" />
            </Head>
            <Navbar type={`${pageSlug}`}/>
            <main className="container mx-auto min-h-screen">
                { children }
            </main>
            <Footer />
            <div className="fixed bottom-4 right-4 m-2">
                <ThemeSwitch />
            </div>
        </>
    );
}
