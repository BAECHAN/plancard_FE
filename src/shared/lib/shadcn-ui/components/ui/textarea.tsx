import * as React from 'react';

import { cn } from '@/shared/lib/shadcn-ui/lib/utils';

import { Size } from '@/shared/type';

import { titleLarge, titleMedium, titleSmall } from '@/shared/const';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  hasBorder?: boolean;
  textSize?: Size;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasBorder = true, textSize = 'medium', ...props }, ref) => {
    const sizeClassTitle: Record<Size, string> = {
      large: titleLarge,
      medium: titleMedium,
      small: titleSmall,
    };

    return (
      <textarea
        className={cn(
          'bg-background ring-offset-background placeholder:text-muted-foreground flex w-full px-3 py-2',
          sizeClassTitle[textSize],
          {
            'border-slate-200 rounded-md border-[1px] border-solid': hasBorder,
          },
          'focus:outline-blue-500 focus:outline focus:outline-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        autoFocus
        ref={ref}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
