import React from 'react';
import { Link, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        color: '#585858',
        fontFamily: 'Helvetica',
        fontSize: 10,
    },
    header: {
        marginHorizontal: '10mm',
        borderBottom: '0.5mm',
        borderColor: '#e4e4e4',
        paddingBottom: '1mm'
    },
    name: {
        fontSize: 32,
        fontFamily: 'Helvetica-Bold',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: '10mm',
    },
    ocupation: {
        fontSize: 14,
        letterSpacing: 1.5,
        textAlign: 'center',
        marginVertical: '2mm',
    },
    body: {
        marginHorizontal: '10mm',
        marginVertical: '2mm',
        paddingTop: '1mm',
        flexDirection: 'row',
        maxHeight: '245mm',
    },
    bodyLeft: {
        borderRight: '0.5mm',
        borderColor: '#e4e4e4',
        paddingRight: '5mm',
        width: '145mm',
    },
    bodyRight: {
        paddingLeft: '5m',
        flexGrow: 1,
    },
    sectionHeader: {
        fontSize: 14,
        fontFamily: 'Helvetica-Bold',
    },
    sectionSpacer: {
        marginBottom: "7.5mm",
    },
    leftSectionSpacer: {
        marginTop: '3mm',
    },
    alignRight: {
        marginLeft: 'auto',
    },
    leftText: {
        textAlign: 'left',
        paddingLeft: '2mm',
        paddingTop: '1.5mm',
    },
    leftText4: {
        textIndent: '-2mm',
        paddingLeft: '4mm',
    },
    subSpacerLeft: {
        paddingTop: '2mm',
        paddingBottom: '1mm',
        flexDirection: 'row',
    },
    contacts: {
        fontFamily: 'Helvetica-Oblique',
        marginTop: '1mm',
        textDecoration: 'none',
        color: '#585858',
        paddingRight: '2mm',
    },
    footer: {
        fontSize: 8,
        flexDirection: 'row',
        alignContent: 'center',
        color: '#8a8a8a',
        position: 'absolute',
        bottom: '10mm',
        width: '100%',
    },
    footertext : {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Helvetica-Oblique',
    }
});

function BaseResume({ children }) {
    return (
        <Document
            title="Marco's Resume"
            author="Marco Ramos"
            subject="Short written summary of a person's career, qualifications, and education"
            keywords="marco, ramos, cv, resume"
            creator="Marco Ramos"
            producer="Marco Ramos"
        >
            <Page size="A4"
                style={ styles.page }
                orientation="portrait"
            >
                { children }
            </Page>
        </Document>
    )
}

function Timeline( { cvdata, type } ) {

    const data = cvdata.timeline.filter(item => item.type === type );

    return (
        <View>
        {
            data.map((d, i) => (
                    <View key={ type+i } style={ styles.leftSectionSpacer }>
                        <Text style={{ fontFamily: 'Helvetica-Bold' }}>{ d.title }</Text>
                        <View style={ styles.subSpacerLeft }>
                            <Text style={{ fontFamily: 'Helvetica-Oblique' }}>
                                { d.start+" - "+(d.end || "present") }
                            </Text>
                            <Text style={{ marginLeft: 'auto' }}>{ d.where }</Text>
                        </View>
                        { type === "work" ? d.description.map((d, i) => (
                            <Text style={[ styles.leftText, styles.leftText4 ]} key={ i }>• { d }</Text>
                                )
                            ) : null
                        }
                    </View>
                )
            )
        }
        </View>

    )
}

export function MyResume( { cvdata } ) {

    return (
        <BaseResume>
            <View style={ styles.header }>
                <Text style={ styles.name }>{ cvdata.full_name }</Text>
                <Text style={ styles.ocupation }>{ cvdata.ocupation }</Text>
            </View>
            <View style={ styles.body }>
                <View style={ styles.bodyLeft }>
                    <View style={ styles.sectionSpacer }>
                        <Text style={ styles.sectionHeader }>Profile</Text>
                        <Text style={ styles.leftText }>{ cvdata.introduction[0] }</Text>
                    </View>
                    <View style={ styles.sectionSpacer }>
                        <Text style={ styles.sectionHeader }>Employment History</Text>
                        <Timeline cvdata={ cvdata } type="work"/>
                    </View>
                    <View style={ styles.sectionSpacer }>
                        <Text style={ styles.sectionHeader }>Education</Text>
                        <Timeline cvdata={ cvdata } type="education"/>
                    </View>
                </View>
                <View style={ styles.bodyRight }>
                    <View style={ styles.sectionSpacer }>
                        <Text style={[ styles.sectionHeader, styles.alignRight ]}>Contacts</Text>
                        <Text style={[ styles.alignRight, styles.contacts ]}>{ cvdata.email.primary }</Text>
                        <Text style={[ styles.alignRight, styles.contacts ]}>{ cvdata.email.secondary }</Text>
                    </View>
                    <View style={ styles.sectionSpacer }>
                        <Text style={[ styles.sectionHeader, styles.alignRight ]}>Socials</Text>
                        { cvdata.socials.map((social, index) => (
                                <Link
                                    src={ social.link }
                                    style={[ styles.alignRight, styles.contacts ]}
                                    key={ index }>
                                    { social.name }
                                </Link>
                                )
                            )
                        }
                    </View>
                    <View style={ styles.sectionSpacer }>
                        <Text style={[ styles.sectionHeader, styles.alignRight ]}>Skills</Text>
                        { cvdata.skills.map((skill, index) => (
                                <Text style={[ styles.alignRight, styles.contacts ]} key={ index }>
                                    { skill.name }
                                </Text>
                            )
                            )
                        }
                    </View>
                </View>
            </View>
            <View style={ styles.footer }>
                <Text style={ styles.footertext }>{ cvdata.full_name }     Last Update: { cvdata.last_update }</Text>
            </View>
        </BaseResume>
    )
};
