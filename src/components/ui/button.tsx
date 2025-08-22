import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { IoArrowForwardOutline } from 'react-icons/io5';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'group inline-flex flex-between gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none cursor-pointer pr-2 pl-4 py-2',
  {
    variants: {
      variant: {
        textArrow1:
          'bg-secondary-100 text-neutral-950 shadow-xs hover:bg-neutral-950/50 hover:text-neutral-25 min-w-40',
        textArrow2:
          'bg-neutral-25 text-neutral-950 shadow-xs hover:bg-neutral-950/50 hover:text-neutral-25 min-w-40 border-neutral-500 border-1 hover:border-neutral-950/50',
        arrow: 'text-neutral-950 shadow-xs px-0',
        default:
          'bg-primary-300 text-neutral-25 shadow-xs hover:bg-primary-300/70 justify-center hover:bg-neutral-950/50 min-w-40',
      },
      size: {
        default: 'h-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {props.children}
      {(variant === 'textArrow1' ||
        variant === 'textArrow2' ||
        variant === 'arrow') && (
        <div
          className={`text-neutral-25 flex-center flex h-10 w-10 rounded-full transition-all duration-300 group-hover:scale-115 ${variant === 'textArrow1' || variant === 'textArrow2' ? 'bg-neutral-950' : 'bg-primary-300 hover:scale-120 hover:bg-neutral-950/50'}`}
        >
          <IoArrowForwardOutline />
        </div>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
