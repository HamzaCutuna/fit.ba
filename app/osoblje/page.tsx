'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Mail, Phone, Building2 } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';

export default function OsobljePage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('sve');

  const staffMembers = [
    // Nastavnici (Faculty)
    {
      name: 'dr. sc. Denis Mušić',
      position: 'Vanredni profesor',
      image: '/images/denis.jpg',
      email: 'denis@edu.fit.ba',
      phone: '+387 36 570 001',
      category: 'nastavnici'
    },
    {
      name: 'dr. sc. Dragi Tiro',
      position: 'Redovni profesor',
      image: '/images/dragi.jpg',
      email: 'dragi.tiro@edu.fit.ba',
      phone: '+387 36 570 002',
      category: 'nastavnici'
    },
    {
      name: 'dr. sc. Dražena Gašpar',
      position: 'Redovni profesor',
      image: '/images/drazena.jpg',
      email: 'drazena.gaspar@edu.fit.ba',
      phone: '+387 36 570 003',
      category: 'nastavnici'
    },
    {
      name: 'dr. sc. Elmir Babović',
      position: 'Vanredni profesor',
      image: '/images/elmir.jpg',
      email: 'elmir.babovic@edu.fit.ba',
      phone: '+387 36 570 004',
      category: 'nastavnici'
    },
    {
      name: 'dr. sc. Emina Junuz',
      position: 'Vanredni profesor',
      image: '/images/emina.jpg',
      email: 'emina@edu.fit.ba',
      phone: '+387 36 570 005',
      category: 'nastavnici'
    },
    {
      name: 'dr. sc. Iris Memić',
      position: 'Docent',
      image: '/images/logo-bijeli.png',
      email: 'iris@edu.fit.ba', 
      phone: '+387 36 570 006',
      category: 'nastavnici'
    },
    {
      name: 'dr. sc. Migdat Hodžić',
      position: 'Redovni profesor',
      image: '/images/migdat.jpg',
      email: 'migdat.hodzic@edu.fit.ba',
      phone: '+387 36 570 007',
      category: 'nastavnici'
    },
    {
      name: 'dr. sc. Nina Bijedić',
      position: 'Vanredni profesor',
      image: '/images/nina.png',
      email: 'nbijedic@edu.fit.ba',
      phone: '+387 36 570 008',
      category: 'nastavnici'
    },
    {
      name: 'dr. sc. Senad Rahimić',
      position: 'Redovni profesor',
      image: '/images/senad.jpg',
      email: 'senad.rahimic@edu.fit.ba',
      phone: '+387 36 570 009',
      category: 'nastavnici'
    },
    // Saradnici (Associates)
    {
      name: 'mr. sc. Adil Joldić',
      position: 'Stručnjak iz prakse',
      image: '/images/adil.jpg',
      email: 'adil@edu.fit.ba',
      phone: '+387 36 570 010',
      category: 'saradnici'
    },
    {
      name: 'mr. sc. Edina Čmanjčanin',
      position: 'Viši asistent',
      image: '/images/logo-bijeli.png',
      email: 'edina@edu.fit.ba',
      phone: '+387 36 570 011',
      category: 'saradnici'
    },
    {
      name: 'mr. Elda Sultić Faladžić',
      position: 'Asistent',
      image: '/images/elda.jpg',
      email: 'elda@edu.fit.ba',
      phone: '+387 36 570 012',
      category: 'saradnici'
    },
    {
      name: 'mr. sc. Goran Škondrić',
      position: 'Viši asistent',
      image: '/images/goran.jpg',
      email: 'goran@edu.fit.ba',
      phone: '+387 36 570 013', 
      category: 'saradnici'
    },
    {
      name: 'mr. Kemal Marić',
      position: 'Asistent',
      image: '/images/logo-bijeli.png',
      email: 'kemal@edu.fit.ba',
      phone: '+387 36 570 014',
      category: 'saradnici'
    },
    {
      name: 'Kemal Šanjta',
      position: 'Stručnjak iz prakse',
      image: '/images/kemal2.jpg',
      email: 'kemal.sanjta@edu.fit.ba',
      phone: '+387 36 570 015',
      category: 'saradnici'
    },
    {
      name: 'mr. sc. Mohamed El-Zayat',
      position: 'Viši asistent',
      image: '/images/mohamed.png',
      email: 'mohamed@fit.ba',
      phone: '+387 36 570 016',
      category: 'saradnici'
    },
    {
      name: 'mr. sc. Sanja Kapetanović',
      position: 'Viši asistent',
      image: '/images/sanja.jpg',
      email: 'sanja@edu.fit.ba',
      phone: '+387 36 570 017',
      category: 'saradnici'
    },
    // Administracija (Administration)
    {
      name: 'Dubravka Plosko, pravnik',
      position: 'Referent za opšte poslove',
      image: '/images/logo-bijeli.png',
      email: 'dubravka@edu.fit.ba',
      phone: '+387 36 570 018',
      category: 'administracija'
    },
    {
      name: 'Lejla Jazvin',
      position: 'Referent za studentska pitanja',
      image: '/images/logo-bijeli.png',
      email: 'lejla@edu.fit.ba',
      phone: '+387 36 570 019',
      category: 'administracija'
    }
  ];

  const categories = [
    { id: 'sve', name: t('staffPage.categories.all'), count: staffMembers.length },
    { id: 'nastavnici', name: t('staffPage.categories.faculty'), count: staffMembers.filter(m => m.category === 'nastavnici').length },
    { id: 'saradnici', name: t('staffPage.categories.associates'), count: staffMembers.filter(m => m.category === 'saradnici').length },
    { id: 'administracija', name: t('staffPage.categories.administration'), count: staffMembers.filter(m => m.category === 'administracija').length }
  ];

  const filteredMembers = activeFilter === 'sve' 
    ? staffMembers 
    : staffMembers.filter(member => member.category === activeFilter);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('staffPage.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t('staffPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Osoblje Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            >
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100"
                >
                  <div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight">{member.name}</h3>
                    <p className="text-xs text-blue-600 font-medium mb-1">{member.position}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <Mail className="w-3 h-3 text-blue-500 flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Kontakt sekcija */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">{t('staffPage.contact.title')}</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              {t('staffPage.contact.subtitle')}
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <a 
                  href="mailto:info@fit.ba"
                  className="block group"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t('staffPage.contact.email')}</h3>
                  <p className="text-blue-100 group-hover:text-white transition-colors duration-300">info@fit.ba</p>
                </a>
              </div>
              <div className="text-center">
                <a 
                  href="tel:+38736281160"
                  className="block group"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t('staffPage.contact.phone')}</h3>
                  <p className="text-blue-100 group-hover:text-white transition-colors duration-300">+387 36 281 160</p>
                </a>
              </div>
              <div className="text-center">
                <a 
                  href="https://maps.app.goo.gl/jS7ggG3Sr3SSMQxJ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t('staffPage.contact.address')}</h3>
                  <p className="text-blue-100 group-hover:text-white transition-colors duration-300">Sjeverni logor br. 12, Mostar</p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}