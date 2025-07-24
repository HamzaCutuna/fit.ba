import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Fakultet informacijskih tehnologija Mostar | Početna',
  description: 'Dobrodošli na Fakultet informacijskih tehnologija u Mostaru. Studij programi: Razvoj softvera, Softverski inženjering, Master studiji. Informacije o upisu, cijenama i konsultacijama.',
  keywords: [
    'fakultet informacijskih tehnologija',
    'FIT Mostar',
    'studij informatike',
    'upis fakultet',
    'mostar',
    'bosna i hercegovina'
  ],
  openGraph: {
    title: 'Fakultet informacijskih tehnologija Mostar | Početna',
    description: 'Dobrodošli na Fakultet informacijskih tehnologija u Mostaru. Studij programi i informacije o upisu.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://fit.ba/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <LocalBusinessSchema />
      <Navbar />
      <Hero />
      <NewsSection />
      <Footer />
    </main>
  );
}
