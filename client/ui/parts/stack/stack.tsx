import { styled } from "linaria/react";

import { Size } from "@/ui/types";

interface Props {
  children: React.ReactNode;
  justify?: "center" | "flex-start" | "flex-end" | "space-between";
  align?: "center" | "flex-start" | "flex-end" | "baseline";
  direction?: "row" | "column";
  gap?: Size;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
}

export const Stack = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"};
  width: ${(props) => props.width || "initial"};
  height: ${(props) => props.height || "initial"};
  max-width: ${(props) => props.maxWidth || "initial"};
  max-height: ${(props) => props.maxHeight || "initial"};
  min-width: ${(props) => props.minWidth || "initial"};
  min-height: ${(props) => props.minHeight || "initial"};
  padding: ${(props) => props.padding || "initial"};
  background-color: ${(props) => props.backgroundColor || "initial"};
  border: ${(props) => props.border || "initial"};
  border-radius: ${(props) => props.borderRadius || "initial"};
`;
