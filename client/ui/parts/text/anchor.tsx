import { styled } from "linaria/react";
import Link from "next/link";

import { THEME } from "@/ui/base";
import { Color, Size } from "@/ui/types";

interface StyleProps {
  color?: Color;
  fontSize?: Size;
}

interface AnchorProps extends StyleProps {
  type: "anchor";
  children?: React.ReactNode;
  href: string;
  blank?: boolean;
}

interface LinkProps extends StyleProps {
  type: "link";
  children?: React.ReactNode;
  to: string;
}

type Props = AnchorProps | LinkProps;

const defaultProps = {
  color: THEME.color.blue["500"],
  fontSize: THEME.size.sm,
};

export const StyledSpan = styled.span<StyleProps>`
  color: ${(props) => props.color || defaultProps.color};
  text-decoration: none;
  font-size: ${(props) => props.fontSize || defaultProps.fontSize};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const StyledAnchor = styled.a<StyleProps>`
  color: ${(props) => props.color || defaultProps.color};
  text-decoration: none;
  font-size: ${(props) => props.fontSize || defaultProps.fontSize};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Anchor = (props: Props) => {
  if (props.type === "link") {
    return (
      <Link href={props.to}>
        <StyledSpan color={props.color} fontSize={props.fontSize}>
          {props.children}
        </StyledSpan>
      </Link>
    );
  }
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
