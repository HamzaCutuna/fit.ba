'use client';

import { motion } from 'framer-motion';
import { Download, Users, TrendingUp, BookOpen, Target, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '../../../contexts/LanguageContext';

const StaUpisatiPage = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: TrendingUp,
      title: t('upis.staUpisati.employment'),
      description: t('upis.staUpisati.employmentDesc')
    },
    {
      icon: Users,
      title: t('upis.staUpisati.dynamicDevelopment'),
      description: t('upis.staUpisati.dynamicDevelopmentDesc')
    },
    {
      icon: BookOpen,
      title: t('upis.staUpisati.qualityProgram'),
      description: t('upis.staUpisati.qualityProgramDesc')
    },
    {
      icon: Target,
      title: t('upis.staUpisati.marketAlignment'),
      description: t('upis.staUpisati.marketAlignmentDesc')
    },
    {
      icon: Award,
      title: t('upis.staUpisati.goodCooperation'),
      description: t('upis.staUpisati.goodCooperationDesc')
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
              {t('upis.staUpisati.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('upis.staUpisati.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Choose FIT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {t('upis.staUpisati.whyTitle')}
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                {t('upis.staUpisati.whyDescription1')}
              </p>
              
              <p className="text-lg mb-6">
                {t('upis.staUpisati.whyDescription2')}
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Continuous Improvement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('upis.staUpisati.continuousImprovement')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('upis.staUpisati.continuousImprovementDesc')}
            </p>
            <div className="text-center">
              <p className="text-xl font-semibold text-blue-600 mb-4">
                {t('upis.staUpisati.visionMessage')}
              </p>
            </div>
          </motion.div>

          {/* Informator Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4">
                {t('upis.staUpisati.informatorTitle')}
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                {t('upis.staUpisati.informatorDescription')}
              </p>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-blue-100 mb-4">
                {t('upis.staUpisati.informatorPurpose')}
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center"
            >
              <a
                href="/documents/informator.pdf"
                download="FIT-Informator.pdf"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                {t('upis.staUpisati.downloadInformator')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StaUpisatiPage; 