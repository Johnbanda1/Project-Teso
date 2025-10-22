import React from 'react';
import { Shield, FileText, AlertTriangle, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 dragon-scale"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 dragon-fire">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                Welcome to Teso Works & Supply Ltd. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing our website or engaging our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700">
                Teso Works & Supply Ltd ("we," "our," or "us") is a construction company incorporated in Zambia, providing construction, consultancy, and building material supply services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <FileText className="mr-2 text-secondary" size={24} />
                2. Services
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We provide the following services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Residential and commercial construction</li>
                  <li>Architectural design and planning</li>
                  <li>Construction consultancy</li>
                  <li>Building materials supply</li>
                  <li>Renovation and repair services</li>
                  <li>Project management</li>
                </ul>
                <p>
                  All services are subject to separate written agreements that will specify the scope, timeline, and terms specific to each project.
                </p>
              </div>
            </div>

            {/* Contract Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <Scale className="mr-2 text-secondary" size={24} />
                3. Contract Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold">3.1 Project Agreements</h3>
                <p>
                  Each construction project will be governed by a separate written contract that includes detailed specifications, timelines, payment terms, and other project-specific conditions.
                </p>
                
                <h3 className="text-xl font-semibold">3.2 Estimates and Quotations</h3>
                <p>
                  All estimates and quotations are valid for 30 days unless otherwise specified. Final pricing may vary based on actual site conditions and material costs at the time of construction.
                </p>
                
                <h3 className="text-xl font-semibold">3.3 Changes and Variations</h3>
                <p>
                  Any changes to the original scope of work must be agreed upon in writing through our change order process. Additional costs and time extensions will be documented and approved before implementation.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">4. Payment Terms</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold">4.1 Payment Schedule</h3>
                <p>
                  Unless otherwise agreed, payments are typically structured as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>20% deposit upon contract signing</li>
                  <li>30% upon foundation completion</li>
                  <li>30% upon roofing completion</li>
                  <li>20% upon final completion and handover</li>
                </ul>
                
                <h3 className="text-xl font-semibold">4.2 Late Payments</h3>
                <p>
                  Late payments may incur interest charges of 2% per month. Work may be suspended if payments are more than 14 days overdue.
                </p>
              </div>
            </div>

            {/* Warranties */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <Shield className="mr-2 text-secondary" size={24} />
                5. Warranties and Guarantees
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold">5.1 Structural Warranty</h3>
                <p>
                  We provide a 10-year warranty on structural work against defects in materials and workmanship under normal use and conditions.
                </p>
                
                <h3 className="text-xl font-semibold">5.2 General Warranty</h3>
                <p>
                  All other work is warranted for 12 months from the date of completion against defects in materials and workmanship.
                </p>
                
                <h3 className="text-xl font-semibold">5.3 Warranty Exclusions</h3>
                <p>
                  Warranties do not cover damage due to normal wear and tear, misuse, lack of maintenance, or acts of nature.
                </p>
              </div>
            </div>

            {/* Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <AlertTriangle className="mr-2 text-secondary" size={24} />
                6. Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our liability is limited to the contract value of the specific project. We are not liable for indirect, consequential, or punitive damages.
                </p>
                <p>
                  We maintain comprehensive insurance coverage including general liability, professional indemnity, and workers' compensation insurance.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Intellectual Property</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  All designs, plans, and specifications created by us remain our intellectual property unless specifically transferred in writing.
                </p>
                <p>
                  Clients grant us the right to use photographs of completed projects for marketing purposes unless otherwise agreed.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Termination</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Either party may terminate a contract with 30 days written notice. In case of termination, payment is due for all work completed and materials ordered.
                </p>
                <p>
                  We reserve the right to terminate immediately in case of non-payment or breach of contract terms.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">9. Governing Law</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  These Terms are governed by the laws of Zambia. Any disputes will be resolved through the courts of Zambia or through arbitration as agreed by both parties.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h3>
              <p className="text-gray-200 mb-6">
                If you have any questions about these Terms and Conditions, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:info@tesoworks.com"
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;