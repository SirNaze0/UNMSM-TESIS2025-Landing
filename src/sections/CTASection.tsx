import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section
      className="container max-w-[1150px] mx-auto px-4 py-20 pt-28 relative"
      data-aos="fade-up"
    >
      <div
        className="rounded-3xl bg-gradient-to-br from-sky-50 via-blue-50 to-white p-8 md:p-16 shadow-xl border border-blue-100 relative overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-100 rounded-full opacity-50 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Patrón de puntos decorativo */}
        <div className="absolute top-8 right-8 grid grid-cols-3 gap-2 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
          ))}
        </div>
        
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Recursos
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Conoce las tesis
          </h2>
          
          <p className="mt-6 text-gray-700 text-lg">
            Consulta la información de los temas de tesis y sus autores en el documento compartido.
            Encuentra inspiración y ejemplos para tu propio trabajo de investigación.
          </p>
          
          <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <Link
              href="https://docs.google.com/spreadsheets/d/1ohT2ZJqwnJhCb_SbrDyH97cfqKyX8h8a1En7o7wW_VA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-sm font-medium text-gray-900 hover:opacity-90 transition-all shadow-lg shadow-blue-200 group" // Cambiado text-white a text-gray-900
            >
              Ver Temas de Tesis
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
