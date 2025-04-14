import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="container mx-auto px-4 py-16 pt-24">
      <div className="rounded-2xl bg-[#d8ffaa] p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-black">
            Conoce a tu Grupo de Trabajo
          </h2>
          <p className="mt-4 text-gray-700">
            Consulta la información de los grupos de trabajo, integrantes y
            proyectos asignados en el documento compartido. Allí encontrarás
            todos los detalles necesarios para coordinar con tu equipo.
          </p>
          <div className="mt-8">
            <Link
              href="https://docs.google.com/spreadsheets/d/1NzHW1RoytIM2Jzhz6YZdyVffpY3kcYYvDvgebaV7clM/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Ver Grupos de Trabajo
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
