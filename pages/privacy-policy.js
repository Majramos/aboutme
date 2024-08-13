import Layout from '../components/Layout';
import { GoHome } from '../components/Buttons';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <Layout title="marcoramos.me privacy policy">
            <section className="relative flex flex-col justify-center text-justify overflow-hidden">
                <div className="text-container">
                    <h1 className="text-xl sm:text-3xl text-center">Privacy Policy</h1>
                </div>
                <div className="text-container">
                    <h2>Introduction</h2>
                    <p>Welcome to marcoramos.me (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy policy or our practices with regards to your personal information, please contact us at marco@marcoramos.me.</p>
                </div>
                <div className="text-container">
                    <h2>Information We Collect</h2>
                    <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>
                    <p>The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                    <ul>
                        <li><strong>Name and Contact Data</strong>: We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
                        <li><strong>Credentials</strong>: We collect passwords, password hints, and similar security information used for authentication and account access.</li>
                        <li><strong>Payment Data</strong>: We collect data necessary to process your payment if you make purchases, such as your payment instrument number (e.g., a credit card number), and the security code associated with your payment instrument.</li>
                        <li><strong></strong></li>
                    </ul>
                </div>
                <div className="text-container">
                    <h2>How We Use Your Information</h2>
                    <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below:</p>
                    <ul>
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send administrative information to you for business purposes, legal reasons, and/or possibly for contractual reasons.</li>
                        <li>To fulfill and manage your orders for contractual reasons.</li>
                        <li>To manage user accounts for the purpose of managing our relationship with you.</li>
                        <li>To send you marketing and promotional communications with your consent.</li>
                        <li>To deliver targeted advertising to you for our business purposes and/or with your consent.</li>
                    </ul>
                </div>
                <div className="text-container">
                    <h2>Sharing Your Information</h2>
                    <p>We only share and disclose your information in the following situations:</p>
                    <ul>
                        <li>Compliance with Laws: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                        <li>Vital Interests and Legal Rights: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, and illegal activities, or as evidence in litigation in which we are involved.</li>
                        <li>Vendors, Consultants, and Other Third-Party Service Providers: We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.</li>
                    </ul>
                </div>
                <div className="text-container">
                    <h2>Security of Your Information</h2>
                    <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                </div>
                <div className="text-container">
                    <h2>Your Privacy Rights</h2>
                    <p>In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                </div>
                <div className="text-container">
                    <h2>GDPR Compliance</h2>
                    <p>We are committed to complying with the General Data Protection Regulation (GDPR) and ensuring the protection of your personal data. This section outlines our compliance with GDPR requirements.</p>
                </div>
                <div className="text-container">
                    <h2>Data Protection Principles</h2>
                    <p>We adhere to the following data protection principles as required by GDPR:</p>
                    <ul>
                        <li><strong>Lawfulness, Fairness, and Transparency</strong>: We process personal data lawfully, fairly, and in a transparent manner.</li>
                        <li><strong>Purpose Limitation</strong>: We collect personal data for specified, explicit, and legitimate purposes and do not process it further in a manner that is incompatible with those purposes.</li>
                        <li><strong>Data Minimization</strong>: We collect only the personal data that is adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed.</li>
                        <li><strong>Accuracy</strong>: We ensure that personal data is accurate and, where necessary, kept up to date.</li>
                        <li><strong>Storage Limitation</strong>: We keep personal data in a form that permits identification of data subjects for no longer than is necessary for the purposes for which the personal data is processed.</li>
                        <li><strong>Integrity and Confidentiality</strong>: We process personal data in a manner that ensures appropriate security, including protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage, using appropriate technical or organizational measures.</li>
                    </ul>
                </div>
                <div className="text-container">
                    <h2>Data Subject Rights</h2>
                    <p>Under GDPR, you have the following rights regarding your personal data:</p>
                    <ul>
                        <li><strong>Right to Access</strong>: You have the right to request access to your personal data and obtain information about how we process it.</li>
                        <li><strong>Right to Rectification</strong>: You have the right to request the correction of inaccurate or incomplete personal data.</li>
                        <li><strong>Right to Erasure</strong>: You have the right to request the deletion of your personal data under certain circumstances.</li>
                        <li><strong>Right to Restrict Processing</strong>: You have the right to request the restriction of processing of your personal data under certain conditions.</li>
                        <li><strong>Right to Data Portability</strong>: You have the right to receive your personal data in a structured, commonly used, and machine-readable format and have the right to transmit that data to another controller.</li>
                        <li><strong>Right to Object</strong>: You have the right to object to the processing of your personal data under certain circumstances.</li>
                        <li><strong>Right to Withdraw Consent</strong>: If we rely on your consent to process your personal data, you have the right to withdraw your consent at any time.</li>
                    </ul>
                </div>
                <div className="text-container">
                    <h2>Data Protection Officer</h2>
                    <p>We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy or our data protection practices, please contact our DPO at marco@marcoramos.me.</p>
                </div>
                <div className="text-container">
                    <h2>Legal Basis for Processing</h2>
                    <p>We process your personal data based on one or more of the following legal bases:</p>
                    <ul>
                        <li><strong>Consent</strong>: You have given your consent for us to process your personal data for a specific purpose.</li>
                        <li><strong>Contract</strong>: The processing is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract.</li>
                        <li><strong>Legal Obligation</strong>: The processing is necessary for compliance with a legal obligation to which we are subject.</li>
                        <li><strong>Legitimate Interests</strong>: The processing is necessary for the purposes of our legitimate interests, except where such interests are overridden by your interests or fundamental rights and freedoms.</li>
                    </ul>
                </div>
                <div className="text-container">
                    <h2>International Data Transfers</h2>
                    <p>We may transfer your personal data to countries outside the European Economic Area (EEA) that do not provide the same level of data protection as the EEA. In such cases, we ensure that appropriate safeguards are in place to protect your personal data, such as standard contractual clauses approved by the European Commission.</p>
                </div>
                <div className="text-container">
                    <h2>Data Security</h2>
                    <p>We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including measures to protect your personal data from unauthorized access, use, alteration, and disclosure.</p>
                </div>
                <div className="text-container">
                    <h2>Complaints</h2>
                    <p>If you believe that we have not complied with your data protection rights, you have the right to lodge a complaint with a supervisory authority, in particular in the EU Member State where you reside, work, or where the alleged infringement took place.</p>
                </div>
                <div className="text-container">
                    <h2>Cookies and Tracking Technologies</h2>
                    <p>We use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our <Link id="cokiee-policy-link" href="/cokiee-policy"><em>Cookie Policy</em>.</Link></p>
                </div>
                <div className="text-container">
                    <h2>Changes to This Privacy Policy</h2>
                    <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
                </div>
                <div className="text-container">
                    <h2>Contact Us</h2>
                    <p>If you have questions or comments about this policy, you may contact us at:</p>
                    <ul>
                        <li><strong>Email</strong>: marco@marcoramos.me</li>
                    </ul>
                </div>
                <div className="text-container">
                    <div className="flex justify-center space-x-2 py-4">
                        <p>This policy is effective as of 2024-07-23.</p>
                    </div>
                </div>
            </section>
            <div className="flex justify-center space-x-2 py-6 m-10">
                <GoHome />
            </div>
        </Layout>
    )
}
