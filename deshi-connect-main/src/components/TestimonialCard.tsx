
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
  rating: number;
  className?: string;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  imageUrl,
  rating,
  className,
  index = 0
}) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-xl shadow-sm border border-border relative animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
    >
      {/* Quote mark */}
      <div className="absolute -top-3 -left-3 text-5xl text-deshi-teal/20 font-serif">❝</div>
      
      {/* Content */}
      <div className="pt-4">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-5 h-5",
                i < rating ? "text-deshi-orange fill-deshi-orange" : "text-gray-300"
              )}
            />
          ))}
        </div>
        
        <p className="text-gray-700 mb-6">{quote}</p>
        
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src={imageUrl}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border-2 border-deshi-teal"
            />
          </div>
          <div>
            <h4 className="font-semibold text-deshi-blue">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
