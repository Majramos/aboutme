import Layout from '../components/Layout';
import { GoHome } from '../components/Buttons';


export default function Custom404() {
    return (
        <Layout title="Oops! 404">
            <section className="relative flex min-h-screen flex-col justify-center text-center overflow-hidden">
                <h1 className="text-xl sm:text-3xl font-bold">
                    404 - Page Not Found
                </h1>
                <div className="flex justify-center space-x-2 py-6">
                    <GoHome />
                </div>
            </section>
        </Layout>
    )
}

