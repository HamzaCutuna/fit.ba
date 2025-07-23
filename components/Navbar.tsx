'use client';

import { useState, Fragment, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFakultetDropdownOpen, setIsFakultetDropdownOpen] = useState(false);
  const [isUpisDropdownOpen, setIsUpisDropdownOpen] = useState(false);
  const [isStudijDropdownOpen, setIsStudijDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: 'Fakultet', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'O fakultetu', href: '/fakultet' },
        { name: 'Osoblje', href: '/osoblje' },
      ]
    },
    { 
      name: 'Upis', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Šta upisati?', href: '/upis/sta-upisati' },
        { name: 'Načini studiranja', href: '/upis/nacini-studiranja' },
        { name: 'Cijene studija', href: '/upis/cijene-studija' }
      ]
    },
    { 
      name: 'Studij', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'I ciklus', href: '#', isSeparator: true, key: 'i-ciklus-separator' },
        { name: 'Pravila studiranja', href: '/documents/pravila-studiranja-prvi-ciklus.pdf', key: 'pravila-studiranja-i', target: '_blank' },
        { name: 'Nastavni plan i program - Razvoj softvera', href: '/studij/razvoj-softvera', key: 'razvoj-softvera' },
        { name: 'Nastavni plan i program - Softverski inženjering', href: '/studij/softverski-inzenjering', key: 'softverski-inzenjering' },
        { name: 'Termini konsultacija sa studentima', href: '/studij/termini-konsultacija', key: 'termini-konsultacija' },
        { name: 'II ciklus', href: '#', isSeparator: true, key: 'ii-ciklus-separator' },
        { name: 'Pravila studiranja', href: '/documents/pravila-studiranja-drugi-ciklus.pdf', key: 'pravila-studiranja-ii', target: '_blank' },
        { name: 'Nastavni plan i program - jednogodišnji (60 ECTS)', href: '/studij/jednogodisnji', key: 'jednogodisnji' },
        { name: 'Nastavni plan i program za drugi ciklus - dvogodišnji (120 ECTS)', href: '/studij/dvogodisnji', key: 'dvogodisnji' }
      ]
    },
    { name: 'Vijesti', href: '/vijesti' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Link 
              href="/" 
              className={`text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-600 hover:via-blue-700 hover:to-blue-900 transition-all duration-300 ${
                !isScrolled ? 'text-white' : ''
              }`}
            >
              <span className="hidden sm:inline">Fakultet informacijskih tehnologija</span>
              <span className="sm:hidden">FIT, Mostar</span>
            </Link>
          </motion.div>

          {/* Desktop Menu - Pushed to the right */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="relative"
                >
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => {
                        if (item.name === 'Fakultet') setIsFakultetDropdownOpen(true);
                        if (item.name === 'Upis') setIsUpisDropdownOpen(true);
                        if (item.name === 'Studij') setIsStudijDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'Fakultet') setIsFakultetDropdownOpen(false);
                        if (item.name === 'Upis') setIsUpisDropdownOpen(false);
                        if (item.name === 'Studij') setIsStudijDropdownOpen(false);
                      }}
                      className="relative"
                    >
                      <button
                        className={`relative px-4 py-2 font-medium transition-all duration-300 group flex items-center space-x-1 ${
                          isScrolled 
                            ? 'text-gray-700 hover:text-blue-600' 
                            : 'text-white hover:text-blue-200'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          (item.name === 'Fakultet' && isFakultetDropdownOpen) || 
                          (item.name === 'Upis' && isUpisDropdownOpen) ||
                          (item.name === 'Studij' && isStudijDropdownOpen) ? 'rotate-180' : ''
                        }`} />
                        <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                          isScrolled 
                            ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800' 
                            : 'bg-white'
                        }`}></span>
                      </button>
                      
                      <AnimatePresence>
                        {((item.name === 'Fakultet' && isFakultetDropdownOpen) || 
                          (item.name === 'Upis' && isUpisDropdownOpen) ||
                          (item.name === 'Studij' && isStudijDropdownOpen)) && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              'isSeparator' in dropdownItem && dropdownItem.isSeparator ? (
                                <div
                                  key={'key' in dropdownItem ? dropdownItem.key : (dropdownItem as { name: string }).name}
                                  className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-100"
                                >
                                  {(dropdownItem as { name: string }).name}
                                </div>
                              ) : (
                                <a
                                  key={'key' in dropdownItem ? dropdownItem.key : (dropdownItem as { name: string }).name}
                                  href={(dropdownItem as { href: string }).href}
                                  target={'target' in dropdownItem ? dropdownItem.target : undefined}
                                  rel={'target' in dropdownItem && dropdownItem.target === '_blank' ? 'noopener noreferrer' : undefined}
                                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border-b border-gray-50 last:border-b-0"
                                >
                                  {(dropdownItem as { name: string }).name}
                                </a>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-blue-600' 
                          : 'text-white hover:text-blue-200'
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                        isScrolled 
                          ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800' 
                          : 'bg-white'
                      }`}></span>
                    </a>
                  )}
                </motion.div>
              ))}
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex-shrink-0">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`transition-colors p-2 rounded-lg ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                  : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Headless UI */}
      <Transition
        show={isMenuOpen}
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.name === 'Fakultet') setIsFakultetDropdownOpen(!isFakultetDropdownOpen);
                        if (item.name === 'Upis') setIsUpisDropdownOpen(!isUpisDropdownOpen);
                        if (item.name === 'Studij') setIsStudijDropdownOpen(!isStudijDropdownOpen);
                      }}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200 py-2 border-b border-gray-50"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        (item.name === 'Fakultet' && isFakultetDropdownOpen) || 
                        (item.name === 'Upis' && isUpisDropdownOpen) ||
                        (item.name === 'Studij' && isStudijDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <AnimatePresence>
                      {((item.name === 'Fakultet' && isFakultetDropdownOpen) || 
                        (item.name === 'Upis' && isUpisDropdownOpen) ||
                        (item.name === 'Studij' && isStudijDropdownOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-2 mt-2"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            'isSeparator' in dropdownItem && dropdownItem.isSeparator ? (
                              <motion.div
                                key={'key' in dropdownItem ? dropdownItem.key : (dropdownItem as { name: string }).name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50"
                              >
                                {(dropdownItem as { name: string }).name}
                              </motion.div>
                            ) : (
                              <motion.a
                                key={'key' in dropdownItem ? dropdownItem.key : (dropdownItem as { name: string }).name}
                                href={(dropdownItem as { href: string }).href}
                                target={'target' in dropdownItem ? dropdownItem.target : undefined}
                                rel={'target' in dropdownItem && dropdownItem.target === '_blank' ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="block text-gray-600 hover:text-blue-600 text-base font-medium transition-colors duration-200 py-2"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {(dropdownItem as { name: string }).name}
                              </motion.a>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="block text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200 py-2 border-b border-gray-50 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                )}
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar; 