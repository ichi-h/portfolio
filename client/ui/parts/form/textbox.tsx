import { css } from "linaria";
import { styled } from "linaria/react";

import { THEME } from "@/ui/base";

interface StyleProps {
  width?: string;
}

interface Props extends StyleProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const StyledTextBox = styled.input<StyleProps>`
  width: ${(props) => props.width || "100%"};
`;

const staticInput = css`
  border: none;
  outline: 1px solid ${THEME.color.mono["500"]};
  border-radius: ${THEME.size.xs3};
  padding: ${THEME.size.xs4} ${THEME.size.xs2};
  font-size: ${THEME.size.md};
  background: none;
  &:hover {
    outline: 1px solid ${THEME.color.mono["000"]};
  }
  &:focus {
    outline: 2px solid ${THEME.color.mono["000"]};
  }
`;

export const TextBox = ({ value, placeholder, onChange, width }: Props) => {
  return (
    <StyledTextBox
      type="text"
      className={staticInput}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      width={width}
    />
  );
};
