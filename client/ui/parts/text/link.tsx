import { styled } from "linaria/react";
import NextLink from "next/link";

import { THEME } from "@/ui/base";
import { Color, Size } from "@/ui/types";

interface StyleProps {
  color?: Color;
  fontSize?: Size;
}

interface Props extends StyleProps {
  type: "link";
  children?: React.ReactNode;
  to: string;
}

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

export const Link = (props: Props) => {
  return (
    <NextLink href={props.to}>
      <StyledSpan color={props.color} fontSize={props.fontSize}>
        {props.children}
      </StyledSpan>
    </NextLink>
  );
};
