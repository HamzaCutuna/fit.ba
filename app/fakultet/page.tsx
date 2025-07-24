'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Award, Globe, Building2, Laptop, Monitor } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';

export default function FakultetPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('facultyPage.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t('facultyPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* O Fakultetu Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Osnovne informacije */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t('facultyPage.basicInfo.title')}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t('facultyPage.basicInfo.content1')}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('facultyPage.basicInfo.content2')}
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t('facultyPage.basicInfo.inClass')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{t('facultyPage.basicInfo.distanceLearning')}</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src="/images/fakultet1.jpg" 
                    alt="University building"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Distance Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 text-white">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Laptop className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{t('facultyPage.distanceLearning.title')}</h3>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    {t('facultyPage.distanceLearning.content1')}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t('facultyPage.distanceLearning.content2')}
                  </p>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Distance learning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Kvalitet i zaposlenost */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                  <img 
                    src="/images/fakultet3.jpg" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 order-1 lg:order-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t('facultyPage.quality.title')}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t('facultyPage.quality.content1')}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('facultyPage.quality.content2')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Saradnja */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t('facultyPage.collaboration.title')}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t('facultyPage.collaboration.content1')}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t('facultyPage.collaboration.content2')}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('facultyPage.collaboration.content3')}
                  </p>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src="/images/fit4.jpg" 
                    alt="International collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Kontinuirano unapređenje */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                  <img 
                    src="/images/fakultet4.jpg" 
                    alt="Continuous improvement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 text-white order-1 lg:order-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{t('facultyPage.improvement.title')}</h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    {t('facultyPage.improvement.content')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Riječ prvog dekana Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('facultyPage.firstDean.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">{t('facultyPage.firstDean.name')}</h3>
                  <p className="text-blue-600 font-medium">{t('facultyPage.firstDean.position')}</p>
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  &quot;{t('facultyPage.firstDean.quote')}&quot;
                </blockquote>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('facultyPage.firstDean.content1')}
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('facultyPage.firstDean.content2')}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {t('facultyPage.firstDean.content3')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 