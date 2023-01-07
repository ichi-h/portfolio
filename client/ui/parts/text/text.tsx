import { styled } from "linaria/react";

interface Props {
  children?: React.ReactNode;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  verticalAlign?: "center" | "flex-start" | "flex-end" | "baseline";
}

export const Text = styled.span<Props>`
  font-size: ${(props) => props.fontSize || "initial"};
  font-weight: ${(props) => props.fontWeight || "initial"};
  line-height: ${(props) => props.lineHeight || "initial"};
  color: ${(props) => props.color || "initial"};
  vertical-align: ${(props) => props.verticalAlign || "center"};
`;
