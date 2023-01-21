import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeSwitch } from '../components/Buttons';

export default function Layout({ title, children }) {
    useEffect(() => {
        themeChecker();
        document.getElementById('theme-toggle').addEventListener('click', changeTheme);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeTheme);
    }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Marco Ramos aka majramos" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <main className="container mx-auto max-w-7xl min-h-screen">
                {children}
            </main>
            <div className="absolute bottom-4 right-4 m-2">
                <ThemeSwitch />
            </div>
        </>
    );
}

