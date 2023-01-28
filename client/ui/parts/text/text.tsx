import { styled } from "linaria/react";

import { THEME } from "@/ui/base";

interface Props {
  children?: React.ReactNode;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  align?: "left" | "center" | "right";
  verticalAlign?: "center" | "flex-start" | "flex-end" | "baseline";
  lineClamp?: number;
}

export const Text = styled.span<Props>`
  font-size: ${(props) => props.fontSize || "initial"};
  font-weight: ${(props) => props.fontWeight || "initial"};
  line-height: ${(props) => props.lineHeight || "initial"};
  color: ${(props) => props.color || THEME.color.mono["000"]};
  text-align: ${(props) => props.align || "initial"};
  vertical-align: ${(props) => props.verticalAlign || "center"};
  display: ${(props) => (props.lineClamp ? "-webkit-box" : "initial")};
  -webkit-box-orient: ${(props) => (props.lineClamp ? "vertical" : "initial")};
  -webkit-line-clamp: ${(props) => props.lineClamp || "initial"};
  overflow: ${(props) => (props.lineClamp ? "hidden" : "initial")};
`;
