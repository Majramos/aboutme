import { useEffect } from 'react';
import Layout from '../components/Layout';
import HomeLogos from '../components/Logos';
import { ButtonPair } from '../components/Buttons';
import fsPromises from 'fs/promises';
import path from 'path';


export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data/cv.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}

function Name({ children }) {
    const classes = 'text-5xl sm:text-8xl font-bold transition duration-300 ease-in-out hover:scale-x-[-1]'        
    return (
        <div className="flex mx-3">
            { children.toString().trim().split('').map( (l, i) => <h1 key={l+i} className={ classes }>{l}</h1>) }
        </div>
    )                                                                                                              
}


export default function Home( props ) {
    
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
                    <Name>{ props.first_name }</Name>
                    <Name>{ props.last_name }</Name>
                </div>
                <p className="text-md sm:text-2xl py-6 select-none">
                    { props.ocupation }
                </p>
                <HomeLogos />
                <div className="mt-14 space-x-6">
                    <ButtonPair id="resume-button" href="#target-cv">CV</ButtonPair>
                    <ButtonPair id="projects-button" href='#'>Projects</ButtonPair>
                </div>
            </section>
            <section id="target-cv" className="m-10">
                <div className="p-6 rounded-2xl backdrop-opacity-25 hover:backdrop-opacity-75 backdrop-blur-sm shadow-lg hover:shadow-xl transition duration-300">
                    <p className="select-none whitespace-pre-wrap text-justify">
                        { props.introduction }
                    </p>
                    <p className="text-right pt-2">
                        { props.full_name }
                    </p>
                </div>
            </section>
        </Layout>
    )
}

