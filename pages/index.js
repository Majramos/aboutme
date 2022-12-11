import Layout from '../components/Layout';
import HomeLogos from '../components/Logos';
import { ThemeSwitch } from '../components/Buttons';


export default function Home() {
    return (
        <Layout title="Marco Ramos">
            <div className="relative flex min-h-screen flex-col justify-center text-center overflow-hidden">
                <h1 className="text-5xl sm:text-8xl font-bold">
                    Marco Ramos
                </h1>
                <p className="text-md sm:text-2xl py-6">
                    Geologist / Data Scientist
                </p>
                <HomeLogos />
                <div className="flex justify-center py-6">
                    <ThemeSwitch />
                </div>
            </div>
        </Layout>
    )
}

