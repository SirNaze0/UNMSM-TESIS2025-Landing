import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section
      className="container max-w-[1150px] mx-auto px-4 py-16 pt-24"
      data-aos="fade-up"
    >
      <div
        className="rounded-2xl bg-[#d8ffaa] p-8 md:p-12"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-black">
            Conoce las tesis
          </h2>
          <p className="mt-4 text-gray-700">
            Consulta la información de los temas de tesis y sus autores en el documento compartido.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
            <Link
              href="https://docs.google.com/spreadsheets/d/1ohT2ZJqwnJhCb_SbrDyH97cfqKyX8h8a1En7o7wW_VA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Ver Temas de Tesis
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
