'use client';

import { motion } from 'framer-motion';
import { DollarSign, RefreshCw, FileText, Clock, CreditCard, AlertCircle, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CijeneStudijaPage = () => {
  const tuitionInfo = [
    {
      icon: DollarSign,
      title: "Školarina za I ciklus",
      amount: "1800,00 KM",
      description: "Školarina za sve godine I ciklusa iznosi 1800,00 KM.",
      details: "Studenti školarinu mogu uplatiti u dvije rate po 900,00 KM. Prva rata se uplaćuje prilikom upisa na godinu, a druga do kraja kalendarske godine (31.12.)."
    },
    {
      icon: RefreshCw,
      title: "Obnova godine",
      amount: "400,00 KM + 100,00 KM",
      description: "Studenti koji obnavljaju godinu za ponovljeni upis plaćaju 400,00 KM za semestar + 100,00 KM za svaki preostali nepoloženi ispit.",
      details: "Studenti mogu iznos za obnovu također platiti u dvije jednake rate (drugu ratu trebaju platiti do ovjere zimskog semestra i upisa ljetnog semestra.)"
    }
  ];

  const paymentOptions = [
    {
      icon: CreditCard,
      title: "Redovna školarina",
      subtitle: "I ciklus studija",
      items: [
        "Ukupan iznos: 1800,00 KM",
        "Prva rata: 900,00 KM (prilikom upisa)",
        "Druga rata: 900,00 KM (do 31.12.)"
      ]
    },
    {
      icon: RefreshCw,
      title: "Obnova godine",
      subtitle: "Ponovljeni upis",
      items: [
        "Semestar: 400,00 KM",
        "Nepoloženi ispit: 100,00 KM",
        "Dvije jednake rate",
        "Druga rata do ovjere zimskog semestra"
      ]
    }
  ];

  const specialArrangements = [
    {
      icon: AlertCircle,
      title: "Posebna dinamika uplata",
      description: "Studenti koji nisu u mogućnosti da prate dinamiku uplata, mogu se obratiti molbom dekanu za utvrđivanje posebne dinamike."
    },
    {
      icon: FileText,
      title: "Odluka o visini troškova",
      description: "Odluku o visini troškova školarine i drugih usluga za studente možete pogledati ovdje.",
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
              Cijene studija
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transparentne informacije o školarini i troškovima studiranja
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
              Informacije o školarini
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Na Fakultetu informacijskih tehnologija nudimo transparentne i pristupačne cijene studija s fleksibilnim opcijama plaćanja.
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
              Opcije plaćanja
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
              Posebne mogućnosti
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
                       Pogledaj odluku
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
                Važne napomene
              </h3>
              <div className="max-w-3xl mx-auto space-y-4 text-blue-100">
                <p className="leading-relaxed">
                  • Prva rata školarine se uplaćuje prilikom upisa na godinu
                </p>
                <p className="leading-relaxed">
                  • Druga rata se uplaćuje do kraja kalendarske godine (31.12.)
                </p>
                <p className="leading-relaxed">
                  • Za obnovu godine, druga rata se uplaćuje do ovjere zimskog semestra
                </p>
                <p className="leading-relaxed">
                  • U slučaju teškoća s plaćanjem, kontaktirajte dekanat za posebnu dinamiku
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