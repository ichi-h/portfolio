import { css } from "linaria";
import { styled } from "linaria/react";

import { THEME } from "@/ui/base";

interface StyleProps {
  fontSize?: string;
  isChecked: boolean;
}

interface Props extends StyleProps {
  children?: React.ReactNode;
  onChange?: () => void;
}

const styledLabel = css`
  display: inline-block;
`;

const styledInput = css`
  display: none;
`;

const StyledSpan = styled.span<StyleProps>`
  font-size: ${(props) => props.fontSize || THEME.size.md};
  color: ${(props) =>
    props.isChecked ? THEME.color.mono["900"] : THEME.color.mono["000"]};
  border: 1px solid
    ${(props) =>
      props.isChecked ? THEME.color.mono["000"] : THEME.color.mono["000"]};
  border-radius: ${THEME.size.xs};
  background-color: ${(props) =>
    props.isChecked ? THEME.color.mono["000"] : "initial"};
  cursor: pointer;
  padding: 0 ${THEME.size.xs3};
  user-select: none;
`;

export const TagCheckbox = ({
  children,
  fontSize,
  isChecked,
  onChange,
}: Props) => {
  return (
    <label className={styledLabel}>
      <input
        type="checkbox"
        className={styledInput}
        checked={isChecked}
        onChange={onChange}
      />
      <StyledSpan fontSize={fontSize} isChecked={isChecked}>
        {children}
      </StyledSpan>
    </label>
  );
};
