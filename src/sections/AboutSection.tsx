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
    title: 'Fundamentos de IA y Agentes',
    description:
      'Conceptos básicos, historia, tipos y arquitectura de agentes inteligentes.',
  },
  {
    number: 2,
    title: 'Estrategias de Búsqueda y Juegos',
    description:
      'Resolución de problemas mediante búsquedas y desarrollo de algoritmos para juegos.',
  },
  {
    number: 3,
    title: 'Machine Learning y Deep Learning',
    description:
      'Métodos supervisados, no supervisados, por refuerzo y redes neuronales.',
  },
  {
    number: 4,
    title: 'IA Generativa y Ética',
    description:
      'Modelos generativos, aplicaciones creativas e impacto ético y futuro.',
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="container mx-auto px-4 py-16 pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-block rounded-full bg-[#c1ff72] px-4 py-1 text-sm font-medium">
          Descripción
        </div>
        <h2 className="mt-4 text-3xl font-bold">¿De qué trata este curso?</h2>
        <p className="mt-4 text-gray-600">
          A lo largo de 16 semanas, aprenderás desde los conceptos básicos de IA
          y agentes hasta técnicas avanzadas en Machine Learning, Deep Learning
          e IA Generativa.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
        {topics.map((topic) => (
          <TopicCard
            key={topic.number}
            number={topic.number}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </section>
  );
};
