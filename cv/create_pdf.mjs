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
    format: "a4",
    lineHeight: 1.15
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
const fontFamily = "helvetica";  // courier
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
// guide_lines()

/*
 * Header Section
 */
let sideMargin = 20
let contactSpacing = (pageWidth - (sideMargin * 2)) / 4
let firstContact = sideMargin + (contactSpacing / 2)
let contactHeight = 25

pdf.setFontSize(30)
    .setFont(fontFamily, "bold")
    .setTextColor(darkColor)
    .text(cvdata.full_name, pageWidth/2, 17.5, {"align": "center"})
    .setFontSize(10)
    .setFont(fontFamily, "italic")
    // .text(cvdata.ocupation, pageWidth/2, 25, {"align": "center"})
    // ((210-20)/4)/2+10
    .text(cvdata.email.secondary, firstContact, contactHeight, {"align": "center"})

let socialPosition = firstContact + contactSpacing
cvdata.socials.map((social, index) => {
    if ( index >= 1) { index = 1 }

    pdf.setFontSize(10)
        .setFont(fontFamily, "italic")
        .textWithLink(social.name, socialPosition, contactHeight,
            {"align": "center", "url": social.link}
        );
    socialPosition = socialPosition + contactSpacing
});


let verticalSpacerX = 60;

pdf.setDrawColor(lineColor)
    .setLineWidth(0.5)
    // horizontal line
    .line(10, 30, pageWidth-10, 30)
    // vertical line
    .line(verticalSpacerX, 37, verticalSpacerX, 280);

let startBodyHeight = 38;
let rightRowHeight = startBodyHeight;
let leftRowHeight = startBodyHeight;

/*
 * Introduction Section
 */
let leftSideWidth = 45
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text(
        "Profile",
        10,
        leftRowHeight,
        {"align": "left"}
    )
    .setFontSize(10)
    .setFont(fontFamily, "normal")
    .text(cvdata.introduction[0], 12, leftRowHeight = leftRowHeight+6,
        {"align": "left", "maxWidth": leftSideWidth}
    );

// number of rows * font size in pt * convertion pt to mm
function getTextHeight( text, width ) {
    return pdf.splitTextToSize(text, width).length*(10*(0.4));
};

let profileTextHeight = getTextHeight(cvdata.introduction[0], leftSideWidth);

/*
 * Skills Section
 */
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text(
        "Skills",
        10,
        leftRowHeight = leftRowHeight+profileTextHeight+6,
        {"align": "left"}
    );

leftRowHeight = leftRowHeight+6
cvdata.skills.map((skill, index) => {
    if ( index >= 1) { index = 1 }
    leftRowHeight = leftRowHeight+(index*7);

    pdf.setFontSize(10)
        .setFont(fontFamily, "normal")
        .text(
            skill.name,
            12,
            leftRowHeight,
            {"align": "left"}
        )
        // .setDrawColor("#e4e4e4")
        // .setLineWidth(1)
        // .line(
            // 10,
            // leftRowHeight+2,
            // 10+leftSideWidth,
            // leftRowHeight+2
        // )
        // .setDrawColor("#585858")
        // .setLineWidth(1)
        // .line(
            // 10,
            // leftRowHeight+2,
            // 10+(9*skill.level),
            // leftRowHeight+2
        // );
});

/*
 * Work Section
 */ 
let rightSideStart = verticalSpacerX+5;
let rightSideEnd = pageWidth-10;
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text(
        "Work",
        rightSideStart,
        rightRowHeight = rightRowHeight,
        {"align": "left"}
    );

rightRowHeight = rightRowHeight+7

cvdata.timeline
    .filter(item => item.type === "work" )
    .map((time, index) => {
        if ( index >= 1) { index = 1 }
        rightRowHeight = rightRowHeight+(index*3);

        pdf.setFontSize(12)
            .setFont(fontFamily, "bold")
            .text(
                time.title,
                rightSideStart+2,
                rightRowHeight,
                {"align": "left"}
            )
            .setFontSize(10)
            .setFont(fontFamily, 'italic')
            .text(
                time.start+" - "+(time.end || "present"),
                rightSideStart+2,
                rightRowHeight+6,
                {"align": "left"}
            )
            .text(
                time.where,
                rightSideEnd,
                rightRowHeight+6,
                {"align": "right"}
            )
            .setFont(fontFamily, 'normal');

        // space between date and description
        rightRowHeight= rightRowHeight+12;
        time.description.map((desc, subindex) => {
            pdf.setFontSize(10)
                .text(
                    "•",
                    rightSideStart+2,
                    rightRowHeight, {"align": "left"}
                )
                .text(
                    desc,
                    rightSideStart+4,
                    rightRowHeight,
                    {"align": "justify", "maxWidth": 130}
                );
            // space between descriptions
            rightRowHeight = rightRowHeight+3+getTextHeight(desc, 130);
        });
    });


/*
 * Education Section
 */
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text(
        "Education",
        rightSideStart,
        rightRowHeight = rightRowHeight+6,
        {"align": "left"}
    );

cvdata.timeline
    .filter(item => item.type === "education" )
    .map((time, index) => {

        pdf.setFontSize(10)
            .setFont(fontFamily, "bold")
            .text(
                time.title,
                rightSideStart+2,
                rightRowHeight = rightRowHeight+6,
                {"align": "left"}
            )
            .setFontSize(10)
            .setFont(fontFamily, 'italic')
            .text(
                time.end,
                rightSideStart+2,
                rightRowHeight = rightRowHeight+5,
                {"align": "left"}
            )
            .text(
                time.where,
                rightSideEnd,
                rightRowHeight,
                {"align": "right"}
             )
            .setFont(fontFamily, 'normal');
    });

/*
 * Footer
 */
const footerText = cvdata.full_name+
    " ".repeat(5)+
    cvdata.personalpage.name+
    " ".repeat(5)+
    "Last Update: "+
    cvdata.last_update;

pdf.setFontSize(8)
    .setFont(fontFamily, 'italic')
    .setTextColor("#8a8a8a")
    .textWithLink(
        footerText,
        (pageWidth / 2),
        pageHeight-5,
        {"align": "center", "url": cvdata.personalpage.link}
    );

/*
 * Save pdf
 */
pdf.save(path.join(process.cwd(), 'build/marco_ramos_cv.pdf'));
