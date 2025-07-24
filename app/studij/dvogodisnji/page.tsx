'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Download, BookOpen, Calendar, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '../../../contexts/LanguageContext';

const DvogodisnjiPage = () => {
  const { t } = useTranslation();
  const [expandedYears, setExpandedYears] = useState<number[]>([1]);

  const toggleYear = (year: number) => {
    setExpandedYears(prev => 
      prev.includes(year) 
        ? prev.filter(y => y !== year)
        : [...prev, year]
    );
  };

  const studyPlan = [
    {
      year: 1,
      title: t('studij.dvogodisnji.year1'),
      semesters: [
        {
          semester: 1,
          subjects: [
            { name: "Metodologija istraživačkog rada", elective: false, ects: 8 },
            { name: "Modeliranje i simulacija", elective: false, ects: 8 },
            { name: "Operativni sistemi II", elective: false, ects: 7 },
            { name: "Mjerenje organizacijskih performansi", elective: false, ects: 7 }
          ]
        },
        {
          semester: 2,
          subjects: [
            { name: "Agilne metode razvoja softvera", elective: false, ects: 8 },
            { name: "Odabrana poglavlja iz softvrskog inžinjeringa", elective: false, ects: 8 },
            { name: "Data mining", elective: false, ects: 7 },
            { name: "Sistemska i mrežna administracija II", elective: true, ects: 7 },
            { name: "Analiza socijalnih mreža", elective: true, ects: 7 }
          ]
        }
      ]
    },
    {
      year: 2,
      title: t('studij.dvogodisnji.year2'),
      semesters: [
        {
          semester: 3,
          subjects: [
            { name: "Sigurnosni inžinjering", elective: false, ects: 8 },
            { name: "Umjetna inteligencija", elective: false, ects: 8 },
            { name: "Optimizacija baza podataka", elective: false, ects: 7 },
            { name: "Cloud computing", elective: true, ects: 7 },
            { name: "Upravljanje infrastrukurom za pohranu", elective: true, ects: 7 }
          ]
        },
        {
          semester: 4,
          subjects: [
            { name: "Softver projekat", elective: false, ects: 7 },
            { name: "Master rad", elective: false, ects: 7 }
          ]
        }
      ]
    }
  ];

  const calculateTotalECTS = (year: { semesters: Array<{ subjects: Array<{ ects: number }> }> }) => {
    return year.semesters.reduce((total: number, semester: { subjects: Array<{ ects: number }> }) => {
      return total + semester.subjects.reduce((semTotal: number, subject: { ects: number }) => {
        return semTotal + subject.ects;
      }, 0);
    }, 0);
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('studij.dvogodisnji.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('studij.dvogodisnji.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('studij.dvogodisnji.planTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              {t('studij.dvogodisnji.planSubtitle')}
            </p>
            
            {/* Download Syllabus Button */}
            <motion.a
              href="/documents/dvogodisnji.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('studij.dvogodisnji.downloadSyllabus')}
            </motion.a>
          </motion.div>

          {/* Study Plan Tables */}
          <div className="space-y-8">
            {studyPlan.map((year, yearIndex) => (
              <motion.div
                key={year.year}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + yearIndex * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Year Header */}
                <button
                  onClick={() => toggleYear(year.year)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-between hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <BookOpen className="w-6 h-6 mr-3" />
                    <h3 className="text-xl font-bold">{year.title}</h3>
                    <span className="ml-4 px-3 py-1 bg-white/20 rounded-full text-sm">
                      {calculateTotalECTS(year)} ECTS
                    </span>
                  </div>
                  <div className="flex items-center">
                    {expandedYears.includes(year.year) ? (
                      <ChevronDown className="w-5 h-5 transition-transform duration-200" />
                    ) : (
                      <ChevronRight className="w-5 h-5 transition-transform duration-200" />
                    )}
                  </div>
                </button>

                {/* Year Content */}
                <AnimatePresence>
                  {expandedYears.includes(year.year) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 space-y-6">
                        {year.semesters.map((semester) => (
                          <div key={semester.semester} className="space-y-4">
                            {/* Semester Header */}
                            <div className="flex items-center">
                              <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                              <h4 className="text-lg font-semibold text-gray-900">
                                {semester.semester}. {t('studij.dvogodisnji.semester')}
                              </h4>
                            </div>

                            {/* Subjects Table */}
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                      {t('studij.dvogodisnji.subject')}
                                    </th>
                                    <th className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                                      {t('studij.dvogodisnji.elective')}
                                    </th>
                                    <th className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                                      {t('studij.dvogodisnji.totalEcts')}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {semester.subjects.map((subject, subjectIndex) => (
                                    <tr 
                                      key={subject.name} 
                                      className={`hover:bg-blue-50 transition-colors duration-200 ${
                                        subjectIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                      }`}
                                    >
                                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                                        {subject.name}
                                      </td>
                                      <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-center">
                                        {subject.elective ? (
                                          <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full text-xs">
                                            ✔
                                          </span>
                                        ) : (
                                          <span className="text-gray-500">-</span>
                                        )}
                                      </td>
                                      <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-center text-blue-600">
                                        {subject.ects}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                                <tfoot className="bg-blue-50">
                                  <tr>
                                    <td colSpan={2} className="border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">
                                      {t('studij.dvogodisnji.totalEctsFor')} {semester.semester}. {t('studij.dvogodisnji.semester')}:
                                    </td>
                                    <td className="border border-gray-200 px-4 py-3 text-sm font-bold text-center text-blue-600">
                                      {semester.subjects.reduce((total, subject) => total + subject.ects, 0)}
                                    </td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white"
          >
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">
                {t('studij.dvogodisnji.masterProgram')}
              </h3>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-3xl font-bold text-blue-100">
                  {studyPlan.reduce((total, year) => total + calculateTotalECTS(year), 0)} {t('studij.dvogodisnji.totalEcts')}
                </p>
                <p className="text-blue-200">
                  {t('studij.dvogodisnji.distributedSemesters')}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm text-blue-200">1. godina</p>
                    <p className="text-lg font-bold text-white">{calculateTotalECTS(studyPlan[0])} ECTS</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm text-blue-200">2. godina</p>
                    <p className="text-lg font-bold text-white">{calculateTotalECTS(studyPlan[1])} ECTS</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Elective Courses Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-8 bg-white rounded-xl shadow-lg p-6"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              {t('studij.dvogodisnji.electiveCoursesNotes')}
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">1. godina - 2. semestar:</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Sistemska i mrežna administracija II (7 ECTS)</li>
                  <li>• Analiza socijalnih mreža (7 ECTS)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">2. godina - 3. semestar:</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Cloud computing (7 ECTS)</li>
                  <li>• Upravljanje infrastrukurom za pohranu (7 ECTS)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>{t('studij.dvogodisnji.electiveNote')}</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DvogodisnjiPage; 