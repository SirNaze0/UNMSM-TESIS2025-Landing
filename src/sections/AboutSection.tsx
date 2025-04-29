import React from 'react';

interface TopicCardProps {
  number: number;
  title: string;
  description: string;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 hover:border-secondary transition-all hover:shadow-lg group relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Contenido */}
      <div className="relative z-10">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary-light to-secondary text-gray-900 font-bold text-lg shadow-md"> {/* Cambiado text-white a text-gray-900 */}
          {number}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary-light transition-colors">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
      </div>
      
      {/* Decoración de esquina */}
      <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full border-2 border-dashed border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

const topics = [
  {
    number: 1,
    title: 'Investigación, Desarrollo y la Tesis',
    description:
      'Comprende la importancia de la investigación y desarrollo (I+D) como motor del progreso tecnológico y social del país, y es capaz de identificar y formular un tema de tesis válido, factible, original y creativo en el área de sistemas e informática.',
  },
  {
    number: 2,
    title: 'Estado del Arte',
    description:
      'Comprende, planifica y desarrolla el marco teórico y el estado del arte de su investigación de forma sistemática, utilizando referencias adecuadas y valorando el autoaprendizaje y el aprendizaje continuo.',
  },
  {
    number: 3,
    title: 'Avance de Tesis',
    description:
      'Redacta y sustenta su tema, marco teórico, estado del arte de su investigación, su bosquejo de aporte y plan de actividades ante un jurado con comunicación eficaz de forma oral y escrita.',
  },
];

export const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="container max-w-[1200px] mx-auto px-4 py-20 pt-28 relative"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-50 rounded-full filter blur-3xl opacity-40 translate-x-1/4"></div>
      
      <div className="mx-auto max-w-3xl text-center relative z-10" data-aos="fade-up">
        <div className="inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-sm font-medium text-gray-900 shadow-md"> {/* Cambiado de text-white a text-gray-900 */}
          Descripción
        </div>
        <h2 className="mt-6 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">¿De qué trata este curso?</h2>
        <p className="mt-6 text-gray-600 text-lg">
          A lo largo de <span className="font-semibold text-primary">16 semanas</span>, aprenderás a definir un tema de tesis en el área de sistemas e informática,
          desarrollar el marco teórico y realizar la investigación del estado del arte,
          siguiendo una metodología sistemática y fomentando el autoaprendizaje.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 select-none relative z-10">
        {topics.map((topic, idx) => (
          <div key={topic.number} data-aos="fade-up" data-aos-delay={idx * 150}>
            <TopicCard
              number={topic.number}
              title={topic.title}
              description={topic.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
