import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What areas of Zambia do you service?",
    answer: "We provide construction services throughout Zambia, with a primary focus on Lusaka, Copperbelt, and Central provinces. For projects in other regions, please contact us to discuss your specific requirements and logistics.",
    category: "General"
  },
  {
    id: 2,
    question: "Do you provide free project estimates?",
    answer: "Yes, we offer free initial consultations and project estimates. Our team will assess your requirements and provide a detailed quotation for your consideration before any commitments are made. This includes site visits and preliminary design concepts.",
    category: "Pricing"
  },
  {
    id: 3,
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on the scope, complexity, and size of each project. Residential projects typically take 6-12 months, while commercial projects can range from 8-18 months. During our initial consultation, we provide a detailed timeline estimation specific to your project requirements.",
    category: "Timeline"
  },
  {
    id: 4,
    question: "Do you handle all aspects of construction?",
    answer: "Yes, we offer comprehensive construction services, including planning, design, construction, interior finishing, and project management. We can handle your project from concept to completion, including obtaining necessary permits and approvals.",
    category: "Services"
  },
  {
    id: 5,
    question: "What payment terms do you offer?",
    answer: "We typically work with a phased payment schedule that aligns with project milestones. Common structure: 20% deposit, 30% at foundation completion, 30% at roofing stage, and 20% upon final completion. Specific payment terms are discussed during the contract negotiation phase.",
    category: "Pricing"
  },
  {
    id: 6,
    question: "Are you licensed and insured?",
    answer: "Yes, Teso Works & Supply Ltd is fully licensed by the National Council for Construction (NCC) and carries comprehensive insurance coverage including general liability, workers' compensation, and professional indemnity insurance.",
    category: "Legal"
  },
  {
    id: 7,
    question: "Can you work with my architect or designer?",
    answer: "Absolutely! We frequently collaborate with external architects, designers, and engineers. We believe in teamwork and can seamlessly integrate with your existing design team to bring your vision to life.",
    category: "Services"
  },
  {
    id: 8,
    question: "What happens if there are changes during construction?",
    answer: "We understand that changes may be necessary during construction. We have a formal change order process that documents any modifications, their impact on timeline and budget, and requires written approval before implementation.",
    category: "Process"
  },
  {
    id: 9,
    question: "Do you offer warranties on your work?",
    answer: "Yes, we provide comprehensive warranties on our construction work. Structural work comes with a 10-year warranty, while finishes and systems typically have 1-2 year warranties. We also provide ongoing maintenance services.",
    category: "Warranty"
  },
  {
    id: 10,
    question: "How do you ensure quality control?",
    answer: "We have a rigorous quality control process including regular inspections at each phase, material testing, third-party inspections where required, and final walk-throughs with clients. Our quality assurance team monitors every aspect of construction.",
    category: "Quality"
  }
];

const categories = ["All", "General", "Services", "Pricing", "Timeline", "Process", "Quality", "Legal", "Warranty"];

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const filteredFAQs = activeCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 dragon-scale"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 dragon-fire">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our construction services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-secondary text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence>
              {filteredFAQs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div>
                        <span className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1 block">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="text-secondary" size={24} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openItems.includes(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-200 mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <MessageCircle size={20} className="mr-2" />
                Contact Us
              </a>
              <a
                href="tel:+260977120664"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;