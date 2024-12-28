import * as React from 'react';

import { cn } from '@/shared/lib/shadcn-ui/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'bg-background ring-offset-background placeholder:text-muted-foreground flex w-full px-3 py-2 text-sm',
        'border-slate-200 border-[1px] border-solid',
        'focus:outline-blue-500 focus:outline focus:outline-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
