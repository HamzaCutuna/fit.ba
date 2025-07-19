'use client';

import { motion } from 'framer-motion';
import { Clock, User, Calendar, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TerminiKonsultacijaPage = () => {
  const facultyMembers = [
    {
      name: "dr.sc. Nina Bijedić",
      image: "/images/nina.png",
      schedule: [
        "svaki radni dan od 15:00 - 16:00"
      ]
    },
    {
      name: "dr.sc. Iris Memić",
      image: null,
      schedule: [
        "svaki radni dan 15:00 - 16:00"
      ]
    },
    {
      name: "dr.sc. Emina Junuz",
      image: "/images/emina.jpg",
      schedule: [
        "ponedjeljak od 12:00 - 14:00",
        "utorak od 09:00 - 10:00",
        "petak od 12:00 - 14:00"
      ]
    },
    {
      name: "dr.sc. Denis Mušić",
      image: "/images/denis.jpg",
      schedule: [
        "ponedjeljak 10:00 - 13:00",
        "utorak: 09:00 - 10:00"
      ]
    },
    {
      name: "mr.sc. Sanja Kapetanović",
      image: "/images/sanja.jpg",
      schedule: [
        "ponedjeljak 08:00 - 09:00",
        "utorak 10:00 - 12:00",
        "četvrtak 09:00 - 11:00"
      ]
    },
    {
      name: "mr.sc. Edina Čmanjčanin",
      image: null,
      schedule: [
        "utorak 08:00 - 10:00",
        "srijeda 08:00 - 10:00",
        "četvrtak 08:00 - 09:00"
      ]
    },
    {
      name: "mr.sc. Mohamed El Zayyat",
      image: "/images/mohamed.png",
      schedule: [
        "ponedjeljak 11:00 - 14:00",
        "utorak 11:00 - 13:00",
        "petak 10:30 - 11:30"
      ]
    },
    {
      name: "mr.sc. Elda Sultić",
      image: "/images/elda.jpg",
      schedule: [
        "srijeda 12:00 - 13:00",
        "četvrtak 10:00 - 12:00",
        "petak 12:00 - 14:00"
      ]
    },
    {
      name: "mr.sc. Adil Joldić",
      image: "/images/adil.jpg",
      schedule: [
        "ponedjeljak 14:00 - 15:00",
        "utorak 14:00 - 15:00",
        "srijeda 14:00 - 15:00",
        "četvrtak 15:00 - 16:00",
        "petak 14:00 - 15:00"
      ]
    },
    {
      name: "mr.sc. Goran Škondrić",
      image: "/images/goran.jpg",
      schedule: [
        "srijeda 10:00 - 12:00",
        "četvrtak 10:00 - 13:00"
      ]
    },
    {
      name: "mr.sc. Kemal Marić",
      image: null,
      schedule: [
        "utorak 09:00 - 11:30",
        "srijeda 09:00 - 11:30"
      ]
    },
    {
      name: "b.sc. Azra Smajić",
      image: null,
      schedule: [
        "utorak 09:00 - 11:30",
        "srijeda 09:00 - 11:30"
      ]
    }
  ];

  const getDayColor = (day: string) => {
    const dayColors: { [key: string]: string } = {
      'ponedjeljak': 'bg-red-100 text-red-800',
      'utorak': 'bg-blue-100 text-blue-800',
      'srijeda': 'bg-green-100 text-green-800',
      'četvrtak': 'bg-yellow-100 text-yellow-800',
      'petak': 'bg-purple-100 text-purple-800',
      'svaki radni dan': 'bg-gray-100 text-gray-800'
    };
    
    for (const [key, color] of Object.entries(dayColors)) {
      if (day.toLowerCase().includes(key)) {
        return color;
      }
    }
    return 'bg-gray-100 text-gray-800';
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
              Termini konsultacija
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Raspored konsultacija sa nastavnim osobljem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Faculty Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Faculty Member Header */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Schedule */}
                <div className="space-y-3">
                  <div className="flex items-center mb-3">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      Raspored konsultacija:
                    </span>
                  </div>
                  
                  {member.schedule.map((timeSlot, timeIndex) => (
                    <div
                      key={timeIndex}
                      className={`px-3 py-2 rounded-lg text-sm font-medium ${getDayColor(timeSlot)}`}
                    >
                      {timeSlot}
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Fakultet informacijskih tehnologija</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white"
          >
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">
                Važne napomene
              </h3>
              <div className="max-w-3xl mx-auto space-y-4 text-blue-100">
                <p className="leading-relaxed">
                  • Konsultacije se održavaju u radnim danima prema rasporedu
                </p>
                <p className="leading-relaxed">
                  • Molimo poštujte termine i najavite se unaprijed ako je potrebno
                </p>
                <p className="leading-relaxed">
                  • U slučaju izmjene termina, nastavnici će vas obavijestiti
                </p>
                <p className="leading-relaxed">
                  • Konsultacije su dostupne i online prema dogovoru
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

export default TerminiKonsultacijaPage; 