import Head from 'next/head';

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Marco Ramos aka majramos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="bg-zinc-100">
                <main className="container mx-auto max-w-7xl min-h-screen">
                    {children}
                </main>
            </body>
        </>
    );
}
