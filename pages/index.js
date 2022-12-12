import Layout from '../components/Layout';
import HomeLogos from '../components/Logos';
import { ButtonBase } from '../components/Buttons';


function Name({ children }) {
    return (
        <h1 className="text-5xl sm:text-8xl font-bold transition duration-300 ease-in-out hover:scale-x-[-1]">
            {children}
        </h1>
    )
}

export default function Home() {
    return (
        <Layout title="Marco Ramos">
            <div className="relative flex min-h-screen flex-col justify-center text-center overflow-hidden">
                <div className="flex justify-center"> 
                    <div className="flex mx-3">
                        <Name>M</Name>
                        <Name>a</Name>
                        <Name>r</Name>
                        <Name>c</Name>
                        <Name>o</Name>
                    </div>
                    <div className="flex mx-3">
                        <Name>R</Name>
                        <Name>a</Name>
                        <Name>m</Name>
                        <Name>o</Name>
                        <Name>s</Name>
                    </div>
                </div>
                <p className="text-md sm:text-2xl py-6">
                    Geologist / Data Scientist
                </p>
                <HomeLogos />
                <div className="flex justify-center py-6">
                </div>
            </div>
        </Layout>
    )
}

