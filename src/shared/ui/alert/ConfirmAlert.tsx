import { useKeydown } from '@/shared/hooks';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';
import { useConfirmAlertStore } from '@/shared/store';
import { useRef } from 'react';

export interface ConfirmAlertProps {
  confirmTitle: string;
  confirmMessage: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
  children: React.ReactNode;
}

const ConfirmAlert = ({
  confirmTitle,
  confirmMessage,
  confirmButtonText = 'Continue',
  cancelButtonText = 'Cancel',
  onConfirm,
  children,
}: ConfirmAlertProps) => {
  const { isConfirmAlertOpen, setIsConfirmAlertOpen } = useConfirmAlertStore();

  const ref = useRef<HTMLDivElement>(null);

  useKeydown(
    'Escape',
    () => {
      setIsConfirmAlertOpen(false);
    },
    ref,
  );

  return (
    <AlertDialog
      open={isConfirmAlertOpen}
      onOpenChange={setIsConfirmAlertOpen}
    >
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent ref={ref}>
        <AlertDialogHeader>
          <AlertDialogTitle>{confirmTitle}</AlertDialogTitle>
          <AlertDialogDescription>{confirmMessage}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="min-w-20 bg-mono300 hover:opacity-80">
            {cancelButtonText}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onConfirm();
            }}
            className="min-w-20 bg-skyblue hover:opacity-80"
          >
            {confirmButtonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmAlert;
