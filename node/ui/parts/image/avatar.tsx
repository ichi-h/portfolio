import { styled } from "linaria/react";

import { THEME } from "@/ui/base";

interface Props {
  src: string;
  width: string;
  height: string;
  isShadow?: boolean;
}

const Styled = styled.img<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  box-shadow: ${(props) => (props.isShadow ? THEME.color.shadow["000"] : "")};
  user-select: none;
`;

export const Avatar = (props: Props) => {
  return (
    <Styled
      src={props.src}
      width={props.width}
      height={props.height}
      isShadow={props.isShadow}
    />
  );
};
