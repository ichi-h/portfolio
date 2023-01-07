import { styled } from "linaria/react";

import { THEME } from "@/ui/base";
import { Color } from "@/ui/types";

interface StyleProps {
  color?: Color;
}

interface Props extends StyleProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const defaultProps = {
  color: THEME.color.mono["000"],
};

const color = (props: StyleProps) => props.color || defaultProps.color;

export const StyledH1 = styled.h1<StyleProps>`
  color: ${color};
  font-size: ${THEME.size.xl7};
  text-align: center;
`;
export const StyledH2 = styled.h2<StyleProps>`
  color: ${color};
  font-size: ${THEME.size.xl6};
`;
export const StyledH3 = styled.h3<StyleProps>`
  color: ${color};
  font-size: ${THEME.size.xl5};
`;
export const StyledH4 = styled.h4<StyleProps>`
  color: ${color};
  font-size: ${THEME.size.xl4};
`;
export const StyledH5 = styled.h5<StyleProps>`
  color: ${color};
  font-size: ${THEME.size.xl3};
`;
export const StyledH6 = styled.h6<StyleProps>`
  color: ${color};
  font-size: ${THEME.size.xl2};
`;

export const Headline = (props: Props) => {
  if (props.level === 1)
    return <StyledH1 color={props.color}>{props.children}</StyledH1>;
  if (props.level === 2)
    return <StyledH2 color={props.color}>{props.children}</StyledH2>;
  if (props.level === 3)
    return <StyledH3 color={props.color}>{props.children}</StyledH3>;
  if (props.level === 4)
    return <StyledH4 color={props.color}>{props.children}</StyledH4>;
  if (props.level === 5)
    return <StyledH5 color={props.color}>{props.children}</StyledH5>;
  if (props.level === 6)
    return <StyledH6 color={props.color}>{props.children}</StyledH6>;
  throw new Error("Invalid headline level");
};
