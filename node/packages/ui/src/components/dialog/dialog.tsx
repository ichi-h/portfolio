import clsx from "clsx";
import * as styles from "portfolio-styles/components/dialog.css";
import { ComponentProps, useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
} & ComponentProps<"dialog">;

export const Dialog = ({
  children,
  className,
  isOpen,
  onClose,
  ...props
}: Props) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (!dialogRef.current) return;
    if (isOpen) {
      if (dialogRef.current.hasAttribute("open")) return;
      dialogRef.current.showModal();
    } else {
      if (!dialogRef.current.hasAttribute("open")) return;
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog
      className={clsx([styles.dialog, className])}
      ref={dialogRef}
      onClick={onClose}
      {...props}
    >
      <div className={styles.dialogBody} onClick={stopPropagation}>
        {children}
      </div>
    </dialog>
  );
};
