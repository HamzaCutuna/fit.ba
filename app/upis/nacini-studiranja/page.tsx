'use client';

import { motion } from 'framer-motion';
import { Users, GraduationCap, Clock, BookOpen, Video, MessageCircle, Monitor, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '../../../contexts/LanguageContext';

const NaciniStudiranjaPage = () => {
  const { t } = useTranslation();
  const studyTypes = [
    {
      icon: Users,
      title: t('upis.naciniStudiranja.regularStudents'),
      description: t('upis.naciniStudiranja.regularDescription'),
      details: t('upis.naciniStudiranja.regularDetails')
    },
    {
      icon: Clock,
      title: t('upis.naciniStudiranja.partTimeStudents'),
      description: t('upis.naciniStudiranja.partTimeDescription'),
      details: t('upis.naciniStudiranja.partTimeDetails')
    },
    {
      icon: Monitor,
      title: t('upis.naciniStudiranja.dlStudents'),
      description: t('upis.naciniStudiranja.dlDescription'),
      details: t('upis.naciniStudiranja.dlDetails')
    }
  ];

  const dlwmsModules = [
    {
      icon: Users,
      title: t('upis.naciniStudiranja.userProfile'),
      description: t('upis.naciniStudiranja.userProfileDesc')
    },
    {
      icon: BookOpen,
      title: t('upis.naciniStudiranja.teachingMaterials'),
      description: t('upis.naciniStudiranja.teachingMaterialsDesc')
    },
    {
      icon: GraduationCap,
      title: t('upis.naciniStudiranja.studentService'),
      description: t('upis.naciniStudiranja.studentServiceDesc')
    },
    {
      icon: Calendar,
      title: t('upis.naciniStudiranja.attendance'),
      description: t('upis.naciniStudiranja.attendanceDesc')
    },
    {
      icon: Video,
      title: t('upis.naciniStudiranja.videoChannel'),
      description: t('upis.naciniStudiranja.videoChannelDesc')
    },
    {
      icon: MessageCircle,
      title: t('upis.naciniStudiranja.forum'),
      description: t('upis.naciniStudiranja.forumDesc')
    }
  ];

  const learningResources = [
    {
      icon: Monitor,
      title: t('upis.naciniStudiranja.onlineTeaching'),
      subtitle: t('upis.naciniStudiranja.onlineTeachingSubtitle'),
      description: t('upis.naciniStudiranja.onlineTeachingDesc')
    },
    {
      icon: Video,
      title: t('upis.naciniStudiranja.videoLectures'),
      subtitle: t('upis.naciniStudiranja.videoLecturesSubtitle'),
      description: t('upis.naciniStudiranja.videoLecturesDesc')
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
              {t('upis.naciniStudiranja.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('upis.naciniStudiranja.subtitle')}
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
              {t('upis.naciniStudiranja.studyTypesTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {t('upis.naciniStudiranja.studyTypesSubtitle')}
            </p>
          </motion.div>

          {/* Study Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {studyTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <type.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {type.description}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {type.details}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* DLWMS Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-8 mb-16 text-white"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                DLWMS - Distance Learning Web Management System
              </h3>
              <p className="text-lg text-blue-100">
                {t('upis.naciniStudiranja.dlwmsSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dlwmsModules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <module.icon className="w-5 h-5 text-blue-200 mr-3" />
                    <h4 className="font-semibold text-white">
                      {module.title}
                    </h4>
                  </div>
                  <p className="text-blue-100 text-sm">
                    {module.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Exam Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t('upis.naciniStudiranja.examObligations')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t('upis.naciniStudiranja.examObligationsDesc')}
            </p>
          </motion.div>

          {/* Learning Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('upis.naciniStudiranja.learningResourcesTitle')}
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {learningResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <resource.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {resource.title}
                      </h4>
                      <p className="text-sm text-blue-600 font-medium">
                        {resource.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {resource.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NaciniStudiranjaPage; 