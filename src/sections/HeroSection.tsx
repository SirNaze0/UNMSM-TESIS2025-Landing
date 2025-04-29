import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="container max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 py-20 pt-28 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-100 rounded-full filter blur-3xl opacity-40 translate-x-1/4 translate-y-1/4"></div>
      
      <div className="flex flex-col justify-center space-y-8 text-center lg:text-left lg:pl-16 xl:pl-0 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mx-auto lg:mx-0 w-fit" data-aos="fade-down">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          Curso 2025-I
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900" // Cambiado de gradiente a color sólido
          data-aos="fade-up"
        >
          Metodología de la elaboración de tesis
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="100">
          Aprende el desarrollo del proyecto de tesis, definiendo el tema,
          desarrollando el marco teórico y realizando
          la investigación del estado del arte del problema de investigación.
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="200">
          <Link
            href="#sobre"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary-dark px-6 py-3 text-sm font-semibold text-gray-900 hover:opacity-90 transition-all shadow-lg shadow-blue-200" // Cambiado text-white a text-gray-900
          >
            Ver Información Completa
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            href="#programa"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-all"
          >
            Ver Programa
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div
        className="relative flex items-center justify-center"
        data-aos="fade"
        data-aos-delay="300"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
      >
        {/* Elementos decorativos */}
        <div className="absolute w-full h-full bg-gradient-to-br from-sky-50 to-blue-100 rounded-full filter blur-3xl opacity-50 scale-75"></div>
        
        <div className="relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl transform rotate-6 scale-105"></div>
            <Image
              src={'/hero.png'}
              width={450}
              height={450}
              alt="Metodología de Tesis"
              className="rounded-2xl shadow-xl relative z-10"
            />
          </div>
          
          <div
            className="absolute -right-6 -top-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-secondary to-secondary-dark shadow-lg"
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-secondary-dark font-bold">1</span>
            </div>
          </div>
          
          <div
            className="absolute -bottom-6 -left-6 flex h-20 w-20 items-center justify-center rounded-full bg-white border-2 border-secondary shadow-lg"
            data-aos="fade"
            data-aos-delay="600"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-secondary to-secondary-dark flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
          </div>
          
          {/* Elemento decorativo adicional */}
          <div
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 flex h-16 w-16 items-center justify-center"
            data-aos="fade"
            data-aos-delay="700"
            data-aos-duration="1200"
          >
            <div className="h-full w-full rounded-md border-2 border-dashed border-secondary-dark rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
