import { styled } from "linaria/react";

import { THEME } from "@/ui/base";
import { Color, Size } from "@/ui/types";

interface Props {
  children: React.ReactNode;
  href: string;
  blank?: boolean;
  color?: Color;
  fontSize?: Size;
}

const defaultProps = {
  color: THEME.color.blue["500"],
  fontSize: THEME.size.sm,
};

export const StyledAnchor = styled.a<Props>`
  color: ${(props) => props.color || defaultProps.color};
  text-decoration: none;
  font-size: ${(props) => props.fontSize || defaultProps.fontSize};
  &:hover {
    text-decoration: underline;
  }
`;

export const Anchor = (props: Props) => {
  return (
    <StyledAnchor
      href={props.href}
      target={props.blank ? "_blank" : "_self"}
      rel={props.blank ? "noopener noreferrer" : ""}
      color={props.color}
      fontSize={props.fontSize}
    >
      {props.children}
    </StyledAnchor>
  );
};
