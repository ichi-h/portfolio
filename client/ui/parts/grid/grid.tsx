import { styled } from "linaria/react";

interface Props {
  children?: React.ReactNode;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gap?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props: Props) =>
    props.gridTemplateColumns || "initial"};
  grid-template-rows: ${(props: Props) => props.gridTemplateRows || "initial"};
  gap: ${(props: Props) => props.gap || "initial"};
  width: ${(props: Props) => props.width || "initial"};
  height: ${(props: Props) => props.height || "initial"};
  max-width: ${(props: Props) => props.maxWidth || "initial"};
  max-height: ${(props: Props) => props.maxHeight || "initial"};
  min-width: ${(props: Props) => props.minWidth || "initial"};
  min-height: ${(props: Props) => props.minHeight || "initial"};
`;
