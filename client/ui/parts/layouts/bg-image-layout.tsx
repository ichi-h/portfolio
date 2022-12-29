import { styled } from "linaria/react";

import { THEME } from "../../base";

interface Props {
  src: string;
  children: React.ReactNode;
}

const Template = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Background = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + ${THEME.size.md});
  height: calc(100% + ${THEME.size.md});
  background-size: cover;
  background-position: center;
  -ms-filter: blur(${THEME.size.xs3});
  filter: blur(${THEME.size.xs3});
  z-index: -2;
`;

const Black = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${THEME.color.mono["000"]};
  opacity: 0.8;
  z-index: -1;
`;

export const BgImageLayout = (props: Props) => {
  return (
    <Template>
      <Background style={{ backgroundImage: `url("${props.src}")` }} />
      <Black />
      {props.children}
    </Template>
  );
};
