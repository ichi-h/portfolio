import { styled } from "linaria/react";

import { THEME } from "@/ui/base";

interface Props {
  src: string;
  children: React.ReactNode;
}

const Background = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + ${THEME.size.xl5});
  height: calc(100% + ${THEME.size.xl5});
  background-size: cover;
  background-position: center;
  -ms-filter: blur(${THEME.size.xs3});
  filter: blur(${THEME.size.xs3});
  z-index: -2;
`;

export const BgImageLayout = (props: Props) => {
  return (
    <>
      <Background style={{ backgroundImage: `url("${props.src}")` }} />
      {props.children}
    </>
  );
};
