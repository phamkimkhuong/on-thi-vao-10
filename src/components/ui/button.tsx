import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] active:duration-75 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-indigo-600 dark:hover:bg-indigo-500 shadow-sm hover:shadow-md hover:shadow-primary/10',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-slate-200 dark:hover:bg-slate-800 border border-transparent',
        outline: 'border border-border bg-transparent text-foreground hover:bg-secondary',
        ghost: 'bg-transparent text-foreground hover:bg-secondary',
        danger: 'bg-destructive text-destructive-foreground hover:bg-red-600 shadow-sm',
      },
      size: {
        sm: 'text-xs px-3 py-1.5 gap-1.5',
        md: 'text-sm px-4 py-2 gap-2',
        lg: 'text-base px-6 py-3 gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
