import { WeekCardProps } from '@/components/WeekCard';

interface UnitData {
  title: string;
  weeks: WeekCardProps[];
  columns: number;
  hasGroup?: boolean;
}

export const programData: UnitData[] = [
  {
    title: 'Unidad 1: Investigación, Desarrollo y la Tesis',
    weeks: [
      {
        weekNumber: 1,
        title: 'Presentación del curso',
        description:
          'Conceptos fundamentales de la investigación (tipos, proceso y metodología), modelos de innovación (incubadoras, Start-up y transferencia tecnológica), y requisitos para la obtención de grados y títulos académicos.',
        variant: 'light',
        hasGroup: false,
      },
      {
        weekNumber: 2,
        title: 'Desarrollo y formulación del proyecto de tesis',
        description: 'Fundamentos para la elaboración de una tesis: selección y definición del tema, estructuración de referencias bibliográficas y presentación del informe preliminar. Metodologías para una investigación académica sólida y criterios de rigor científico.',
        variant: 'light',
        hasGroup: false,
      },
      {
        weekNumber: 3,
        title: 'Definición y justificación del tema de tesis',
        description: 'Elementos clave para la elaboración de una tesis: justificación del tema, formulación de objetivos (generales y específicos) y estructuración del informe inicial. Metodologías para garantizar coherencia y viabilidad en la investigación.',
        variant: 'light',
        hasGroup: false,
      },
    ],
    columns: 3,
  },
  {
    title: 'Evaluación del Tema de Tesis',
    weeks: [
      {
        weekNumber: 4,
        title: 'Revisión del tema de tesis',
        description: 'Evaluación del tema de tesis y retroalimentación.',
        hasGroup: false,
        variant: 'light',
      },
    ],
    columns: 1,
  },
  {
    title: 'Unidad 2: Estado del Arte',
    weeks: [
      {
        weekNumber: 5,
        title: 'Construcción del marco teórico y revisión sistemática de literatura',
        description:
          'Desarrollo del marco teórico y estado del arte, metodologías para revisiones sistemáticas de literatura, búsqueda avanzada en bases de datos académicas (Scopus y WoS), y estructuración de artículos científicos. Planificación estratégica para investigación documental rigurosa.',
        variant: 'dark',
        hasGroup: false,
      },
      {
        weekNumber: 6,
        title: 'Herramientas de IA y técnicas avanzadas para análisis de literatura científica',
        description:
          'Aplicación de inteligencia artificial en la selección de artículos académicos (análisis de títulos y resúmenes), estructuración formal de papers, estrategias para lectura crítica y síntesis efectiva de contenidos. Metodología para elaborar informes de revisión documental con rigor académico.',
        variant: 'dark',
        hasGroup: false,
      },
      {
        weekNumber: 7,
        title: 'Presentación y evaluación crítica de artículos científicos(Parte 1)',
        description:
          'Exposición oral y escrita de artículos académicos, con énfasis en la estructuración de informes de síntesis. Desarrollo de habilidades para el análisis crítico, comunicación efectiva de hallazgos y retroalimentación constructiva en entornos de investigación.',
        variant: 'dark',
        hasGroup: true,
        groups: [{groupNumber:'Yaipén',groupLink:'https://www.google.com/'},],
      },
      {
        weekNumber: 8,
        title: 'Presentación y evaluación crítica de artículos científicos(Parte 2)',
        description:
          'Exposición oral y escrita de artículos académicos, con énfasis en la estructuración de informes de síntesis. Desarrollo de habilidades para el análisis crítico, comunicación efectiva de hallazgos y retroalimentación constructiva en entornos de investigación.',
        variant: 'dark',
        hasGroup: false,
      },
      {
        weekNumber: 9,
        title: 'Presentación y evaluación crítica de artículos científicos(Parte 3)',
        description:
          'Exposición oral y escrita de artículos académicos, con énfasis en la estructuración de informes de síntesis. Desarrollo de habilidades para el análisis crítico, comunicación efectiva de hallazgos y retroalimentación constructiva en entornos de investigación.',
        variant: 'dark',
        hasGroup: false,
      },
      {
        weekNumber: 10,
        title: 'Revolución en Investigación Académica: IA, Síntesis Precisas y Teoría Perfeccionada',
        description:
          'Uso de inteligencia artificial para análisis y síntesis de literatura académica, elaboración de informes de investigación y refinamiento del marco teórico. Evaluación de la precisión y coherencia en la integración de fuentes.',
        variant: 'dark',
        hasGroup: false,
      },
      {
        weekNumber: 11,
        title: 'Evaluación y mejora de proyectos de tesis',
        description:
          'Revisión crítica de temas de investigación y estados del arte, con retroalimentación especializada para optimizar su calidad y viabilidad académica.',
        variant: 'dark',
        hasGroup: false,
      },
    ],
    columns: 4,
  },
  {
    title: 'Evaluación del estado del arte',
    weeks: [
      {
        weekNumber: 12,
        title: 'Revisión del tema de tesis',
        description: 'Revisión crítica de estados del arte de los proyectos de tesis.',
        hasGroup: false,
        variant: 'light',
      },
    ],
    columns: 1,
  },
  {
    title: 'Unidad 3: Avance de Tesis',
    weeks: [
      {
        weekNumber: 13,
        title: 'Estructura y redacción académica de la tesis',
        description:
          'Lineamientos para la organización formal de la tesis (componentes y secuencia), aplicación de normas APA, y técnicas de redacción científica para las secciones de introducción, marco teórico y estado del arte.',
        variant: 'green',
        hasGroup: false,
      },
      {
        weekNumber: 14,
        title: 'Avance de tesis: revisión, redacción y aporte académico',
        description:
          'Evaluación de capítulos iniciales (1-3), uso de IA para optimizar redacción científica, gestión de referencias bibliográficas y definición del aporte investigativo. Metodología para garantizar coherencia y rigor en el desarrollo del trabajo.',
        variant: 'green',
        hasGroup: false,
      },
      {
        weekNumber: 15,
        title: 'Revisión final y evaluación del proyecto de tesis',
        description:
          'Análisis integral de los capítulos 1 al 3, retroalimentación sobre el aporte investigativo y pautas para la evaluación final. Estrategias para asegurar el cumplimiento de los estándares académicos y la originalidad del trabajo.',
        variant: 'green',
        hasGroup: false,
      },
    ],
    columns: 3,
  },
  {
    title: 'Evaluación del avance de tesis',
    weeks: [
      {
        weekNumber: 16,
        title: 'Evaluación del avance de tesis (capítulos 1-3)',
        description: 'Evaluación del avance de los proyectos de tesis.',
        hasGroup: false,
        variant: 'light',
      },
    ],
    columns: 1,
  },
];
