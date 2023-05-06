import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import fsPromises from 'fs/promises';
import path from 'path';

import Layout from '../components/Layout';
import HomeLogos from '../components/Logos';
import { ButtonBase } from '../components/Buttons';
import { TabWrapper, TabButtonWrapper } from '../components/TabsSections';


import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyResume } from '../components/cv_pdf.js';

//import dynamic from 'next/dynamic';

//const MyResume = dynamic(() => import('../components/cv_pdf.js'), {
  //ssr: false,
//});


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

//<Link href="/cv">
    //<ButtonBase> Download CV / Resume </ButtonBase>
//</Link>


//{
    //process.browser && <PDFDownloadLink document={<MyResume cvdata={ props.cvdata }/>} fileName="test_pdf.pdf">
        //<ButtonBase> Download CV / Resume </ButtonBase>
    //</PDFDownloadLink>
//}

export default function Home( props ) {

    const cvdata = props.cvdata

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {  // avoid hydration errors
    if (typeof window !== "undefined") {
        setHasWindow(true);
    }
    }, []);

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
                    {
                        hasWindow && <PDFDownloadLink document={<MyResume cvdata={ props.cvdata }/>} fileName="test_pdf.pdf">
                            <ButtonBase> Download CV / Resume </ButtonBase>
                        </PDFDownloadLink>
                    }
                </div>
            </section>
            <section id="tab-section" className="m-10 mb-15">
                <TabWrapper props={ props }/>
            </section>
        </Layout>
    )
}
