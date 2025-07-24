'use client';

import { motion } from 'framer-motion';
import { DollarSign, RefreshCw, FileText, Clock, CreditCard, AlertCircle, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '../../../contexts/LanguageContext';

const CijeneStudijaPage = () => {
  const { t } = useTranslation();
  const tuitionInfo = [
    {
      icon: DollarSign,
      title: t('upis.cijeneStudija.tuitionFirstCycle'),
      amount: "1800,00 KM",
      description: t('upis.cijeneStudija.tuitionDescription'),
      details: t('upis.cijeneStudija.tuitionDetails')
    },
    {
      icon: RefreshCw,
      title: t('upis.cijeneStudija.renewalYear'),
      amount: "400,00 KM + 100,00 KM",
      description: t('upis.cijeneStudija.renewalDescription'),
      details: t('upis.cijeneStudija.renewalDetails')
    }
  ];

  const paymentOptions = [
    {
      icon: CreditCard,
      title: t('upis.cijeneStudija.regularTuition'),
      subtitle: t('upis.cijeneStudija.firstCycleStudy'),
      items: [
        t('upis.cijeneStudija.totalAmount'),
        t('upis.cijeneStudija.firstInstallment'),
        t('upis.cijeneStudija.secondInstallment')
      ]
    },
    {
      icon: RefreshCw,
      title: t('upis.cijeneStudija.renewalYear'),
      subtitle: t('upis.cijeneStudija.repeatEnrollment'),
      items: [
        t('upis.cijeneStudija.semesterFee'),
        t('upis.cijeneStudija.examFee'),
        t('upis.cijeneStudija.twoInstallments'),
        t('upis.cijeneStudija.secondInstallmentDeadline')
      ]
    }
  ];

  const specialArrangements = [
    {
      icon: AlertCircle,
      title: t('upis.cijeneStudija.specialArrangements'),
      description: t('upis.cijeneStudija.specialPaymentDescription')
    },
    {
      icon: FileText,
      title: t('upis.cijeneStudija.feeDecision'),
      description: t('upis.cijeneStudija.feeDecisionDescription'),
      hasLink: true
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
              {t('upis.cijeneStudija.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('upis.cijeneStudija.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('upis.cijeneStudija.infoTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {t('upis.cijeneStudija.infoSubtitle')}
            </p>
          </motion.div>

          {/* Tuition Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 mb-16"
          >
            {tuitionInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-xl">
                    <info.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {info.title}
                    </h3>
                    <p className="text-3xl font-bold text-blue-600">
                      {info.amount}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                  {info.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {info.details}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Payment Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('upis.cijeneStudija.paymentOptions')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {paymentOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-xl p-6 text-white"
                >
                  <div className="flex items-center mb-4">
                    <option.icon className="w-6 h-6 text-blue-200 mr-3" />
                    <div>
                      <h4 className="text-xl font-semibold">
                        {option.title}
                      </h4>
                      <p className="text-blue-200 text-sm">
                        {option.subtitle}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {option.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-blue-100">
                        <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Special Arrangements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('upis.cijeneStudija.specialOptions')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {specialArrangements.map((arrangement, index) => (
                <motion.div
                  key={arrangement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <arrangement.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {arrangement.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {arrangement.description}
                  </p>
                                     {arrangement.hasLink && (
                     <a 
                       href="/documents/odluka.pdf" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                     >
                       <Download className="w-4 h-4 mr-2" />
                       {t('upis.cijeneStudija.viewDecision')}
                     </a>
                   )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white"
          >
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">
                {t('upis.cijeneStudija.importantNotes')}
              </h3>
              <div className="max-w-3xl mx-auto space-y-4 text-blue-100">
                <p className="leading-relaxed">
                  {t('upis.cijeneStudija.note1')}
                </p>
                <p className="leading-relaxed">
                  {t('upis.cijeneStudija.note2')}
                </p>
                <p className="leading-relaxed">
                  {t('upis.cijeneStudija.note3')}
                </p>
                <p className="leading-relaxed">
                  {t('upis.cijeneStudija.note4')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CijeneStudijaPage; 