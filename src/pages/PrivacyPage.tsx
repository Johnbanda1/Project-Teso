import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 dragon-scale"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 dragon-fire">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated */}
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Teso Works & Supply Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700">
                By using our website or services, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <Database className="mr-2 text-secondary" size={24} />
                2. Information We Collect
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
                  <p className="mb-2">We may collect personal information that you provide directly to us, including:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Project details and requirements</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">2.2 Automatically Collected Information</h3>
                  <p className="mb-2">When you visit our website, we may automatically collect:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address and browser information</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <Eye className="mr-2 text-secondary" size={24} />
                3. How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and maintain our construction services</li>
                  <li>To communicate with you about projects and services</li>
                  <li>To process payments and manage contracts</li>
                  <li>To improve our website and services</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <UserCheck className="mr-2 text-secondary" size={24} />
                4. Information Sharing and Disclosure
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We may share your information in the following circumstances:</p>
                
                <h3 className="text-xl font-semibold">4.1 Service Providers</h3>
                <p>
                  We may share information with trusted third-party service providers who assist us in operating our business, such as payment processors, subcontractors, and professional consultants.
                </p>
                
                <h3 className="text-xl font-semibold">4.2 Legal Requirements</h3>
                <p>
                  We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety.
                </p>
                
                <h3 className="text-xl font-semibold">4.3 Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                </p>
                
                <h3 className="text-xl font-semibold">4.4 Consent</h3>
                <p>
                  We may share information with your explicit consent for specific purposes not covered in this policy.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <Lock className="mr-2 text-secondary" size={24} />
                5. Data Security
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>Security measures include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Secure payment processing through certified providers</li>
                  <li>Regular backups and disaster recovery procedures</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <Shield className="mr-2 text-secondary" size={24} />
                6. Your Rights and Choices
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restrict Processing:</strong> Request limitation of processing</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage.
                </p>
                <p>Types of cookies we use:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p>
                  You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Data Retention</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
                <p>Typical retention periods:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Project-related information: 7 years after project completion</li>
                  <li>Marketing communications: Until you unsubscribe</li>
                  <li>Website analytics: 26 months</li>
                  <li>Financial records: As required by law</li>
                </ul>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <AlertCircle className="mr-2 text-secondary" size={24} />
                9. Changes to This Privacy Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services after any modifications constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Your Privacy?</h3>
              <p className="text-gray-200 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="text-white mb-4">
                <p><strong>Email:</strong> privacy@tesoworks.com</p>
                <p><strong>Phone:</strong> +260977120664</p>
                <p><strong>Address:</strong> Plot No. 6, Pelican Street, Salama Park, Lusaka, Zambia</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:privacy@tesoworks.com"
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
                >
                  Email Privacy Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;