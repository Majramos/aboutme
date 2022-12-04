import { useEffect } from 'react';
import Head from 'next/head';


export default function Layout({ title, children }) {

    useEffect(() => {
        document.body.classList.add('bg-zinc-100');
    });

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Marco Ramos aka majramos" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link rel="manifest" href="/icons/site.webmanifest" />
            </Head>
            <main className="container mx-auto max-w-7xl min-h-screen">
                {children}
            </main>
        </>
    );
}

