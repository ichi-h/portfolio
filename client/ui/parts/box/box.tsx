import { styled } from "linaria/react";

import { THEME } from "@/ui/base";

interface Props {
  children?: React.ReactNode;
  type?: "div" | "nav" | "header" | "footer";
  position?: "relative" | "absolute" | "fixed" | "static" | "sticky";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  transformTranslate?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  zIndex?: number;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  isShadow?: boolean;
}

const Div = styled.div<Props>`
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "initial"};
  right: ${(props) => props.right || "initial"};
  bottom: ${(props) => props.bottom || "initial"};
  left: ${(props) => props.left || "initial"};
  transform: ${(props) => props.transformTranslate || "initial"};
  width: ${(props) => props.width || "initial"};
  height: ${(props) => props.height || "initial"};
  max-width: ${(props) => props.maxWidth || "initial"};
  max-height: ${(props) => props.maxHeight || "initial"};
  min-width: ${(props) => props.minWidth || "initial"};
  min-height: ${(props) => props.minHeight || "initial"};
  z-index: ${(props) => props.zIndex || "initial"};
  background-color: ${(props) => props.backgroundColor || "initial"};
  border: ${(props) => props.border || "initial"};
  border-radius: ${(props) => props.borderRadius || "initial"};
  padding: ${(props) => props.padding || "initial"};
  box-shadow: ${(props) =>
    props.isShadow ? THEME.color.shadow["000"] : "initial"};
`;

const Nav = styled.nav<Props>`
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "initial"};
  right: ${(props) => props.right || "initial"};
  bottom: ${(props) => props.bottom || "initial"};
  left: ${(props) => props.left || "initial"};
  transform: ${(props) => props.transformTranslate || "initial"};
  width: ${(props) => props.width || "initial"};
  height: ${(props) => props.height || "initial"};
  max-width: ${(props) => props.maxWidth || "initial"};
  max-height: ${(props) => props.maxHeight || "initial"};
  min-width: ${(props) => props.minWidth || "initial"};
  min-height: ${(props) => props.minHeight || "initial"};
  z-index: ${(props) => props.zIndex || "initial"};
  background-color: ${(props) => props.backgroundColor || "initial"};
  border: ${(props) => props.border || "initial"};
  border-radius: ${(props) => props.borderRadius || "initial"};
  padding: ${(props) => props.padding || "initial"};
  box-shadow: ${(props) =>
    props.isShadow ? THEME.color.shadow["000"] : "initial"};
`;

const Header = styled.header<Props>`
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "initial"};
  right: ${(props) => props.right || "initial"};
  bottom: ${(props) => props.bottom || "initial"};
  left: ${(props) => props.left || "initial"};
  transform: ${(props) => props.transformTranslate || "initial"};
  width: ${(props) => props.width || "initial"};
  height: ${(props) => props.height || "initial"};
  max-width: ${(props) => props.maxWidth || "initial"};
  max-height: ${(props) => props.maxHeight || "initial"};
  min-width: ${(props) => props.minWidth || "initial"};
  min-height: ${(props) => props.minHeight || "initial"};
  z-index: ${(props) => props.zIndex || "initial"};
  background-color: ${(props) => props.backgroundColor || "initial"};
  border: ${(props) => props.border || "initial"};
  border-radius: ${(props) => props.borderRadius || "initial"};
  padding: ${(props) => props.padding || "initial"};
  box-shadow: ${(props) =>
    props.isShadow ? THEME.color.shadow["000"] : "initial"};
`;

const Footer = styled.footer<Props>`
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "initial"};
  right: ${(props) => props.right || "initial"};
  bottom: ${(props) => props.bottom || "initial"};
  left: ${(props) => props.left || "initial"};
  transform: ${(props) => props.transformTranslate || "initial"};
  width: ${(props) => props.width || "initial"};
  height: ${(props) => props.height || "initial"};
  max-width: ${(props) => props.maxWidth || "initial"};
  max-height: ${(props) => props.maxHeight || "initial"};
  min-width: ${(props) => props.minWidth || "initial"};
  min-height: ${(props) => props.minHeight || "initial"};
  z-index: ${(props) => props.zIndex || "initial"};
  background-color: ${(props) => props.backgroundColor || "initial"};
  border: ${(props) => props.border || "initial"};
  border-radius: ${(props) => props.borderRadius || "initial"};
  padding: ${(props) => props.padding || "initial"};
  box-shadow: ${(props) =>
    props.isShadow ? THEME.color.shadow["000"] : "initial"};
`;

export const Box = (props: Props) => {
  if (props.type === "nav") {
    return <Nav {...props}>{props.children}</Nav>;
  }
  if (props.type === "header") {
    return <Header {...props}>{props.children}</Header>;
  }
  if (props.type === "footer") {
    return <Footer {...props}>{props.children}</Footer>;
  }
  return <Div {...props}>{props.children}</Div>;
};
