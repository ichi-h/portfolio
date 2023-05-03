import { css } from "linaria";
import { styled } from "linaria/react";

import { THEME } from "@/ui/base";
import { SizeKey } from "@/ui/types";

interface StyleProps {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: string;
  backgroundColor?: string;
  border?: string;
}

interface Props extends StyleProps {
  children?: React.ReactNode;
  justify?: "center" | "start" | "end" | "between";
  align?: "center" | "start" | "end" | "baseline";
  direction?: "row" | "column";
  wrap?: "nowrap" | "wrap" | "reverse";
  gap?: SizeKey;
  borderRadius?: SizeKey | "circle";
  isShadow?: boolean;
}

const justifyStyle = {
  center: css`
    justify-content: center;
  `,
  start: css`
    justify-content: flex-start;
  `,
  end: css`
    justify-content: flex-end;
  `,
  between: css`
    justify-content: space-between;
  `,
};

const alignStyle = {
  center: css`
    align-items: center;
  `,
  start: css`
    align-items: flex-start;
  `,
  end: css`
    align-items: flex-end;
  `,
  baseline: css`
    align-items: baseline;
  `,
};

const directionStyle = {
  row: css`
    flex-direction: row;
  `,
  column: css`
    flex-direction: column;
  `,
};

const wrapStyle = {
  nowrap: css`
    flex-wrap: nowrap;
  `,
  wrap: css`
    flex-wrap: wrap;
  `,
  reverse: css`
    flex-wrap: wrap-reverse;
  `,
};

const gapStyle = {
  none: css`
    gap: 0;
  `,
  xs4: css`
    gap: ${THEME.size.xs4};
  `,
  xs3: css`
    gap: ${THEME.size.xs3};
  `,
  xs2: css`
    gap: ${THEME.size.xs2};
  `,
  xs: css`
    gap: ${THEME.size.xs};
  `,
  sm: css`
    gap: ${THEME.size.sm};
  `,
  md: css`
    gap: ${THEME.size.md};
  `,
  lg: css`
    gap: ${THEME.size.lg};
  `,
  xl: css`
    gap: ${THEME.size.xl};
  `,
  xl2: css`
    gap: ${THEME.size.xl2};
  `,
  xl3: css`
    gap: ${THEME.size.xl3};
  `,
  xl4: css`
    gap: ${THEME.size.xl4};
  `,
  xl5: css`
    gap: ${THEME.size.xl5};
  `,
  xl6: css`
    gap: ${THEME.size.xl6};
  `,
  xl7: css`
    gap: ${THEME.size.xl7};
  `,
};

const borderRadiusStyle = {
  circle: css`
    border-radius: 50%;
  `,
  none: css`
    border-radius: 0;
  `,
  xs4: css`
    border-radius: ${THEME.size.xs4};
  `,
  xs3: css`
    border-radius: ${THEME.size.xs3};
  `,
  xs2: css`
    border-radius: ${THEME.size.xs2};
  `,
  xs: css`
    border-radius: ${THEME.size.xs};
  `,
  sm: css`
    border-radius: ${THEME.size.sm};
  `,
  md: css`
    border-radius: ${THEME.size.md};
  `,
  lg: css`
    border-radius: ${THEME.size.lg};
  `,
  xl: css`
    border-radius: ${THEME.size.xl};
  `,
  xl2: css`
    border-radius: ${THEME.size.xl2};
  `,
  xl3: css`
    border-radius: ${THEME.size.xl3};
  `,
  xl4: css`
    border-radius: ${THEME.size.xl4};
  `,
  xl5: css`
    border-radius: ${THEME.size.xl5};
  `,
  xl6: css`
    border-radius: ${THEME.size.xl6};
  `,
  xl7: css`
    border-radius: ${THEME.size.xl7};
  `,
};

const shadowStyle = css`
  box-shadow: ${THEME.color.shadow["000"]};
`;

const StyledStack = styled.div<StyleProps>`
  display: flex;
  width: ${(props) => props.width || "initial"};
  height: ${(props) => props.height || "initial"};
  max-width: ${(props) => props.maxWidth || "initial"};
  max-height: ${(props) => props.maxHeight || "initial"};
  min-width: ${(props) => props.minWidth || "initial"};
  min-height: ${(props) => props.minHeight || "initial"};
  padding: ${(props) => props.padding || "initial"};
  background-color: ${(props) => props.backgroundColor || "initial"};
  border: ${(props) => props.border || "initial"};
`;

export const Stack = ({
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  padding,
  backgroundColor,
  border,
  children,
  justify,
  align,
  direction,
  wrap,
  gap,
  borderRadius,
  isShadow,
}: Props) => {
  const staticStyle = [
    justify && justifyStyle[justify],
    align && alignStyle[align],
    direction && directionStyle[direction],
    wrap && wrapStyle[wrap],
    gap && gapStyle[gap],
    borderRadius && borderRadiusStyle[borderRadius],
    isShadow && shadowStyle,
  ]
    .filter(Boolean)
    .join(" ");

  const dynamicStyle = {
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    padding,
    backgroundColor,
    border,
  };

  return (
    <StyledStack className={staticStyle} {...dynamicStyle}>
      {children}
    </StyledStack>
  );
};
