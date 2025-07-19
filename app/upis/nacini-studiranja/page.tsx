'use client';

import { motion } from 'framer-motion';
import { Users, GraduationCap, Clock, BookOpen, Video, MessageCircle, Monitor, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NaciniStudiranjaPage = () => {
  const studyTypes = [
    {
      icon: Users,
      title: "Redovni samofinansirajući studenti",
      description: "Studenti koji studiraju prema programu koji se zasniva na punoj nastavnoj satnici. Prisustvo svim vidovima nastave je obavezno.",
      details: "Evidencija se vodi na osnovu koje student, po odslušanom semestru, dobija potpis od predmetnog nastavnika, pod uslovom da je odslušao minimalno 70% fonda nastavnih sati predmeta."
    },
    {
      icon: Clock,
      title: "Vanredni studenti",
      description: "Studijski program pohađaju uz rad ili drugu aktivnost.",
      details: "Fakultet je dužan organizirati nastavu za vanredne studente, minimalno jedan školski sat mjesečno po predmetu, pomoću savremenih sredstava učenja na daljinu. Vanredni student moraju izvršavati i sve ostale obaveze predviđene nastavnim programima."
    },
    {
      icon: Monitor,
      title: "DL studenti",
      description: "Prate nastavu pomoću savremenih sredstava učenja na daljinu.",
      details: "Fakultet je dužan obezbijediti minimalno 30% fonda nastavnih sati predmeta u virtualnoj učionici. Sva ostala prava i obaveze DL studenata su izjednačena sa redovnim studentima."
    }
  ];

  const dlwmsModules = [
    {
      icon: Users,
      title: "Vlastiti korisnički profil",
      description: "Informacije o studentu, profil, slika, pristupni podaci itd."
    },
    {
      icon: BookOpen,
      title: "Nastavni materijali",
      description: "Tekstualni i multimedijalni dokumenti u elektronskom formatu"
    },
    {
      icon: GraduationCap,
      title: "Studentska služba",
      description: "Prijava ispita, zahtjevi za potvrdama, obavijesti itd."
    },
    {
      icon: Calendar,
      title: "Evidencija",
      description: "Prisustvo nastavi, postavljeni radovi, uspjeh i sl."
    },
    {
      icon: Video,
      title: "FIT video kanal",
      description: "Multimedijalni materijali"
    },
    {
      icon: MessageCircle,
      title: "FIT forum",
      description: "Online komunikacija sa nastavnim osobljem i drugim studentima"
    }
  ];

  const learningResources = [
    {
      icon: Monitor,
      title: "Online nastava",
      subtitle: "Za DL i vanredne studente",
      description: "Na FIT-u je višegodišnja praksa da nastavno osoblje organizira online nastavu i konsultacije po unaprijed utvrđenom rasporedu koji omogućavaju interakciju nastavnika i studenata. Nastava se održava u terminu koji se najavljuje u obavijestima na DLWMS-u."
    },
    {
      icon: Video,
      title: "Video lekcije",
      subtitle: "Dostupne na YouTube kanalu",
      description: "Za većinu predmeta dostupne su video lekcije objavljene na našem YouTube kanalu. Anketa provedena među studentima pokazala je da su video lekcije jedan od najkorisnijih resursa u pripremanju ispita. Video lekcije predstavljaju veliki preokret u odnosu na tradicionalno \"in-class\" studiranje te omogućavaju studentima kontrolu nad video lekcijama i istovremeno testiranje naučenog. Student može učiti vlastitim tempom, pregledati i ponavljati isječke po potrebi."
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
              Načini studiranja
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Status studenta - različite mogućnosti za vašu akademsku putanju
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
              Načini studiranja - status studenta
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Na Fakultetu informacijskih tehnologija kandidati se mogu upisati kao redovni samofinansirajući studenti, DL studenti ili vanredni studenti.
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
                Prijavom na DLWMS svi studenti pristupaju sljedećim modulima sistema:
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
              Obaveze polaganja ispita
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Svi studenti, bez obzira na status, imaju obavezu polaganja ispita na Fakultetu kako bi u kontrolisanim uslovima pristupili finalnoj provjeri znanja.
            </p>
          </motion.div>

          {/* Learning Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Kao izvor za učenje studentima je omogućeno sljedeće:
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