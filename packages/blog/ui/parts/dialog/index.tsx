import { css } from "linaria";
import { styled } from "linaria/react";
import { useEffect, useRef } from "react";

import { THEME } from "@/ui/base";

interface StyleProps {
  top?: string;
  left?: string;
  transform?: string;
}

interface Props extends StyleProps, React.HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose?: () => void;
}

const StyledDialog = styled.dialog<StyleProps>`
  top: ${(props: StyleProps) => props.top || "50%"};
  left: ${(props: StyleProps) => props.left || "50%"};
  transform: ${(props: StyleProps) =>
    props.transform || "translate(-50%, -50%)"};
`;

const dialogStyle = css`
  border: none;
  background: ${THEME.color.mono["800"]};
  border-radius: ${THEME.size.xs3};
  width: 600px;
  padding: 0;
  margin: 0;
  @media screen and (max-width: ${THEME.breakPoint.md}px) {
    width: 80%;
  }
  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

const modalStyle = css`
  width: 100%;
  height: 100%;
  padding: ${THEME.size.xl2};
`;

export const Dialog = ({
  isOpen,
  onClose,
  children,
  top,
  left,
  transform,
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
    <StyledDialog
      className={dialogStyle}
      ref={dialogRef}
      onClick={onClose}
      top={top}
      left={left}
      transform={transform}
    >
      <div className={modalStyle} onClick={stopPropagation}>
        {children}
      </div>
    </StyledDialog>
  );
};
