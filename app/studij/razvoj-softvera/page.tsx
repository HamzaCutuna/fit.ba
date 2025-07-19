'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Download, BookOpen, Calendar, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RazvojSoftveraPage = () => {
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
      title: "1. godina",
      semesters: [
        {
          semester: 1,
          subjects: [
            { rb: 1, name: "Računarstvo i informatika", ects: 5 },
            { rb: 2, name: "Programiranje I", ects: 7 },
            { rb: 3, name: "Matematika I", ects: 7 },
            { rb: 4, name: "Digitalna logika", ects: 7 },
            { rb: 5, name: "Engleski jezik I", ects: 4 }
          ]
        },
        {
          semester: 2,
          subjects: [
            { rb: 6, name: "Programiranje II", ects: 7 },
            { rb: 7, name: "Matematika II", ects: 6 },
            { rb: 8, name: "Operativni sistemi", ects: 5 },
            { rb: 9, name: "Web razvoj i dizajn", ects: 5 },
            { rb: 10, name: "Engleski jezik II", ects: 3 },
            { rb: "11.1", name: "Uvod u marketing", ects: 4 },
            { rb: "11.2", name: "Uvod u poslovanje", ects: 4 },
            { rb: "11.3", name: "Uvod u menadžment", ects: 4 }
          ]
        }
      ]
    },
    {
      year: 2,
      title: "2. godina",
      semesters: [
        {
          semester: 3,
          subjects: [
            { rb: 12, name: "Programiranje III", ects: 7 },
            { rb: 13, name: "Baze podataka I", ects: 6 },
            { rb: 14, name: "Strukture podataka i algoritmi", ects: 6 },
            { rb: 15, name: "Matematika III", ects: 6 },
            { rb: 16, name: "Računarske mreže I", ects: 5 }
          ]
        },
        {
          semester: 4,
          subjects: [
            { rb: 17, name: "Analiza i dizajn softvera", ects: 7 },
            { rb: 18, name: "Baze podataka II", ects: 7 },
            { rb: 19, name: "Primijenjena statistika", ects: 6 },
            { rb: 20, name: "Engleski jezik III", ects: 4 },
            { rb: "21.1", name: "Kompjuterska grafika", ects: 6 },
            { rb: "21.2", name: "Paralelno programiranje", ects: 6 }
          ]
        }
      ]
    },
    {
      year: 3,
      title: "3. godina",
      semesters: [
        {
          semester: 5,
          subjects: [
            { rb: 22, name: "Razvoj softvera I", ects: 7 },
            { rb: 23, name: "Modeliranje poslovnih procesa", ects: 6 },
            { rb: 24, name: "Interakcija čovjek – računar", ects: 6 },
            { rb: 25, name: "Informacijska sigurnost", ects: 5 },
            { rb: "26.1", name: "Poslovna inteligencija", ects: 6 },
            { rb: "26.2", name: "Administracija baza podataka", ects: 6 }
          ]
        },
        {
          semester: 6,
          subjects: [
            { rb: 27, name: "Razvoj softvera II", ects: 7 },
            { rb: 28, name: "Upravljanje projektom", ects: 6 },
            { rb: 29, name: "Praksa", ects: 12 },
            { rb: "30.1", name: "Kvalitet softvera", ects: 5 },
            { rb: "30.2", name: "Dizajn i razvoj IOT projekata", ects: 5 }
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
              Razvoj softvera
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nastavni plan i program - I ciklus studija
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
              Nastavni plan i program
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Detaljan pregled predmeta za sve tri godine studija programa Razvoj softvera
            </p>
            
            {/* Download Syllabus Button */}
            <motion.a
              href="/documents/razvoj-software-silabus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Preuzmi silabus
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
                                {semester.semester}. semestar
                              </h4>
                            </div>

                            {/* Subjects Table */}
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                      R.B.
                                    </th>
                                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                      Predmet
                                    </th>
                                    <th className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                                      ECTS
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {semester.subjects.map((subject, subjectIndex) => (
                                    <tr 
                                      key={subject.rb} 
                                      className={`hover:bg-blue-50 transition-colors duration-200 ${
                                        subjectIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                      }`}
                                    >
                                      <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">
                                        {subject.rb}
                                      </td>
                                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                                        {subject.name}
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
                                      Ukupno ECTS za {semester.semester}. semestar:
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
                Ukupan broj ECTS bodova
              </h3>
              <p className="text-3xl font-bold text-blue-100">
                {studyPlan.reduce((total, year) => total + calculateTotalECTS(year), 0)} ECTS
              </p>
              <p className="text-blue-200 mt-2">
                Raspoređeno kroz 6 semestara (3 godine studija)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RazvojSoftveraPage; 