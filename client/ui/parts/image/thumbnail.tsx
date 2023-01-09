import { styled } from "linaria/react";
import { useCallback, useState } from "react";

import { THEME } from "@/ui/base";

interface StyleProps {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  borderRadius?: string;
  isShadow?: boolean;
}

interface Props extends StyleProps {
  src: string;
  alt: string;
}

const StyledImage = styled.img<StyleProps>`
  width: ${(props: StyleProps) => props.width || "initial"};
  height: ${(props: StyleProps) => props.height || "initial"};
  max-width: ${(props: StyleProps) => props.maxWidth || "initial"};
  max-height: ${(props: StyleProps) => props.maxHeight || "initial"};
  min-width: ${(props: StyleProps) => props.minWidth || "initial"};
  min-height: ${(props: StyleProps) => props.minHeight || "initial"};
  border-radius: ${(props: StyleProps) => props.borderRadius || "initial"};
  box-shadow: ${(props: StyleProps) =>
    props.isShadow ? THEME.color.shadow["000"] : "initial"};
`;

const StyledErrorImage = styled.div<StyleProps>`
  width: ${(props: StyleProps) => props.width || "initial"};
  height: ${(props: StyleProps) => props.height || "initial"};
  max-width: ${(props: StyleProps) => props.maxWidth || "initial"};
  max-height: ${(props: StyleProps) => props.maxHeight || "initial"};
  min-width: ${(props: StyleProps) => props.minWidth || "initial"};
  min-height: ${(props: StyleProps) => props.minHeight || "initial"};
  border-radius: ${(props: StyleProps) => props.borderRadius || "initial"};
  background-color: ${THEME.color.mono["500"]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${THEME.color.mono["000"]};
`;

export const Thumbnail = (props: Props) => {
  const [isError, setIsError] = useState(false);

  const onError = useCallback(() => {
    setIsError(true);
  }, []);

  return (
    <>
      {!isError ? (
        <StyledImage
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          maxWidth={props.maxWidth}
          maxHeight={props.maxHeight}
          minWidth={props.minWidth}
          minHeight={props.minHeight}
          borderRadius={props.borderRadius}
          isShadow={props.isShadow}
          onError={onError}
        />
      ) : (
        <StyledErrorImage
          width={props.width}
          height={props.height}
          maxWidth={props.maxWidth}
          maxHeight={props.maxHeight}
          minWidth={props.minWidth}
          minHeight={props.minHeight}
          borderRadius={props.borderRadius}
        >
          No Image
        </StyledErrorImage>
      )}
    </>
  );
};
