'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, User, Tag } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  description: string;
  fullContent: string;
  image: string;
}

const NewsSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const featuredNews = {
    id: 'featured-1',
    title: t('news.items.vacationTitle'),
    date: "18. juli 2025.",
    author: "FIT Mostar",
    category: t('news.categories.announcements'),
    readTime: "1 min",
    description: t('news.items.vacationExcerpt'),
    fullContent: t('news.items.vacationExcerpt') + " Obavještavamo studente da Fakultet neće raditi do 18.8.2025. godine. PRIJATAN ODMOR SVIMA!",
    image: "/images/fit1.png"
  };

  const recentNews = [
    {
      id: 'recent-1',
      title: t('news.items.enrollmentTitle'),
      date: "11. juli 2025.",
      author: "FIT Mostar",
      category: t('news.categories.announcements'),
      readTime: "2 min",
      description: t('news.items.enrollmentExcerpt'),
      fullContent: t('news.items.enrollmentExcerpt') + "\n\nKandidati su dužni da se jave u sekretarijat fakulteta u terminu od 15. do 25. jula 2025. godine sa potrebnom dokumentacijom.",
      image: "/images/fit2.jpg"
    },
    {
      id: 'recent-2',
      title: t('news.items.rankListTitle'),
      date: "10. juli 2025.",
      author: "FIT Mostar",
      category: t('news.categories.enrollment'),
      readTime: "1 min",
      description: t('news.items.rankListExcerpt'),
      fullContent: t('news.items.rankListExcerpt') + "\n\nLista je dostupna na zvaničnoj web stranici fakulteta i na oglasnoj tabli.\n\nKandidati koji se nalaze na listi mogu pristupiti upisu u određenom terminu. Za sve dodatne informacije obratite se sekretarijatu fakulteta.",
      image: "/images/fit4.jpg"
    },
    {
      id: 'recent-3',
      title: t('news.items.assistantTitle'),
      date: "13. januar 2025.",
      author: "FIT Mostar",
      category: t('news.categories.competition'),
      readTime: "3 min",
      description: t('news.items.assistantExcerpt'),
      fullContent: t('news.items.assistantExcerpt') + "\n\nUslovi konkursa:\n- Završen II ciklus studija (master/magistar) iz relevantne oblasti\n- Prosjek ocjena min. 8,00\n- Poznavanje engleskog jezika\n\nPrijave se podnose do 15. februara 2025. godine u sekretarijatu fakulteta.",
      image: "/images/fit3.jpg"
    }
  ];

  const handleOpenModal = (news: NewsItem) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
          >
            <Tag className="w-4 h-4 mr-2" />
            {t('news.title')}
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('news.subtitle').split(' ').slice(0, 2).join(' ')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800">
              {t('news.subtitle').split(' ').slice(2).join(' ')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('news.description')}
          </p>
        </motion.div>

        {/* Featured News Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <motion.div 
              className="relative h-64 lg:h-full overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                  {featuredNews.category}
                </span>
              </div>
            </motion.div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Meta Info */}
                <div className="flex items-center text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{featuredNews.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{featuredNews.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{featuredNews.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {featuredNews.title}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {featuredNews.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOpenModal(featuredNews)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group text-lg"
                >
                  {t('common.readMore')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Recent News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {recentNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
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
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 mb-3">
                  <Calendar className="w-3 h-3 mr-2" />
                  <span className="text-xs font-medium">{news.date}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors flex-grow">
                  {news.title}
                </h4>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOpenModal(news)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group mt-auto"
                >
                  {t('common.readMore')}
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All News Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="/vijesti"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            {t('news.viewAll')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>

      {/* News Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleCloseModal}>
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
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{selectedNews.author || 'FIT Mostar'}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{selectedNews.readTime || '2 min'}</span>
                        </div>
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
                          onClick={handleCloseModal}
                        >
                          {t('common.close')}
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
    </section>
  );
};

export default NewsSection; 