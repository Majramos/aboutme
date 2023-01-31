import { useEffect } from 'react';
import Layout from '../components/Layout';
import HomeLogos from '../components/Logos';
import { ButtonPair } from '../components/Buttons';


function Name({ children }) {
    return (
        <h1 className="text-5xl sm:text-8xl font-bold transition duration-300 ease-in-out hover:scale-x-[-1]">
            {children}
        </h1>
    )
}


export default function Home() {
    useEffect(() => {
    
        var linkshower = document.getElementById("linkshower");

        const sites = {
            'linkedin.com/in/majramos': document.getElementById('linkedinlink'),
            'gitlab.com/majramos': document.getElementById('gitlablink'),
            'github.com/Majramos': document.getElementById('githublink'),
            'twitter.com/majramos': document.getElementById('twitterlink')
        }

        for (const [key, value] of Object.entries(sites)) {
            value.addEventListener('mouseover', (e) => { showlink(key); });
            value.addEventListener('mouseout', (e) => { linkshower.style.display = "none"; });
        }

    }, []);    

    return (
        <Layout title="Marco Ramos">
            <section className="relative flex min-h-screen flex-col justify-center text-center overflow-hidden">
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
                <div className="mt-14 space-x-6">
                    <ButtonPair id="resume-button" href="#target-cv">CV</ButtonPair>
                    <ButtonPair id="projects-button" href='#'>Projects</ButtonPair>
                </div>
            </section>
            <section id="target-cv" className="m-20">
                <p className="text-center p-6 rounded-2xl backdrop-opacity-25 hover:backdrop-opacity-75 backdrop-blur-sm shadow-lg hover:shadow-xl transition duration-300">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec orci eget diam consectetur blandit id id neque. Nam tincidunt purus lectus, at sodales quam volutpat in. Quisque egestas ullamcorper lobortis. Quisque tempus sit amet ante et scelerisque. Sed tellus tortor, faucibus nec pulvinar ac, lobortis sed neque. Ut vel libero vestibulum dolor aliquam pulvinar eu vitae felis. Cras elementum nunc eget molestie interdum. Aliquam ullamcorper consectetur justo eget sodales. Donec interdum tempor justo eu dapibus.
                </p>
            </section>
        </Layout>
    )
}

