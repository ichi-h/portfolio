import { css } from "linaria";
import { styled } from "linaria/react";

import { THEME } from "@/ui/base";

interface Props {
  children?: React.ReactNode;
  fontSize?: string;
}

const budgeStaticStyle = css`
  color: ${THEME.color.mono["000"]};
  border: 1px solid ${THEME.color.mono["000"]};
  border-radius: ${THEME.size.xs};
  padding: 0 ${THEME.size.xs3};
  user-select: none;
  &::before {
    content: "#";
  }
  &:hover {
    background-color: ${THEME.color.mono["700"]};
  }
`;

const BudgeDynamicStyle = styled.span<Props>`
  font-size: ${(props) => props.fontSize || "initial"};
`;

export const Budge = ({ children, fontSize }: Props) => {
  return (
    <BudgeDynamicStyle className={budgeStaticStyle} fontSize={fontSize}>
      {children}
    </BudgeDynamicStyle>
  );
};
