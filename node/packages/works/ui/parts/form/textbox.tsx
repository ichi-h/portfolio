import { css } from "linaria";
import { styled } from "linaria/react";
import React from "react";

import { THEME } from "@/ui/base";
import { TIcon } from "@/ui/parts/icons";

interface StyleProps {
  width?: string;
  icon?: React.ReactElement<TIcon>;
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
  & ~ div > svg {
    fill: ${THEME.color.mono["300"]};
  }
  &:hover {
    outline: 1px solid ${THEME.color.mono["000"]};
    & ~ div > svg {
      fill: ${THEME.color.mono["000"]};
    }
  }
  &:focus {
    outline: 2px solid ${THEME.color.mono["000"]};
    & ~ div > svg {
      fill: ${THEME.color.mono["000"]};
    }
  }
`;

const hasIconInput = css`
  padding-left: ${THEME.size.xl5};
`;

const inputWrapper = css`
  position: relative;
`;

const iconStyle = css`
  position: absolute;
  top: 50%;
  left: ${THEME.size.xs3};
  transform: translateY(-50%);
`;

export const TextBox = ({
  value,
  placeholder,
  onChange,
  width,
  icon,
}: Props) => {
  return (
    <div className={inputWrapper}>
      <StyledTextBox
        type="text"
        className={[staticInput, icon && hasIconInput].join(" ")}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        width={width}
      />
      <div className={iconStyle}>{icon}</div>
    </div>
  );
};
