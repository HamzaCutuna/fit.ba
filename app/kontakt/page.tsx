'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Users, HeadphonesIcon, BookOpen, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '../../contexts/LanguageContext';

const KontaktPage = () => {
  const { t } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: t('contact.faqItems.0.question') || 'Kako mogu kontaktirati studentsku službu?',
      answer: t('contact.faqItems.0.answer') || 'Studentska služba je dostupna putem email-a na esluzba@edu.fit.ba ili telefonom na +38736/281-160. Radno vrijeme je ponedjeljak-petak od 11h do 14h.'
    },
    {
      question: t('contact.faqItems.1.question') || 'Koji su načini plaćanja školarine?',
      answer: t('contact.faqItems.1.answer') || 'Informacije o plaćanju školarine možete dobiti kontaktiranjem studentske službe ili prodekana za nastavu.'
    },
    {
      question: t('contact.faqItems.2.question') || 'Kako mogu dobiti tehničku podršku?',
      answer: t('contact.faqItems.2.answer') || 'Tehnička podrška je dostupna putem email-a na tehnicka.podrska@edu.fit.ba za sve pitanja vezana za Office 365, Microsoft Imagine i domenu.'
    },
    {
      question: t('contact.faqItems.3.question') || 'Kada je radno vrijeme fakulteta?',
      answer: t('contact.faqItems.3.answer') || 'Studentska služba radi ponedjeljak-petak od 11h do 14h. Za ostale službe, kontaktirajte direktno odgovorne osobe.'
    },
    {
      question: t('contact.faqItems.4.question') || 'Kako mogu dobiti pristup DLWMS sistemu?',
      answer: t('contact.faqItems.4.answer') || 'Za pristup DLWMS sistemu i tehničku podršku, kontaktirajte dlwms.podrska@edu.fit.ba.'
    },
    {
      question: t('contact.faqItems.5.question') || 'Kako mogu zakazati sastanak s dekanom?',
      answer: t('contact.faqItems.5.answer') || 'Za sastanak s dekanom prof. dr. Ninom Bijedić, kontaktirajte je direktno na nbijedic@edu.fit.ba ili telefonom +38736/281-172.'
    }
  ];

  const contactInfo = [
        {
            title: t('contact.positions.dean'),
            name: 'prof. dr. Nina Bijedić',
            email: 'nbijedic@edu.fit.ba',
            phone: '+387 36/281-172',
            icon: Users,
            category: 'leadership'
        },
        {
            title: t('contact.positions.viceDeanTeaching'),
            name: 'doc. dr. Iris Memić-Fišić',
            email: 'prodekan.nastava@edu.fit.ba',
            email2: 'iris@edu.fit.ba',
            phone: '+387 36/281-162',
            icon: Users,
            category: 'leadership'
        },
        {
            title: t('contact.positions.viceDeanResearch'),
            email: 'prodekan.nir@edu.fit.ba',
            icon: Users,
            category: 'leadership'
        },
        {
            title: t('contact.positions.studentService'),
            name: 'Lejla Jazvin',
            email: 'esluzba@edu.fit.ba',
            phone: '+387 36/281-160',
            workingHours: t('contact.workingHours.studentService'),
            icon: BookOpen,
            category: 'services'
        },
        {
            title: t('contact.positions.techSupport'),
            services: t('contact.services.office365'),
            email: 'tehnicka.podrska@edu.fit.ba',
            icon: HeadphonesIcon,
            category: 'support'
        },
        {
            title: t('contact.positions.dlwmsSupport'),
            email: 'dlwms.podrska@edu.fit.ba',
            icon: HeadphonesIcon,
            category: 'support'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <Navbar />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {t('contact.title')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {t('contact.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contactInfo.map((contact, index) => (
                            <motion.div
                                key={contact.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <contact.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="ml-3 text-xl font-semibold text-gray-900">
                                        {contact.title}
                                    </h3>
                                </div>

                                {contact.name && (
                                    <p className="text-gray-700 font-medium mb-3">{contact.name}</p>
                                )}

                                {contact.services && (
                                    <p className="text-sm text-gray-600 mb-3">{contact.services}</p>
                                )}

                                <div className="space-y-2">
                                    {contact.email && (
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                        >
                                            <Mail className="w-4 h-4 mr-2" />
                                            <span className="text-sm">{contact.email}</span>
                                        </a>
                                    )}

                                    {contact.email2 && (
                                        <a
                                            href={`mailto:${contact.email2}`}
                                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                        >
                                            <Mail className="w-4 h-4 mr-2" />
                                            <span className="text-sm">{contact.email2}</span>
                                        </a>
                                    )}

                                    {contact.phone && (
                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                        >
                                            <Phone className="w-4 h-4 mr-2" />
                                            <span className="text-sm">{contact.phone}</span>
                                        </a>
                                    )}

                                    {contact.workingHours && (
                                        <div className="flex items-center text-gray-700">
                                            <Clock className="w-4 h-4 mr-2" />
                                            <span className="text-sm">{contact.workingHours}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('contact.location')}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t('contact.locationSubtitle')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.026938567732!2d17.80496509336482!3d43.35554710780076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b439e0c65cb4d%3A0xbd11c66192f5a493!2sFakultet%20informacijskih%20tehnologija%20-%20UNMO!5e0!3m2!1sbs!2sba!4v1752956205723!5m2!1sbs!2sba"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-[450px]"
                            ></iframe>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-gray-700 font-medium">
                                    {t('contact.locationText')}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('contact.faq')}
                        </h2>
                        <p className="text-lg text-gray-600">
                            {t('contact.faqSubtitle')}
                        </p>
                    </motion.div>

                              <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default KontaktPage; 