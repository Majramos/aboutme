import fsPromises from 'fs/promises';
import path from 'path';

import { jsPDF } from "jspdf";


const cvfilePath = path.join(process.cwd(), 'data/cv.json');
const jsonDatacvdata = await fsPromises.readFile(cvfilePath);
const cvdata = JSON.parse(jsonDatacvdata);

// create pdf
const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
});

pdf.setProperties({
    title: "Marco Ramos CV",
    subject: "Short written summary of a person's career, qualifications, and education",
    author: "Marco Ramos",
    keywords: "curriculum vitae, marco ramos, jspdf",
    creator: "Marco Ramos"
});

const pageWidth = pdf.getPageWidth();  // 210
const pageHeight = pdf.getPageHeight();  // 297
const fontFamily = "helvetica"; // courier
const darkColor = "#585858";
const lineColor = "#e4e4e4";


// draw guide lines to well place stuff
const guide_lines = () => {
    pdf.setDrawColor("#f0f0f0"); //.line(0, 10, pageWidth, 10);
    let i = 0;
    while (i < pageHeight) { // horizontal line
        if (i%10 == 0) { pdf.line(0, i, pageWidth, i); }
        i++;
    }

    i = 0;
    while (i < pageWidth) { // vertical line
        if (i%10 == 0) { pdf.line(i, 0, i, pageHeight); }
        i++;
    }

    pdf.setDrawColor("#000000") // reset draw color
}
//guide_lines()

/*
 * Header Section
 */
pdf.setFontSize(38)
    .setFont(fontFamily, "bold")
    .setTextColor(darkColor)
    .text(cvdata.full_name, pageWidth/2, 20, {"align": "center"})
    .setFontSize(14)
    .setFont(fontFamily, "normal")
    .text(cvdata.ocupation, pageWidth/2, 28, {"align": "center"})
    .setDrawColor(lineColor)
    .setLineWidth(0.5)
    .line(10, 32, pageWidth-10, 32)
    .line(150, 37, 150, 280);

let startBodyHeight = 40;

/*
 * Contact Section
 */
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text("Contacts", pageWidth-10, startBodyHeight, {"align": "right"})
    .setFontSize(10)
    .setFont(fontFamily, "italic")
    .text(cvdata.email.primary, pageWidth-12, startBodyHeight+6,
        {"align": "right"}
    )
    .text(cvdata.email.secondary, pageWidth-12, startBodyHeight+11,
        {"align": "right"}
    );

/*
 * Socials Section
 */
let socialsHeight = startBodyHeight+20;
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text("Socials", pageWidth-10, socialsHeight, {"align": "right"});

cvdata.socials.map((social, index) => {
    pdf.setFontSize(10)
        .setFont(fontFamily, "italic")
        .textWithLink(social.name, pageWidth-12,
            socialsHeight+6+((index)*5),
            {"align": "right", "url": social.link}
        );
});

/*
 * Skills Section
 */
let skillsHeight = 95;
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text("Skills", pageWidth-10, skillsHeight, {"align": "right"});

cvdata.skills.map((skill, index) => {

    let skillSpacing = (skillsHeight+8)+(index*7);

    pdf.setFontSize(10)
        .setFont(fontFamily, "normal")
        .text(skill.name, pageWidth-12, skillSpacing, {"align": "right"})
        .setDrawColor("#e4e4e4")
        .setLineWidth(1)
        .line(pageWidth-50, skillSpacing+2, pageWidth-10, skillSpacing+2)
        .setDrawColor("#585858")
        .setLineWidth(1)
        .line(pageWidth-10-(8*skill.level), skillSpacing+2,
            pageWidth-10, skillSpacing+2
        );
});


let leftRowHeight = startBodyHeight;

/*
 * Introduction Section
 */
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text("Profile", 10, startBodyHeight, {"align": "left"})
    .setFontSize(10)
    .setFont(fontFamily, "normal")
    .text(cvdata.introduction[0], 12, leftRowHeight = leftRowHeight+6,
        {"align": "justify", "maxWidth": 127}
    );


// number of rows * font size in pt * convertion pt to mm
function getTextHeight( text ) {
    return pdf.splitTextToSize(text, 125).length*(10*(0.4));
};

let profileTextHeight = getTextHeight(cvdata.introduction[0]);


/*
 * Work Section
 */
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text("Work", 10, leftRowHeight = leftRowHeight+profileTextHeight+6,
        {"align": "left"}
    );


leftRowHeight = leftRowHeight+7

cvdata.timeline
    .filter(item => item.type === "work" )
    .map((time, index) => {
        if ( index >= 1) { index = 1 }
        leftRowHeight = leftRowHeight+(index*3);

        pdf.setFontSize(12)
            .setFont(fontFamily, "bold")
            .text(time.title, 12, leftRowHeight, {"align": "left"})
            .setFontSize(10)
            .setFont(fontFamily, 'italic')
            .text(time.start+" - "+(time.end || "present"), 12,
                leftRowHeight+6, {"align": "left"})
            .text(time.where, 140, leftRowHeight+6, {"align": "right"})
            .setFont(fontFamily, 'normal');

        leftRowHeight= leftRowHeight+12;
        time.description.map((desc, subindex) => {
            pdf.setFontSize(10)
                .text("•", 12, leftRowHeight, {"align": "left"})
                .text(desc, 14, leftRowHeight,
                    {"align": "justify", "maxWidth": 125}
                );
            leftRowHeight = leftRowHeight+1+getTextHeight(desc);
        });
    });


/*
 * Education Section
 */
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text("Education", 10, leftRowHeight = leftRowHeight+6,
        {"align": "left"}
    );

cvdata.timeline
    .filter(item => item.type === "education" )
    .map((time, index) => {

        pdf.setFontSize(10)
            .setFont(fontFamily, "bold")
            .text(time.title, 12, leftRowHeight = leftRowHeight+6,
                {"align": "left"}
            )
            .setFontSize(10)
            .setFont(fontFamily, 'italic')
            .text(time.start+" - "+(time.end || "present"), 12,
                leftRowHeight = leftRowHeight+5, {"align": "left"}
            )
            .text(time.where, 140, leftRowHeight, {"align": "right"})
            .setFont(fontFamily, 'normal');
    });


/*
 * Footer
 */
const footerText = cvdata.full_name+" ".repeat(5)+"Last Update: "+cvdata.last_update;
pdf.setFontSize(8)
    .setFont(fontFamily, 'italic')
    .setTextColor("#8a8a8a")
    .text(footerText, pageWidth/2, pageHeight-10, {"align": "center"});


/*
 * Save pdf
 */
pdf.save(path.join(process.cwd(), 'build/marco_ramos_cv.pdf'));
