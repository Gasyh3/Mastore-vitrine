"use client";

import Link from 'next/link';
import Facebook from '@/components/logo/Facebook';
import Instagram from '@/components/logo/Instagram';
import Tiktok from '@/components/logo/TikTok';
import Linkedin from '@/components/logo/Linkedin';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-5 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-start md:items-stretch">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-8">
          <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
          <div className="flex items-center">
            <a href="https://www.linkedin.com/" className="mr-4">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/" className="mr-4">
              <Instagram />
            </a>
            
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0 md:px-8">
          <h4 className="text-lg font-semibold mb-4">Mentions légales</h4>
          <ul>
            <li>
              <Link href="/politique-cookies" className="hover:text-sky-500">Politique relative aux cookies</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-4">Autres</h4>
          <ul>
            <li>
              <Link href="/contact" className="hover:text-sky-500">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <p className="text-sm md:text-base">&copy; 2024 MASTORE. Tous droits réservés.</p>
      </div>
    </footer>
  );
}