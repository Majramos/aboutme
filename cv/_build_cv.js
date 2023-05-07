import fsPromises from 'fs/promises';
import path from 'path';

import { React, useEffect } from 'react';

import { createRoot } from 'react-dom/client';
import { PDFViewer, renderToFile } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

import Layout from '../components/Layout';
import { MyResume } from '../components/cv_pdf.js';

import { saveAs } from 'file-saver';

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


export default function Resume( props ) {

    const App = () => (
        <PDFViewer width="100%" className= "min-h-screen">
            <MyResume cvdata={ props.cvdata }/>
        </PDFViewer>
    );

    useEffect(() => {
        const container = document.getElementById('resume_pdf');
        const root = createRoot(container);
        root.render(<App />);
    }, []);

    return (
        <Layout title="Marco Ramos">
            <div id="resume_pdf" className="h-full min-h-screen py-2">
            </div>
        </Layout>
    );
}
