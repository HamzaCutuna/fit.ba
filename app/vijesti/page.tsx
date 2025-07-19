'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, User, Tag } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const VijestiPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<typeof featuredNews | null>(null);

  const featuredNews = {
    title: "Kolektivni godišnji odmor",
    date: "18. juli 2025.",
    author: "FIT Mostar",
    category: "Obavještenja",
    readTime: "1 min",
    description: "Kolektivni godišnji odmor na Fakultetu informacijskih tehnologija Univerziteta \"Džemal Bijedić\" u Mostaru počinje u ponedjeljak, 21.7.2025. godine.",
    fullContent: "Kolektivni godišnji odmor na Fakultetu informacijskih tehnologija Univerziteta \"Džemal Bijedić\" u Mostaru počinje u ponedjeljak, 21.7.2025. godine. Obavještavamo studente da Fakultet neće raditi do 18.8.2025. godine. PRIJATAN ODMOR SVIMA!",
    image: "/images/fit1.png"
  };

  const recentNews = [
    {
      title: "Obavještenje o upisu primljenih kandidata u prvu godinu I ciklusa studija u ak. 2025/2026 godini",
      date: "11. juli 2025.",
      category: "Obavještenja",
      image: "/images/fit2.jpg",
      description: "Objavljujemo obavještenje o upisu primljenih kandidata u prvu godinu I ciklusa studija.",
      fullContent: "Objavljujemo obavještenje o upisu primljenih kandidata u prvu godinu I ciklusa studija u akademskoj 2025/2026 godini. Svi primljeni kandidati će biti obaviješteni o daljnjem postupku upisa.",
      author: "FIT Mostar",
      readTime: "2 min"
    },
    {
      title: "Konačna rang lista za upis primljenih kandidata u prvu godinu I ciklusa studija (ak. 2025/2026)",
      date: "10. juli 2025.",
      category: "Upis",
      image: "/images/fit4.jpg",
      description: "Objavljujemo konačnu rang listu za upis primljenih kandidata u prvu godinu I ciklusa studija.",
      fullContent: "Objavljujemo konačnu rang listu za upis primljenih kandidata u prvu godinu I ciklusa studija u akademskoj 2025/2026 godini. Rang lista je dostupna na našoj web stranici i u prostorijama fakulteta.",
      author: "FIT Mostar",
      readTime: "3 min"
    },
    {
      title: "Konkurs za izbor saradnika u zvanje asistent",
      date: "13. januar 2025.",
      category: "Konkurs",
      image: "/images/fit3.jpg",
      description: "Objavljujemo konkurs za izbor saradnika u zvanje asistent na našem fakultetu.",
      fullContent: "Objavljujemo konkurs za izbor saradnika u zvanje asistent na Fakultetu informacijskih tehnologija. Konkurs je otvoren za sve zainteresovane kandidate koji ispunjavaju uslove iz konkursne dokumentacije.",
      author: "FIT Mostar",
      readTime: "4 min"
    }
  ];

  const allNews = [featuredNews, ...recentNews];

  const openModal = (news: typeof featuredNews) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6"
            >
              <Tag className="w-4 h-4 mr-2" />
              Vijesti i obavještenja
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vijesti
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pratite najnovije obavještenja, događaje i dostignuća našeg fakulteta
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => openModal(news)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 mb-3">
                    <Calendar className="w-3 h-3 mr-2" />
                    <span className="text-xs font-medium">{news.date}</span>
                    {news.author && (
                      <>
                        <span className="mx-2">•</span>
                        <User className="w-3 h-3 mr-2" />
                        <span className="text-xs font-medium">{news.author}</span>
                      </>
                    )}
                    {news.readTime && (
                      <>
                        <span className="mx-2">•</span>
                        <Clock className="w-3 h-3 mr-2" />
                        <span className="text-xs font-medium">{news.readTime}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
                  >
                    Pročitaj više
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* News Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {selectedNews && (
                    <>
                      <div className="relative">
                        <img
                          src={selectedNews.image}
                          alt={selectedNews.title}
                          className="w-full h-64 object-cover rounded-xl mb-6"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                            {selectedNews.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{selectedNews.date}</span>
                        </div>
                        {selectedNews.author && (
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">{selectedNews.author}</span>
                          </div>
                        )}
                        {selectedNews.readTime && (
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">{selectedNews.readTime}</span>
                          </div>
                        )}
                      </div>

                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-bold text-gray-900 mb-4"
                      >
                        {selectedNews.title}
                      </Dialog.Title>

                      <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {selectedNews.fullContent}
                      </div>

                      <div className="mt-6 flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => setIsModalOpen(false)}
                        >
                          Zatvori
                        </motion.button>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default VijestiPage; 