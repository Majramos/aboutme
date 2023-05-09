import Link from 'next/link';
import fsPromises from 'fs/promises';
import path from 'path';

import Layout from '../components/Layout';
import HomeLogos from '../components/Logos';
import { ButtonBase } from '../components/Buttons';
import { TabWrapper, TabButtonWrapper } from '../components/TabsSections';


export async function getStaticProps() {
    const cvfilePath = path.join(process.cwd(), 'data/cv.json');
    const filePathprojects = path.join(process.cwd(), 'data/projects.json');

    const jsonDatacvdata = await fsPromises.readFile(cvfilePath);
    const jsonDataprojects = await fsPromises.readFile(filePathprojects);

    const cvdata = JSON.parse(jsonDatacvdata);
    const projects = JSON.parse(jsonDataprojects);

    return {
        props: {
            cvdata, projects
        }
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

    const cvdata = props.cvdata

    return (
        <Layout title="Marco Ramos">
            <section className="relative flex min-h-screen flex-col justify-center text-center overflow-hidden">
               <div className="flex justify-center">
                    <Name>{ cvdata.first_name }</Name>
                    <Name>{ cvdata.last_name }</Name>
                </div>
                <p className="text-md sm:text-2xl py-6 select-none">
                    { cvdata.ocupation }
                </p>
                <HomeLogos />
                <TabButtonWrapper />
            </section>
            <section id="target-cv" className="m-10">
                <div className="p-6 text-sm sm:text-base rounded-2xl backdrop-opacity-75 backdrop-blur-sm shadow-lg hover:shadow-xl focus:shadow-xl transition duration-300">
                    { cvdata.introduction.map( (text, index) => (
                        <p key={index} className="select-none italic whitespace-pre-wrap text-justify py-3">
                            { text }
                        </p>
                        )
                    )}
                    <p className="text-center text-lg font-bold pt-2">
                        { cvdata.full_name }
                    </p>
                </div>
                <div className="mt-5 flex justify-center">
                    <Link id="download-cv-button" href="/marco_ramos_cv.pdf" target="_blank" rel="noopener noreferrer">
                        <ButtonBase> Download CV / Resume </ButtonBase>
                    </Link>
                </div>
            </section>
            <section id="tab-section" className="m-10 mb-15">
                <TabWrapper props={ props }/>
            </section>
        </Layout>
    )
}
