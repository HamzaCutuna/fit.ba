'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Award, Globe, Building2, Laptop, Monitor } from 'lucide-react';

export default function FakultetPage() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              O Fakultetu
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Fakultet informacijskih tehnologija je članica javnog Univerziteta &quot;Džemal Bijedić&quot; u Mostaru, 
              posvećena izvrsnosti u nastavi, istraživanju i inovacijama.
            </p>
          </motion.div>
        </div>
      </section>

      {/* O Fakultetu Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Osnovne informacije */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Osnovne informacije</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Fakultet informacijskih tehnologija (FIT) je članica javnog Univerziteta &quot;Džemal Bijedić&quot; u Mostaru. 
                    Osnovan je 1997. godine kao dvogodišnji Studij informatike, a 2003. godine je preregistrovan u Fakultet. 
                    FIT organizuje Bachelor (prvi ciklus) i Master (drugi ciklus) studij u oblasti informacijskih tehnologija. 
                    Nastavni plan i program se realizuje u skladu sa principima Bolonjske deklaracije.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Prvi ciklus se organizuje i realizuje na dva načina:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">klasični, tzv. in-class sistem</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">sistem učenja na daljinu, tzv. DistanceLearning – DL</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src="/images/fakultet1.jpg" 
                    alt="University building"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Distance Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 text-white">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Laptop className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Distance Learning - Prvenstvo u BiH</h3>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    FIT je institucija koja je prva uvela koncept studiranja na daljinu u Bosni i Hercegovini i ima 
                    vodeću ulogu u procesu implementacije i razvoja učenja na daljinu u našoj zemlji.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Na Fakultetu postoje četiri kabineta sa preko stotinu računarskih mjesta i četiri laboratorije. 
                    Osim redovnih nastavnih aktivnosti, studenti i nastavno osoblje imaju mogućnost izvođenja različitih 
                    istraživanja u pomenutim kabinetima i laboratorijama.
                  </p>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Distance learning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Kvalitet i zaposlenost */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                  <img 
                    src="/images/fakultet3.jpg" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 order-1 lg:order-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Kvalitet i zaposlenost</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Kvalitet i praktična relevantnost studijskog programa su potvrđeni činjenicom da je, prema podacima 
                    Zavoda za statistiku, 95% naših studenata zaposleno. IT sektor predstavlja područje koje se dinamično 
                    razvija i postoji stalna potreba za ovim kadrom u Bosni i Hercegovini i u svijetu.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    FIT provodi periodična istraživanja u cilju analize usklađenosti kvalifikacija i vještina predviđenih 
                    nastavnim planom i programom sa potrebama i zahtjevima tržišta i okruženja.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Saradnja */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Saradnja i partnerstvo</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    FIT ima veoma dobru saradnju sa državnim, federalnim i kantonalnim ministarstvima koja djeluju u 
                    sektoru obrazovanja i IT-a, kao i sa regionalnim IT kompanijama.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Fakultet također ima veoma uspješnu međunarodnu saradnju, u prvom redu sa univerzitetima u Austriji 
                    (FH Joanneum, Graz), Njemačkoj (Univerzitet u Paderbornu) i Španiji (Univerzitet u Lleidi), kao i sa 
                    univerzitetima u Bosni i Hercegovini i regionu.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ova saradnja podrazumijeva realizaciju brojnih aktivnosti kao što su razmjena nastavnika i studenata, 
                    realizacija zajedničkih naučno-istraživačkih projekata, učešće u seminarima i konferencijama, realizacija 
                    programa stručnog usavršavanja, kao i druge aktivnosti kojima je svrha intenziviranje akademske saradnje. 
                    FIT je učestvovao u velikom broju međunarodnih projekata, kao i projekata finansiranih iz državnih fondova.
                  </p>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src="/images/fit4.jpg" 
                    alt="International collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Kontinuirano unapređenje */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                  <img 
                    src="/images/fakultet4.jpg" 
                    alt="Continuous improvement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 text-white order-1 lg:order-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Kontinuirano unapređenje</h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Fakultet kontinuirano radi na unapređenju kvaliteta svih aktivnosti: nastave, sadržaja nastavnog plana 
                    i programa, sistema ocjenjivanja, udžbenika i literature, opremljenosti učioničkog i drugog prostora, 
                    DL platforme, naučno-istraživačke djelatnosti, izdavačke djelatnosti, selekcije nastavnog kadra i 
                    administrativnog osoblja, bibliotečke djelatnosti, cjeloživotnog obrazovanja i drugih standarda.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Riječ prvog dekana Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Riječ prvog dekana</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">prof. dr. sc. Safet Krkić</h3>
                  <p className="text-blue-600 font-medium">Prvi dekan Fakulteta informacijskih tehnologija</p>
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  &quot;Prepoznavajući i slijedeći stremljenja i želje mladih ljudi koji su planirali da svoje obrazovanje nastave na nekoj od visokoškolskih institucija našeg Univerziteta, 1996. godine pokrenuli smo inicijativu za formiranje Studija informatike pri Univerzitetu &quot;Džemal Bijedić&quot;. Nastavno-naučno vijeće je formiralo Komisiju kojoj je dalo u zadatak da sačini studiju izvodljivosti za osnivanje Studija informatike. Studija je potvrdila veliki interes mladih ljudi i pokazala opravdanost osnivanja dvogodišnjeg Studija informatike i potvrdila pretpostavke uspješnog rada i razvoja. Na tom osnovu je Savjet Univerziteta 10. oktobra 1997. godine donio odluku o osnivanju i početku rada nove visokoškolske institucije. Osnivanjem Studija informatike pri Univerzitetu udovoljili smo željama velikog broja mladih Bosne i Hercegovine, da u svojoj zemlji mogu sticati naobrazbu i iz oblasti informatike.&quot;
                </blockquote>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dinamičan rast i razvoj Studija nametnuo je potrebu njegovog prerastanja u Fakultet informacijskih tehnologija. Nastavno-naučno vijeće i Savjet Univerziteta prihvatili su Studiju izvodljivosti koja je u tom smislu sačinjena. U skladu s tim je donesena i odluka, a kantonalni sud HN kantona je 17. februara 2003. godine izvršio sudsku registraciju te visokoškolske ustanove.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Od početka smo shvatili da je dinamični razvoj informacijskih tehnologija moguće pratiti inoviranjem, dopunjavanjem i korekcijama Nastavnog plana i programa i uvođenjem novih metoda i novih oblika interakcije u nastavnom procesu. Tako smo, u deset godina našeg postojanja, šest puta mijenjali ili dopunjavali sadržaj Nastavnog plana i programa. Ozbiljnosti pristupa ovom poslu doprinijela je i naša angažiranost u TEMPUS projektu za izradu adekvatnog nastavnog plana i programa za obrazovanje informatičara. Takav trend razvoja curriculuma našeg Fakulteta nastavit ćemo i dalje.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Od školske 2001/02. godine organizovali smo i distance learning (učenje na daljinu) način studiranja. Naši napori će u budućnosti biti više usmjereni u tom pravcu. Školske 2002/03. otpočeli smo i sa nastavom na postdiplomskom studiju i time zakoračili u strategiju rješavanja problema nedostatka kadrova.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 