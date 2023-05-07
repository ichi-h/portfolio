import { css } from "linaria";
import { styled } from "linaria/react";
import NextLink from "next/link";

import { THEME } from "@/ui/base";
import { Color, Size } from "@/ui/types";

interface StyleProps {
  color?: Color;
  fontSize?: Size;
  textDecoration?: "none" | "underline";
  mdFontSize?: Size;
  smFontSize?: Size;
  xsFontSize?: Size;
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
  @media only screen and (min-width: ${THEME.breakPoint.md}px) {
    font-size: ${(props) =>
      props.mdFontSize || props.fontSize || defaultProps.fontSize};
  }
  @media only screen and (max-width: ${THEME.breakPoint.sm}px) {
    font-size: ${(props) =>
      props.smFontSize || props.fontSize || defaultProps.fontSize};
  }
  @media only screen and (max-width: ${THEME.breakPoint.xs}px) {
    font-size: ${(props) =>
      props.xsFontSize || props.fontSize || defaultProps.fontSize};
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
          mdFontSize={props.mdFontSize}
          smFontSize={props.smFontSize}
          xsFontSize={props.xsFontSize}
          textDecoration={props.textDecoration}
        >
          {props.children}
        </StyledSpan>
      </a>
    </NextLink>
  );
};
