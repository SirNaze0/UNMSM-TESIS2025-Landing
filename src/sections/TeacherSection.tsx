import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Mail } from 'lucide-react';

export const TeacherSection = () => {
  return (
    <section id="docente" className="bg-gradient-to-b from-white to-sky-50 py-20 pt-28 relative" data-aos="fade-up">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container max-w-[1150px] mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <div className="inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-sm font-medium text-gray-900 shadow-md"> {/* Cambiado de text-white a text-gray-900 */}
            Docente
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Información del Docente
          </h2>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-16">
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {/* Marco decorativo */}
            <div className="absolute inset-0 border-2 border-secondary rounded-full transform rotate-45 scale-110"></div>
            <div className="absolute inset-0 border-2 border-primary-light rounded-full transform -rotate-45 scale-110"></div>
            
            {/* Imagen */}
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
              <Image
                src={'/guerrita.png'}
                alt="GUERRA GRADOS, LUIS ANGEL"
                width={250}
                height={250}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            
            {/* Elemento decorativo */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white"></div>
            </div>
          </div>
          
          <div
            className="max-w-md text-center md:text-left bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100"
            data-aos="fade"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-gray-800">GUERRA GRADOS, LUIS ANGEL</h3>
            <p className="mt-2 text-primary-light font-medium">Docente Principal</p>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <p className="text-gray-600">lguerrag1@unmsm.edu.pe</p>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 8v4l3 3"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <p className="text-gray-600">Ciclo: 7</p>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <p className="text-gray-600">Metodología de la Elaboración de Tesis</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="mailto:lguerrag1@unmsm.edu.pe"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-secondary text-gray-900 px-6 py-3 text-sm font-medium hover:opacity-90 transition-all shadow-md group" // Cambiado text-white a text-gray-900
              >
                Contactar por correo
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
