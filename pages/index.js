import Link from 'next/link';
import fsPromises from 'fs/promises';
import path from 'path';

import Layout from '../components/Layout';
import Socials from '../components/Socials';
import { ButtonBase } from '../components/Buttons';
import { TabWrapper, TabButtonWrapper } from '../components/TabsSections';


export async function getStaticProps() {

    const cvfilePath = path.join(process.cwd(), 'data/cv.json');
    const jsonDatacvdata = await fsPromises.readFile(cvfilePath);
    const cvdata = JSON.parse(jsonDatacvdata);

    return {
        props: {
            cvdata
        }
    }
}


function Name({ children }) {
    const classes = 'text-5xl sm:text-8xl font-bold hover:scale-x-[-1]'
    return (
        <div className="flex mx-3">
            {
                children.toString().trim().split('').map(
                    (l, i) => <h1 key={l+i} className={ classes }>{l}</h1>
                )
            }
        </div>
    )
}


export default function Home( props ) {

    const cvdata = props.cvdata

    return (
        <Layout title="Marco Ramos aka majramos">
            <section className="relative flex min-h-screen flex-col justify-center text-center">
               <div id="big-name" className="flex justify-center my-5">
                    <Name>{ cvdata.first_name }</Name>
                    <Name>{ cvdata.last_name }</Name>
                </div>
                <div className="flex justify-center my-5">
                    <Socials />
                </div>
                <div className="flex justify-center my-5">
                    <TabButtonWrapper />
                </div>
                <div className="h-4">
                    <p id="linkshower"></p>
                </div>
            </section>
            <section id="target-cv" className="m-10">
                <div className="text-container">
                    { cvdata.introduction.map( (text, index) => (
                        <p key={index} className="select-none italic whitespace-pre-wrap text-justify py-3">
                            { text }
                        </p>
                        )
                    )}
                </div>
                <div className="mt-5 flex justify-center">
                    <Link id="download-cv-button" href="/marco_ramos_cv.pdf" target="_blank" rel="noopener noreferrer">
                        <ButtonBase> Download CV </ButtonBase>
                    </Link>
                </div>
            </section>
            <section id="tab-section" className="m-10">
                <TabWrapper props={ props }/>
            </section>
        </Layout>
    )
}
