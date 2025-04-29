import { UnitSection } from '@/components/UnitSection';
import { WeekCard } from '@/components/WeekCard';
import { programData } from '@/data/unit-data';

export const ProgramSection = () => {
  // Agregamos esto porque no funcionan los estilos computados
  const gridColumnClasses: { [key: number]: string } = {
    1: 'grid grid-cols-1 md:grid-cols-1 gap-6',
    2: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    3: 'grid grid-cols-1 md:grid-cols-3 gap-6',
    4: 'grid grid-cols-1 md:grid-cols-4 gap-6',
  };

  return (
    <section
      id="programa"
      className="container max-w-[1150px] mx-auto px-4 py-20 pt-28 relative"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-40 -translate-x-1/2"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-sky-50 rounded-full filter blur-3xl opacity-50 translate-x-1/2"></div>
      
      <div className="mx-auto max-w-3xl text-center relative z-10" data-aos="fade-up">
        <div className="inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-sm font-medium text-gray-900 shadow-md"> {/* Cambiado de text-white a text-gray-900 */}
          Cronograma
        </div>
        <h2 className="mt-6 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Programa del Curso y Temas por Semana
        </h2>
        <p className="mt-6 text-gray-600 text-lg">
          Selecciona una semana para ver el contenido completo del curso.
        </p>
      </div>

      <div className="mt-16 space-y-16 relative z-10">
        {programData.map((unit, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            {unit.title && (
              <UnitSection title={unit.title}>
                <div
                  className={
                    gridColumnClasses[unit.columns] || gridColumnClasses[1]
                  }
                >
                  {unit.weeks.map((week, weekIndex) => (
                    <div
                      key={weekIndex}
                      data-aos="fade-up"
                      data-aos-delay={weekIndex * 200}
                    >
                      <WeekCard
                        weekNumber={week.weekNumber}
                        title={week.title}
                        description={week.description}
                        variant={week.variant}
                        hasGroup={week.hasGroup}
                        groups={week.groups}
                      />
                    </div>
                  ))}
                </div>
              </UnitSection>
            )}
            {!unit.title && (
              <div>
                <div
                  className={
                    gridColumnClasses[unit.columns] || gridColumnClasses[1]
                  }
                >
                  {unit.weeks.map((week, weekIndex) => (
                    <div
                      key={weekIndex}
                      data-aos="fade-up"
                      data-aos-delay={weekIndex * 200}
                    >
                      <WeekCard
                        weekNumber={week.weekNumber}
                        title={week.title}
                        description={week.description}
                        variant={week.variant}
                        hasGroup={week.hasGroup}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
