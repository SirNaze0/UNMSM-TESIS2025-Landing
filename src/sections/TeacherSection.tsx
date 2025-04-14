import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Mail } from 'lucide-react';

export const TeacherSection = () => {
  return (
    <section id="docente" className="bg-gray-50 py-16 pt-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full bg-[#c1ff72] px-4 py-1 text-sm font-medium">
            Docente
          </div>
          <h2 className="mt-4 text-3xl font-bold">Información del Docente</h2>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <Image
              src={'/guerrabarrasv2.png'}
              alt="GUERRA GRADOS, LUIS ANGEL"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-md">
            <h3 className="text-2xl font-bold">GUERRA GRADOS, LUIS ANGEL</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#c1ff72]" />
                <p className="text-gray-600">lguerrag1@unmsm.edu.pe</p>
              </div>
              <p className="text-gray-600">Ciclo: 7</p>
              <p className="text-gray-600">Curso: Inteligencia Artificial</p>
            </div>
            <div className="mt-6">
              <Link
                href="mailto:lguerrag1@unmsm.edu.pe"
                className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
              >
                Contactar por correo
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
