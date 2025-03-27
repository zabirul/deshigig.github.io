
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  className?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  iconColor = "text-deshi-teal", 
  className,
  index = 0
}) => {
  return (
    <div 
      className={cn(
        "bg-white border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
    >
      <div className={cn("mb-4 w-14 h-14 rounded-full flex items-center justify-center", 
        iconColor === "text-deshi-teal" ? "bg-deshi-teal/10" : 
        iconColor === "text-deshi-orange" ? "bg-deshi-orange/10" : 
        iconColor === "text-deshi-blue" ? "bg-deshi-blue/10" : 
        "bg-gray-100"
      )}>
        <Icon className={cn("w-7 h-7", iconColor)} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-deshi-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
