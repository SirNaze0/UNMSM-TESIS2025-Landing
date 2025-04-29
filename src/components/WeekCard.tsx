import { ChevronRight } from 'lucide-react';

export interface WeekCardProps {
  weekNumber: number;
  title: string;
  description: string;
  groupNumber?: number;
  variant?: 'light' | 'dark' | 'green' | 'white';
  hasGroup?: boolean;
  groupLink?: string;
}

export const WeekCard = ({
  weekNumber,
  title,
  description,
  groupNumber,
  variant = 'light',
  hasGroup = true,
  groupLink = '#',
}: WeekCardProps) => {
  const variants = {
    light: 'bg-gradient-to-br from-blue-50 to-white text-black border-blue-200',
    dark: 'bg-gradient-to-br from-gray-800 to-gray-700 text-white border-gray-600',
    green: 'bg-gradient-to-br from-sky-50 to-white text-black border-sky-200',
    white: 'bg-white text-black border-gray-200',
  };

  const badgeVariants = {
    light: 'bg-gradient-to-r from-primary-light to-secondary text-gray-900', // Cambiado de text-white a text-gray-900
    dark: 'bg-gradient-to-r from-gray-200 to-white text-gray-800',
    green: 'bg-gradient-to-r from-primary to-secondary text-gray-900', // Cambiado de text-white a text-gray-900
    white: 'bg-gradient-to-r from-primary to-secondary text-gray-900', // Cambiado de text-white a text-gray-900
  };

  const buttonVariants = {
    light: 'bg-gradient-to-r from-primary to-secondary-dark text-white hover:opacity-90',
    dark: 'bg-gradient-to-r from-gray-200 to-white text-gray-800 hover:opacity-90',
    green: 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90',
    white: 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90',
  };

  const descriptionVariants = {
    light: 'text-gray-600',
    dark: 'text-gray-300',
    green: 'text-gray-700',
    white: 'text-gray-600',
  };

  return (
    <div
      className={`rounded-xl border p-6 relative overflow-hidden shadow-md hover:shadow-lg transition-all ${variants[variant]} group`}
    >
      {/* Elemento decorativo */}
      <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full border border-dashed border-gray-300 opacity-30 group-hover:opacity-60 transition-opacity"></div>
      
      <div
        className={`absolute top-0 left-0 px-4 py-1.5 text-sm font-medium rounded-br-lg shadow-sm ${badgeVariants[variant]}`}
      >
        Semana {weekNumber}
      </div>
      
      <div className="mt-8">
        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{title}</h4>
        <p className={`mt-3 ${descriptionVariants[variant]}`}>
          {description}
        </p>
        
{weekNumber === 6 && (
          <a
            href="https://drive.google.com/file/d/1lv2_I22k4rP4433JHgUJZi4U7JdBROvP/view"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all shadow-sm ${buttonVariants[variant]} group-hover:shadow-md`}
          >
            Ver Tesis de Yaipén Diaz, Imanol Alberto
            <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
};
