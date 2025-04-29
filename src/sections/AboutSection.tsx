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
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 hover:border-[#c1ff72] transition-colors">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c1ff72]/20 text-black">
        {number}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
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
      className="container max-w-[1200px] mx-auto px-4 py-16 pt-24"
    >
      <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
        <div className="inline-block rounded-full bg-[#c1ff72] px-4 py-1 text-sm font-medium">
          Descripción
        </div>
        <h2 className="mt-4 text-3xl font-bold">¿De qué trata este curso?</h2>
        <p className="mt-4 text-gray-600">
        A lo largo de 16 semanas, aprenderás a definir un tema de tesis en el área de sistemas e informática, 
        desarrollar el marco teórico y realizar la investigación del estado del arte, 
        siguiendo una metodología sistemática y fomentando el autoaprendizaje.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
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
