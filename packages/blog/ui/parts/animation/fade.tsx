import { styled } from "linaria/react";

interface Props {
  isDisplay: boolean;
  transition: string;
}

export const Fade = styled.div<Props>`
  opacity: ${(props: Props) => (props.isDisplay ? "1" : "0")};
  visibility: ${(props: Props) => (props.isDisplay ? "visible" : "hidden")};
  transition: ${(props: Props) => props.transition};
`;
