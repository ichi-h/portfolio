import { styled } from "linaria/react";

interface Props {
  src: string;
  width: string;
  height: string;
  shadow?: string;
}

const Styled = styled.img<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  box-shadow: ${(props) => props.shadow || "0 0 0 0"};
`;

export const Avatar = (props: Props) => {
  return (
    <Styled
      src={props.src}
      width={props.width}
      height={props.height}
      shadow={props.shadow}
    />
  );
};
