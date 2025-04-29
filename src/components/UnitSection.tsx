interface UnitSectionProps {
  title: string;
  children: React.ReactNode;
}

export const UnitSection = ({ title, children }: UnitSectionProps) => {
  return (
    <div className="relative">
      {/* Línea decorativa */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-full opacity-50 hidden md:block"></div>
      
      <div className="md:pl-8">
        <div className="flex items-center mb-8">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-md mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"> {/* Cambiado text-white a text-gray-900 */}
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
};
