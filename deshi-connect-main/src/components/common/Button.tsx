
import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        outline: "border border-input bg-transparent hover:bg-accent/10 text-foreground",
        ghost: "hover:bg-accent/10 text-foreground hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        deshi: "bg-deshi-teal text-white hover:bg-deshi-teal/90 shadow-md hover:shadow-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
      isLoading: {
        true: "cursor-wait",
        false: "",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isLoading: false,
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  fullWidth?: boolean;
  ripple?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, fullWidth, ripple = true, children, ...props }, ref) => {
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);

    React.useEffect(() => {
      if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        const timer = setTimeout(() => setIsRippling(false), 500);
        
        return () => clearTimeout(timer);
      }
    }, [coords]);

    React.useEffect(() => {
      if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple) {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
      props.onClick?.(e);
    };

    return (
      <button
        className={cn(buttonVariants({ variant, size, isLoading, fullWidth }), className)}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-transparent border-white mr-2" />
              <span>{children}</span>
            </div>
          ) : (
            children
          )}
        </span>
        
        {isRippling && ripple && (
          <span
            className="absolute bg-white/30 rounded-full animate-ripple"
            style={{
              left: coords.x,
              top: coords.y,
              width: '500px',
              height: '500px',
              marginLeft: '-250px',
              marginTop: '-250px',
              transform: 'scale(0)',
              animation: 'ripple 600ms linear',
            }}
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

