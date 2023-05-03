import { css } from "linaria";
import { styled } from "linaria/react";
import NextLink from "next/link";

import { THEME } from "@/ui/base";
import { Color, Size } from "@/ui/types";

interface StyleProps {
  color?: Color;
  fontSize?: Size;
  textDecoration?: "none" | "underline";
}

interface Props extends StyleProps {
  children?: React.ReactNode;
  to: string;
}

const defaultProps = {
  color: THEME.color.blue["500"],
  fontSize: THEME.size.sm,
};

const StyledSpan = styled.span<StyleProps>`
  color: ${(props) => props.color || defaultProps.color};
  text-decoration: none;
  font-size: ${(props) => props.fontSize || defaultProps.fontSize};
  cursor: pointer;
  &:hover {
    text-decoration: ${(props) => props.textDecoration || "underline"};
  }
`;

const anchor = css`
  color: initial;
  text-decoration: none;
`;

export const Link = (props: Props) => {
  return (
    <NextLink href={props.to}>
      <a className={anchor}>
        <StyledSpan
          color={props.color}
          fontSize={props.fontSize}
          textDecoration={props.textDecoration}
        >
          {props.children}
        </StyledSpan>
      </a>
    </NextLink>
  );
};
