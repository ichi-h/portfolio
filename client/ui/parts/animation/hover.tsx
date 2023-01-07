import { styled } from "linaria/react";

interface Props {
  transition: string;
}

export const Hover = styled.div<Props>`
  transition: ${(props: Props) => props.transition};
  cursor: pointer;
  filter: brightness(2);
  &:hover {
    transform: scale(1.02);
  }
`;
