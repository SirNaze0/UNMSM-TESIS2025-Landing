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
        hasGroup: true,
        groups: [{groupNumber:'Imanol Yaipén',groupLink:'https://drive.google.com/file/d/1lv2_I22k4rP4433JHgUJZi4U7JdBROvP/view?usp=sharing'},],
      },
      {
        weekNumber: 7,
        title: 'Presentación y evaluación crítica de artículos científicos(Parte 1)',
        description:
          'Exposición oral y escrita de artículos académicos, con énfasis en la estructuración de informes de síntesis. Desarrollo de habilidades para el análisis crítico, comunicación efectiva de hallazgos y retroalimentación constructiva en entornos de investigación.',
        variant: 'dark',
        hasGroup: true,
        groups: [{groupNumber:'Manuel Minaya',groupLink:'https://drive.google.com/drive/folders/12YjYZtWzG43ljSfCp6JGwAACEPBjF8fN?usp=sharing'},
          {groupNumber:'Marlo Mejia',groupLink:'https://drive.google.com/drive/folders/1ceUEvLSKYPVMVWlNuhrRH7JkZwSi8HZr?usp=sharing'},
          {groupNumber:'Ashly Chavez',groupLink:'https://drive.google.com/drive/folders/1GZpPuwWs1h6fzeWiaIMSpvC6g4M9RfT3?usp=sharing'},
          {groupNumber:'Jefferson Asencios',groupLink:'https://drive.google.com/drive/folders/1LGGeKj3uFhGlZoJVQFUBUzRBOw5DdSdo?usp=sharing'},
          {groupNumber:'Ashly Surichaqui',groupLink:'https://drive.google.com/drive/folders/1PgV0NJdwYRappOXrHkYow3VwAqlkMPxH?usp=sharing'},
          {groupNumber:'Alvaro Blas',groupLink:'https://drive.google.com/drive/folders/1WKiOnc-hqYwRo6f6UPoTQurR_aNFrNHx?usp=sharing'},
        ],
      },
      {
        weekNumber: 8,
        title: 'Presentación y evaluación crítica de artículos científicos(Parte 2)',
        description:
          'Exposición oral y escrita de artículos académicos, con énfasis en la estructuración de informes de síntesis. Desarrollo de habilidades para el análisis crítico, comunicación efectiva de hallazgos y retroalimentación constructiva en entornos de investigación.',
        variant: 'dark',
        hasGroup: true,
        groups: [{groupNumber:'Kevin Gonzalez',groupLink:'https://drive.google.com/drive/folders/1-n8bjVZDDBXBsr7WQF7xOPNl1fgebLFN?usp=sharing'},
          {groupNumber:'Kevin Uscata',groupLink:'https://drive.google.com/drive/folders/1yMWsKC43h0WSwhTweX0HxirSbOs3mH7t?usp=sharing'},
          {groupNumber:'Monica Mendoza',groupLink:'https://drive.google.com/drive/folders/1gaoWAGRXM960709wy27HZKtG8Ma-XrAJ?usp=sharing'},
          {groupNumber:'Marilú Huarcaya',groupLink:'https://drive.google.com/drive/folders/1c7YhIxG83rglxPvocEOhPqHx0Ab1IemI?usp=sharing'},
          {groupNumber:'Alvaro Caldas',groupLink:'https://drive.google.com/drive/folders/1VhBryjL1rLZSTcXuUx_OmG_LsGU_dW7w?usp=sharing'},],
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
        variant: 'dark',
        hasGroup: true,
        groups: [{groupNumber:'Jefferson Asencios',groupLink:'https://drive.google.com/drive/folders/1F31hdMl4sMPhrcGOQXA5uCw1q0WkZ67y?usp=sharing'},
          {groupNumber:'Marlo Mejia',groupLink:'https://drive.google.com/drive/folders/1W1VaxBBFJucxz66oB4JF5vUzK98RX_u-?usp=sharing'},],
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
        hasGroup: true,
        groups: [{groupNumber:'Kevin Uscata',groupLink:'https://drive.google.com/drive/folders/1q3sdNMAHqpnjSWFbe2kF6wMTqQl3T7-E?usp=sharing'},
          {groupNumber:'Alvaro Caldas',groupLink:'https://drive.google.com/drive/folders/1bd6JHZ3kBbU-dn9Sr9Mhmj9hkL2jAohH?usp=sharing'},
          {groupNumber:'Alvaro Blas',groupLink:'https://drive.google.com/drive/folders/1cZduO1UdHJ5e-EWCuChMrlh-MhLdvp2m?usp=sharing'},
          {groupNumber:'Imanol Yaipén',groupLink:'https://drive.google.com/drive/folders/1acifukJsaciNfJojjLrMBGf5n9YGAv09?usp=sharing'},
          {groupNumber:'Monica Mendoza',groupLink:'https://drive.google.com/drive/folders/1IUA8jviwqIYjTu5tEWu_9_QDp7AfT9d4?usp=sharing'},
          {groupNumber:'Ashly Surichaqui',groupLink:'https://drive.google.com/drive/folders/1SAE53dclfpE9kOwAX4RaDf083RXes4dy?usp=sharing'},
          {groupNumber:'Ashly Chavez',groupLink:'https://drive.google.com/drive/folders/1pSztpu0pJ7uWg7Mls-O5Z7zDTHCWt_23?usp=sharing'},
          {groupNumber:'Marilú Huarcaya',groupLink:'https://drive.google.com/drive/folders/1fBGEuZY5HnpN6MiYWvAlTVM-9_voUYsJ?usp=sharing'},
          {groupNumber:'Kevin Gonzalez',groupLink:'https://drive.google.com/drive/folders/1V9HF49ha1mVKyPWASF8EmdBaiBcnjHeS?usp=sharing'},
          ],
        variant: 'dark',
      },
    ],
    columns: 1,
  },
];
