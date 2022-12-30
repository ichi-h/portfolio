import { styled } from "linaria/react";

import { Size } from "@/ui/types";

interface Props {
  children: React.ReactNode;
  justify?: "center" | "flex-start" | "flex-end" | "space-between";
  align?: "center" | "flex-start" | "flex-end" | "baseline";
  direction?: "row" | "column";
  gap?: Size;
  width?: string;
  height?: string;
}

const StyledStack = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"};
  width: ${(props) => props.width || "initial"};
  height: ${(props) => props.height || "initial"};
`;

export const Stack = (props: Props) => {
  return (
    <StyledStack
      justify={props.justify}
      align={props.align}
      direction={props.direction}
      gap={props.gap}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </StyledStack>
  );
};
