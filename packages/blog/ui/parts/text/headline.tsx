import { css } from "linaria";

import { THEME } from "@/ui/base";

import { Stack } from "../stack/stack";

interface Props {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const h1Style = css`
  color: ${THEME.color.mono["000"]};
  font-size: ${THEME.size.xl5};
  @media only screen and (max-width: ${THEME.breakPoint.md}px) {
    font-size: ${THEME.size.xl4};
  }
  @media only screen and (max-width: ${THEME.breakPoint.sm}px) {
    font-size: ${THEME.size.xl3};
  }
  text-align: left;
`;
export const h2Style = css`
  color: ${THEME.color.mono["000"]};
  font-size: ${THEME.size.xl4};
  @media only screen and (max-width: ${THEME.breakPoint.md}px) {
    font-size: ${THEME.size.xl3};
  }
`;
export const h3Style = css`
  color: ${THEME.color.mono["000"]};
  font-size: ${THEME.size.xl3};
  @media only screen and (max-width: ${THEME.breakPoint.md}px) {
    font-size: ${THEME.size.xl2};
  }
`;
export const h4Style = css`
  color: ${THEME.color.mono["000"]};
  font-size: ${THEME.size.xl2};
  @media only screen and (max-width: ${THEME.breakPoint.md}px) {
    font-size: ${THEME.size.xl};
  }
`;
export const h5Style = css`
  color: ${THEME.color.mono["000"]};
  font-size: ${THEME.size.xl};
  @media only screen and (max-width: ${THEME.breakPoint.md}px) {
    font-size: ${THEME.size.lg};
  }
`;
export const h6Style = css`
  color: ${THEME.color.mono["000"]};
  font-size: ${THEME.size.lg};
`;

export const Headline = (props: Props) => {
  if (props.level === 1) {
    return (
      <Stack justify="center">
        <h1 className={h1Style}>{props.children}</h1>
      </Stack>
    );
  }
  if (props.level === 2) return <h2 className={h2Style}>{props.children}</h2>;
  if (props.level === 3) return <h3 className={h3Style}>{props.children}</h3>;
  if (props.level === 4) return <h4 className={h4Style}>{props.children}</h4>;
  if (props.level === 5) return <h5 className={h5Style}>{props.children}</h5>;
  if (props.level === 6) return <h6 className={h6Style}>{props.children}</h6>;
  throw new Error("Invalid headline level");
};
