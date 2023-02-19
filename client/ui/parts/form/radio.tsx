import { css } from "linaria";

import { THEME } from "@/ui/base";
import { Stack } from "@/ui/parts/stack/stack";
import { Text } from "@/ui/parts/text/text";

export interface RadioItem<T extends string> {
  label: string;
  value: T;
}

interface Props<T extends string> {
  items: RadioItem<T>[];
  value: T | "";
  name: string;
  onClick: (value: T) => void;
}

const inputStyle = css`
  display: none;
`;

const radioItemStyle = css`
  cursor: pointer;
`;

export const Radio = <T extends string>({
  items,
  value,
  name,
  onClick,
}: Props<T>) => {
  const onClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    onClick(e.currentTarget.value as T);
  };
  return (
    <Stack gap="md">
      {items.map((item) => (
        <label
          className={radioItemStyle}
          key={item.value}
          htmlFor={`radio-${name}-${item.value}`}
        >
          <Stack align="center" gap="xs3">
            <input
              className={inputStyle}
              type="radio"
              id={`radio-${name}-${item.value}`}
              value={item.value}
              defaultChecked={value === item.value}
              onClick={onClickHandler}
            />
            <Stack
              justify="center"
              align="center"
              width={THEME.size.md}
              height={THEME.size.md}
              border={`1px solid ${THEME.color.mono["500"]}`}
              borderRadius="circle"
            >
              {value === item.value && (
                <Stack
                  width={THEME.size.xs2}
                  height={THEME.size.xs2}
                  borderRadius="circle"
                  backgroundColor={THEME.color.mono["000"]}
                />
              )}
            </Stack>
            <Text>{item.label}</Text>
          </Stack>
        </label>
      ))}
    </Stack>
  );
};
