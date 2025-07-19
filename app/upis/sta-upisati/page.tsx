'use client';

import { motion } from 'framer-motion';
import { Download, Users, TrendingUp, BookOpen, Target, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const StaUpisatiPage = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "95% zaposlenost",
      description: "Prema podacima Zavoda za statistiku, 95% naših studenata je zaposleno"
    },
    {
      icon: Users,
      title: "Dinamičan razvoj",
      description: "IT sektor se dinamično razvija sa stalnom potrebom za kadrom"
    },
    {
      icon: BookOpen,
      title: "Kvalitetan program",
      description: "Kontinuirano unapređenje nastavnog plana i programa"
    },
    {
      icon: Target,
      title: "Tržišna usklađenost",
      description: "Periodična istraživanja usklađenosti sa potrebama tržišta"
    },
    {
      icon: Award,
      title: "Dobra saradnja",
      description: "Saradnja sa ministarstvima i regionalnim IT kompanijama"
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
              Šta upisati?
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fakultet informacijskih tehnologija - mjesto gdje se stvara budućnost digitalnog svijeta
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
              Zašto?
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                Kvalitet i praktična relevantnost studijskog programa potvrđeni su činjenicom da je, prema podacima Zavoda za statistiku, <strong>95% naših studenata zaposleno</strong>. IT sektor predstavlja područje koje se dinamično razvija i postoji stalna potreba za ovim kadrom u Bosni i Hercegovini i u svijetu.
              </p>
              
              <p className="text-lg mb-6">
                FIT provodi periodična istraživanja u cilju analize usklađenosti kvalifikacija i vještina predviđenih nastavnim planom i programom sa potrebama i zahtjevima tržišta i okruženja. FIT ima veoma dobru saradnju sa državnim, federalnim i kantonalnim ministarstvima koja djeluju u sektoru obrazovanja i IT-a, kao i sa regionalnim IT kompanijama.
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
              Kontinuirano unapređenje
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fakultet kontinuirano radi na unapređenju kvaliteta svih aktivnosti: nastave, sadržaja nastavnog plana i programa, sistema ocjenjivanja, udžbenika i literature, opremljenosti učioničkog i drugog prostora, DL platforme, naučno-istraživačke djelatnosti, izdavačke djelatnosti, selekcije nastavnog kadra i administrativnog osoblja, bibliotečke djelatnosti, cjeloživotnog obrazovanja i drugih standarda.
            </p>
            <div className="text-center">
              <p className="text-xl font-semibold text-blue-600 mb-4">
                Naša vizija budućnosti je sigurna i pozitivna. Pridružite nam se!
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
                FIT Informator
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                FIT informator je priručnik namijenjen brucošima Fakulteta informacijskih tehnologija &quot;Džemal Bijedić&quot; u Mostaru koji sadrži odgovore na najčešće postavljena pitanja.
              </p>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-blue-100 mb-4">
                Cilj informatora je olakšati snalaženje u novom akademskom okruženju i pružiti podršku na početku studiranja. Informator su napravili <strong>Adna Ćušić</strong> i <strong>Dino Burić</strong>.
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
                Preuzmi Informator
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