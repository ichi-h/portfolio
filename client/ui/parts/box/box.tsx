import { styled } from "linaria/react";

interface Props {
  children?: React.ReactNode;
  position?: "relative" | "absolute" | "fixed" | "static" | "sticky";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  transformTranslate?: string;
  width?: string;
  height?: string;
  zIndex?: number;
}

export const Box = styled.div<Props>`
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "initial"};
  right: ${(props) => props.right || "initial"};
  bottom: ${(props) => props.bottom || "initial"};
  left: ${(props) => props.left || "initial"};
  transform: ${(props) => props.transformTranslate || "initial"};
  width: ${(props) => props.width || "initial"};
  height: ${(props) => props.height || "initial"};
  z-index: ${(props) => props.zIndex || "initial"};
`;
