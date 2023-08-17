import React, { type ButtonHTMLAttributes, forwardRef } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default:
          'text-white bg-primary font-medium rounded-full text-sm px- py-2.5 text-center inline-flex items-center',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-[1.5px] border-primary bg-white rounded hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
        sidebar:
          'w-full pt-1 text-sm font-medium text-start text-text-gray rounded-none rounded-tl-lg rounded-bl-lg hover:text-primary hover:bg-white justify-start',
        sidebarMini:
          'sticky z-40 top-0 left-0 flex items-center justify-center w-14 h-12 text-stone-950 bg-gray-200 border-b',
        dropdown:
          'text-primary bg-white border border-primary hover:bg-background-orange font-medium rounded text-sm px-4 py-2.5 text-center inline-flex items-center flex justify-between whitespace-nowrap',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={twMerge(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  ),
);
Button.displayName = 'Button';
type ButtonProps = Record<string, unknown> &
  ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
export { Button, buttonVariants };
