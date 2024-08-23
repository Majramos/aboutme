import '/scripts/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "middle center",
            equalWeightButtons: false,
            flipButtons: true
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: false,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        }
        // ,
        // analytics: {}
    },
    language: {
        default: "en",
        translations: {
            en: {
                consentModal: {
                    title: "Hello, it's cookie time!",
                    description: "We use cookies to enhance your browsing experience and analyze our traffic. By clicking “Accept All” you consent to our use of cookies. You can manage your preferences or find out more by visiting our Cookie Policy. We do not serve ads or sell your data.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/privacy-policy\">Privacy Policy</a>\n<a href=\"/cookie-policy\">Cookie Policy</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "We use cookies to enhance your browsing experience and analyze our traffic. You can manage your preferences or find out more by visiting our Cookie Policy."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the website to function properly. They enable core functionalities such as security, network management, and accessibility. You cannot disable these cookies through this interface, but they are necessary for the website to operate.",
                            linkedCategory: "necessary"
                        },
                        // {
                            // title: "Analytics Cookies",
                            // description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to measure and improve the performance of our site. You can choose to enable or disable these cookies.",
                            // linkedCategory: "analytics"
                        // },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"marcoramos.me\">contact me</a>."
                        }
                    ]
                }
            }
        }
    },
    disablePageInteraction: true
});
