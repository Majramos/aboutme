import fsPromises from 'fs/promises';
import path from 'path';

import { jsPDF } from "jspdf";

const cvfilePath = path.join(process.cwd(), 'cv.json');
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
const darkColor = "#585858"

/**
 * Build  header texts
 * @param {String} text label to show 
 * @param {Number} y    height where to display the header
 * @param {String} side side to display the header, can be left or right
 */
function header(text, y, side) {
    let x = 10;
    if (side === "right") { x = pageWidth-10; }
    
    pdf.setFontSize(12)
        .setFont(fontFamily, 'bold')
        .text(text, x, y, {"align": side});
}

/**
 * return font size 10 normal
 * @param  {Number} size  size of the font in pt
 * @param  {String} style Font style or variant
 * @return {jsPDF}  pdf
 */
function font(size, style) {
    return pdf.setFontSize(size).setFont(fontFamily, style)
}

/**
 * build work/education section
 * @param {String} type           type of section, can be work or eduction
 * @param {Number} timeRowSpacing row start height
 */
function timeline(type, timeRowSpacing) {
    
    let totalSpace = 0;
    
    cvdata.timeline.filter(item => item.type === type ).map((time, index) => {
        
        let timeSpacing = index*5;
        let timeEnd = time.end || "present";
        
        font(10, 'bold')
            .text(time.title, 12, timeRowSpacing+timeSpacing, {"align": "left"})
            .setFontSize(10)
            .setFont(fontFamily, 'italic')
            .text(time.start+" - "+timeEnd, 12, timeRowSpacing+timeSpacing+5,
                  {"align": "left"})
            .text(time.where, 140, timeRowSpacing+timeSpacing+5,
                  {"align": "right"})
            .setFont(fontFamily, 'normal')
            .text(time.description.replace('\n', ' '), 14, timeRowSpacing+timeSpacing+10,
                {"align": "left", "maxWidth": 125}
            )
         
        let descriptionRows = pdf.splitTextToSize(time.description.replace('\n', ' '), 125).length;
        let descriptionHeight = descriptionRows*(10*(0.4));
        // number of rows * font size in pt * convert to mm
        timeRowSpacing = timeRowSpacing+descriptionHeight+10
        
        // add space taking into accoun the 2 lines of postion desciption + dates
        totalSpace += (10*0.4*2)+descriptionHeight+10;
    });

    return totalSpace;
}

// draw guide lines to well place stuff
// const guide_lines = () => {
    // pdf.setDrawColor("#f0f0f0"); //.line(0, 10, pageWidth, 10);
    // let i = 0; 
    // while (i < pageHeight) {
        // if (i%10 == 0) {
            // pdf.line(0, i, pageWidth, i);
        // }
        // i++;
    // }

    // i = 0;
    // while (i < pageWidth) {
        // if (i%10 == 0) {
            // pdf.line(i, 0, i, pageHeight);
        // }
        // i++;
    // }
    
    // pdf.setDrawColor("#000000") // reset draw color
// }
// guide_lines()

// Title section
font(32, 'bold')
    .setTextColor(darkColor)
    .text(cvdata.full_name, pageWidth/2, 18, {"align": "center"})
    .setFontSize(10)
    .text(cvdata.ocupation, pageWidth/2, 23, {"align": "center"})
    .setDrawColor("#e4e4e4")
    .line(10, 25, pageWidth-10, 25)
    .line(150, 25, 150, 280);
    
// Introduction Section
let profileHeight = 32;
header("Profile", profileHeight, "left");

font(10, 'normal')
    .text(cvdata.introduction.replace('\n\n', '\n'), 12, profileHeight+7, 
        {"align": "left", "maxWidth": 125}
    );

// Contact Section
let contactHeight = 32;
header("Contacts", contactHeight, "right");

font(10, 'italic')
    .text(cvdata.email.primary, pageWidth-12, contactHeight+7, {"align": "right"})
    .text(cvdata.email.secondary, pageWidth-12, contactHeight+12, {"align": "right"})

// Socials Section
let socialsHeight = contactHeight+20;
header("Socials", socialsHeight, "right");

// website link
let webpageStr = cvdata.webpage.replace("https://", "");
font(10, 'italic').textWithLink(webpageStr, pageWidth-12, socialsHeight+7, 
    {"align": "right", "url": cvdata.webpage}
);
// add underline
const textWidth = pdf.getTextWidth(webpageStr)
pdf.line(pageWidth-12-textWidth, socialsHeight+8, pageWidth-12, socialsHeight+8)

// other links 
cvdata.socials.map((social, index) => {
    font(10, 'italic')
        .textWithLink(social.name, pageWidth-12, socialsHeight+7+((index+1)*5),
            {"align": "right", "url": social.link}
        )
});

// Skills Section
let skillsHeight = 90;
header("Skills", skillsHeight, "right");

const skillsCenter = 181;
cvdata.skills.map((skill, index) => {
    let skillSpacing = (skillsHeight+8)+(index*7);

    font(10, 'normal')
        .text(skill.name, pageWidth-12, skillSpacing, {"align": "right"})
        .setDrawColor("#e4e4e4")
        .setLineWidth(1)
        .line(pageWidth-50, skillSpacing+2,  pageWidth-10, skillSpacing+2)
        .setDrawColor("#585858")
        .setLineWidth(1)
        .line(pageWidth-10-(8*skill.level), skillSpacing+2,  pageWidth-10, skillSpacing+2);
});

// Employment History Section
let profileTextLength = pdf.splitTextToSize(cvdata.introduction.replace('\n\n', '\n'), 125).length;
// number of rows * font size in pt * convert to mm
let employmentHeight = profileHeight+profileTextLength*(10*(0.4))+15
header("Employment History", employmentHeight, "left");
let employmentSpace = timeline("work", employmentHeight+7);

// Education Section
// let educationHeight = 210;
let educationHeight = employmentHeight+employmentSpace+5;
header("Education", educationHeight, "left");
let educationSpace = timeline("education", educationHeight+7);

// Footer
const footerText = cvdata.full_name+" ".repeat(5)+"Last Update: "+cvdata.last_update;
font(8, 'italic').setTextColor("#8a8a8a")
    .text(footerText, pageWidth/2, pageHeight-10, {"align": "center"});

// save pdf
pdf.save("marco_ramos_cv_"+cvdata.last_update+".pdf");
