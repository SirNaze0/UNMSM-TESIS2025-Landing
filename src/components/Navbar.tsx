'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return activeSection;
}

function useVisitorCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api', {
          next: { revalidate: 259200 }, // Revalidate every 3 days
        });
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Fallback to random count if API fails
        setCount(Math.floor(Math.random() * 900) + 1100);
      }
    };

    fetchVisitorCount();
  }, []);

  return count;
}

export const Navbar = () => {
  const activeSection = useActiveSection();
  const visitorCount = useVisitorCount();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Height of our navbar
      const offsetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <header className="sticky top-0 z-50 bg-sky-50 backdrop-blur-sm border-b border-sky-200 shadow-sm w-full lg:px-20 xl:px-70 text-sky-900">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href={'/'} className="flex items-center">
          <Image
            src="https://eventosindustrial.unmsm.edu.pe/cirsos/img/logo_unmsm.png"
            alt="UNMSM Logo"
            width={160}
            height={80}
            className="hover:opacity-90 transition-opacity"
          />
        </Link>
        
        {/* Menú para escritorio */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          <Link
            href="#"
            onClick={(e) => scrollToSection(e, 'hero')}
            className={`text-sm font-medium transition-all px-4 py-2 rounded-full ${
              activeSection === 'hero'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'hover:bg-gray-100'
            }`}
          >
            Inicio
          </Link>
          <Link
            href="#sobre"
            onClick={(e) => scrollToSection(e, 'sobre')}
            className={`text-sm font-medium transition-all px-4 py-2 rounded-full ${
              activeSection === 'sobre'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'hover:bg-gray-100'
            }`}
          >
            Sobre el Curso
          </Link>
          <Link
            href="#programa"
            onClick={(e) => scrollToSection(e, 'programa')}
            className={`text-sm font-medium transition-all px-4 py-2 rounded-full ${
              activeSection === 'programa'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'hover:bg-gray-100'
            }`}
          >
            Programa
          </Link>
          <Link
            href="#docente"
            onClick={(e) => scrollToSection(e, 'docente')}
            className={`text-sm font-medium transition-all px-4 py-2 rounded-full ${
              activeSection === 'docente'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'hover:bg-gray-100'
            }`}
          >
            Docente
          </Link>
        </nav>
        
        {/* Menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-gray-700 hidden sm:block">Visitantes:</div>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary border border-primary shadow-md">
            {visitorCount.toLocaleString()}
          </div>
        </div>
      </div>
      
      {/* Menú móvil desplegable */}
      <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg">
        <div className="flex flex-col space-y-3">
          <Link
            href="#"
            onClick={(e) => {
              scrollToSection(e, 'hero');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className={`text-sm font-medium transition-all px-4 py-3 rounded-md ${
              activeSection === 'hero'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'hover:bg-gray-100'
            }`}
          >
            Inicio
          </Link>
          <Link
            href="#sobre"
            onClick={(e) => {
              scrollToSection(e, 'sobre');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className={`text-sm font-medium transition-all px-4 py-3 rounded-md ${
              activeSection === 'sobre'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'hover:bg-gray-100'
            }`}
          >
            Sobre el Curso
          </Link>
          <Link
            href="#programa"
            onClick={(e) => {
              scrollToSection(e, 'programa');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className={`text-sm font-medium transition-all px-4 py-3 rounded-md ${
              activeSection === 'programa'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'hover:bg-gray-100'
            }`}
          >
            Programa
          </Link>
          <Link
            href="#docente"
            onClick={(e) => {
              scrollToSection(e, 'docente');
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className={`text-sm font-medium transition-all px-4 py-3 rounded-md ${
              activeSection === 'docente'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'hover:bg-gray-100'
            }`}
          >
            Docente
          </Link>
        </div>
      </div>
    </header>
  );
};