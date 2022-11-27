import Layout from '../components/Layout';
import HomeLogos from '../components/Logos';

export default function Home() {
    return (
        <Layout title="Marco Ramos">
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
                <h1 className="text-center text-5xl sm:text-8xl text-zinc-700 font-bold">
                    Marco Ramos
                </h1>
                <p className="text-center py-6 selection:bg-zinc-700 selection:text-zinc-100">
                    Geologist / Data Scientist
                </p>
                <HomeLogos />
            </div>
        </Layout>
    )
}

