interface UnitSectionProps {
  title: string;
  children: React.ReactNode;
}

export const UnitSection = ({ title, children }: UnitSectionProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      {children}
    </div>
  );
};
