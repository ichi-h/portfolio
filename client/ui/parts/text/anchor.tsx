import { styled } from "linaria/react";

import { THEME } from "@/ui/base";
import { Color, Size } from "@/ui/types";

interface StyleProps {
  color?: Color;
  fontSize?: Size;
}

interface Props extends StyleProps {
  children?: React.ReactNode;
  href: string;
  blank?: boolean;
  rel?: string;
}

const defaultProps = {
  color: THEME.color.blue["500"],
  fontSize: THEME.size.sm,
};

export const StyledAnchor = styled.a<StyleProps>`
  color: ${(props) => props.color || defaultProps.color};
  text-decoration: none;
  font-size: ${(props) => props.fontSize || "initial"};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Anchor = (props: Props) => {
  return (
    <StyledAnchor
      href={props.href}
      target={props.blank ? "_blank" : "_self"}
      rel={`${props.rel || ""} ${props.blank ? "noopener noreferrer" : ""}`}
      color={props.color}
      fontSize={props.fontSize}
    >
      {props.children}
    </StyledAnchor>
  );
};
