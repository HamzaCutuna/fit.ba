'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Faculty Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 text-center lg:text-left"
          >
            <motion.h3 
                              className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              FIT Mostar
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-8 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Fakultet informacijskih tehnologija &quot;Džemal Bijedić&quot; Univerziteta u Mostaru - 
              mjesto gdje se stvara budućnost digitalnog svijeta.
            </motion.p>
            <motion.div 
              className="flex space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Facebook, href: "https://www.facebook.com/edufitba", bg: "bg-blue-600", hover: "hover:bg-blue-700", name: "facebook" },
                { icon: Instagram, href: "https://www.instagram.com/edufitba/", bg: "bg-pink-600", hover: "hover:bg-pink-700", name: "instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/school/fit-mostar", bg: "bg-blue-700", hover: "hover:bg-blue-800", name: "linkedin" },
                { icon: Youtube, href: "https://www.youtube.com/user/eduFITba", bg: "bg-red-600", hover: "hover:bg-red-700", name: "youtube" }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 ${social.bg} ${social.hover} rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Brzi linkovi</h4>
            <ul className="space-y-4">
              {[
                { name: 'Fakultet', href: '/fakultet' },
                { name: 'Osoblje', href: '/osoblje' },
                { name: 'Vijesti', href: '/vijesti' },
                { name: 'Kontakt', href: '/kontakt' }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Study Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Servisne informacije</h4>
            <ul className="space-y-2">
              {[
                'Žiro račun Fakulteta',
                '1610000000291496',
                'Raiffeisen Bank'
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-default"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Kontakt</h4>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  content: "Ulica Sjeverni logor br. 12,\n88000 Mostar, BiH",
                  href: null,
                  id: "address"
                },
                {
                  icon: Phone,
                  content: "+387 36 281 160",
                  href: "tel:+38736281160",
                  id: "phone"
                },
                {
                  icon: Mail,
                  content: "info@fit.ba",
                  href: "mailto:info@fit.ba",
                  id: "email"
                },
                {
                  icon: Clock,
                  content: "Pon-Pet: 08:00-16:00\nSubota: 11:00-13:00",
                  href: null,
                  id: "hours"
                }
              ].map((contact, index) => (
                <motion.div
                  key={contact.id}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <contact.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 whitespace-pre-line"
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-gray-300 whitespace-pre-line">
                        {contact.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="text-gray-400 text-sm mb-4 md:mb-0 text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>© {currentYear} Fakultet informacijskih tehnologija Mostar.</p>
              <p>Sva prava zadržana.</p>
            </motion.div>
            <motion.div 
              className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                { name: 'UNMO', url: 'https://www.unmo.ba/' },
                { name: 'Ministarstvo obrazovanja', url: 'https://monkshnk.gov.ba/' },
                { name: 'Federalno ministarstvo', url: 'http://www.fmon.gov.ba/' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
                        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center cursor-pointer hover:scale-105"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer; 