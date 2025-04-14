import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="container max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 py-16 pt-24"
    >
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-600 via-[#83c53c] to-[#c1ff72] bg-clip-text text-transparent">
          Inteligencia Artificial
        </h1>
        <p className="text-gray-600">
          Descubre los fundamentos teóricos y prácticos que te prepararán para
          diseñar, implementar y evaluar soluciones inteligentes en distintos
          ámbitos.
        </p>
        <div>
          <Link
            href="#sobre"
            className="inline-flex items-center gap-2 rounded-full bg-[#c1ff72] px-6 py-3 text-sm font-medium text-black hover:bg-[#c1ff72]/80 transition-colors"
          >
            Ver Información Completa
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="relative z-10">
          <Image
            src={'/hero.png'}
            width={400}
            height={400}
            alt="Inteligencia Artificial"
            className="rounded-lg"
          />
          <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#c1ff72]">
            <div className="h-8 w-8 rounded-full bg-white"></div>
          </div>
          <div className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full bg-white border border-[#c1ff72]">
            <div className="h-8 w-8 rounded-full bg-[#c1ff72]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
