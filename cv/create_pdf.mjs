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
let contactSpacing = (pageWidth - ((sideMargin-10) * 2)) / 4
let firstContact = (sideMargin-10) + (contactSpacing / 2)
let contactHeight = 25

pdf.setFontSize(30)
    .setFont(fontFamily, "bold")
    .setTextColor(darkColor)
    .text(
        cvdata.full_name,
        pageWidth/2,
        17.5,
        {"align": "center"}
    )
    .setFontSize(10)
    .setFont(fontFamily, "italic")
    .text(
        cvdata.email.secondary,
        firstContact,
        contactHeight,
        {"align": "center"}
    )

let socialPosition = firstContact + contactSpacing
cvdata.socials.map((social, index) => {
    if ( index >= 1) { index = 1 }

    pdf.setFontSize(10)
        .setFont(
            fontFamily,
            "italic"
        )
        .textWithLink(
            social.name,
            socialPosition,
            contactHeight,
            {
                "align": "center",
                "url": social.link
            }
        );
    socialPosition = socialPosition + contactSpacing
});

pdf.setDrawColor(lineColor)
    .setLineWidth(0.5)
    // horizontal line
    .line(10, 30, pageWidth-10, 30)

let currentHeight = 38;
const textWidth = pageWidth-sideMargin-1
const rightSideEnd = pageWidth-10;

/*
 * Introduction Section
 */

pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text(
        "Profile",
        10,
        currentHeight,
        {"align": "left"}
    )
    .setFontSize(10)
    .setFont(fontFamily, "normal")
    .text(
        cvdata.introduction[0],
        10,
        currentHeight = currentHeight+7,
        {
            "align": "justify",
            "maxWidth": textWidth
        }
    );

// number of rows * font size in pt * convertion pt to mm
function getTextHeight( text, width ) {
    return pdf.splitTextToSize(text, width).length*(10*(0.4));
};

let profileTextHeight = getTextHeight(cvdata.introduction[0], textWidth);

/*
 * Work Section
 */

pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text(
        "Experience",
        10,
        currentHeight = currentHeight+profileTextHeight+6,
        {"align": "left"}
    );
    
pdf.setLineWidth(0.1).line(41, currentHeight-1.5, pageWidth-10, currentHeight-1.5)

currentHeight = currentHeight+7 // space to first work

cvdata.timeline
    .filter(item => item.type === "work" )
    .map((time, index) => {
        if ( index >= 1) {
            currentHeight = currentHeight+1;
        }

        // currentHeight = currentHeight+(index*2);

        pdf.setFontSize(11)
            .setFont(fontFamily, "bold")
            .text(
                time.title,
                10,
                currentHeight,
                {"align": "left"}
            )
            .setFontSize(10)
            .setFont(fontFamily, 'italic')
            .text(
                time.start+" - "+(time.end || "present"),
                10,
                currentHeight = currentHeight+6,
                {"align": "left"}
            )
            .text(
                time.where,
                rightSideEnd,
                currentHeight,
                {"align": "right"}
            )
            .setFont(fontFamily, 'normal');

        // space between date and description
        currentHeight= currentHeight+6;
        time.description.map((desc, subindex) => {
            pdf.setFontSize(10)
                .text(
                    "•",
                    10,
                    currentHeight,
                    {"align": "left"}
                )
                .text(
                    desc,
                    12,
                    currentHeight,
                    {
                        "align": "justify",
                        "maxWidth": textWidth-2
                    }
                );
            // space between descriptions
            currentHeight = currentHeight+3+getTextHeight(desc, textWidth-2);
        });
    });

/*
 * Education Section
 */

pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text(
        "Education",
        10,
        currentHeight = currentHeight+3,
        {"align": "left"}
    );
    
pdf.setLineWidth(0.1).line(39, currentHeight-1.5, pageWidth-10, currentHeight-1.5)
    
// currentHeight = currentHeight+7

cvdata.timeline
    .filter(item => item.type === "education" )
    .map((time, index) => {

        pdf.setFontSize(10)
            .setFont(fontFamily, "bold")
            .text(
                time.title,
                10,
                currentHeight = currentHeight+6,
                {"align": "left"}
            )
            .setFontSize(10)
            .setFont(fontFamily, 'italic')
            .text(
                time.end,
                10,
                currentHeight = currentHeight+6,
                {"align": "left"}
            )
            .text(
                time.where,
                rightSideEnd,
                currentHeight,
                {"align": "right"}
             )
            .setFont(fontFamily, 'normal');
    });
 
/*
 * Skills Section
 */
 
pdf.setFontSize(14)
    .setFont(fontFamily, "bold")
    .text(
        "Skills",
        10,
        currentHeight = currentHeight+9,
        {"align": "left"}
    );
    
pdf.setLineWidth(0.1).line(28, currentHeight-1.5, pageWidth-10, currentHeight-1.5)

let skillstring = cvdata.skills[0].name
cvdata.skills.slice(1).map((skill, index) => {
    skillstring = skillstring+", "+skill.name
});

pdf.setFontSize(10)
    .setFont(fontFamily, "normal")
    .text(
        skillstring,
        10,
        currentHeight+7,
        {
            "align": "justify",
            "maxWidth": textWidth-2
        }
    )     

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
        {
            "align": "center",
            "url": cvdata.personalpage.link
        }
    );

/*
 * Save pdf
 */
pdf.save(path.join(process.cwd(), 'build/marco_ramos_cv.pdf'));
