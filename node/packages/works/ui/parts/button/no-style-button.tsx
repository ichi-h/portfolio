import { css } from "linaria";

const style = css`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
`;

export const NoStyleButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button className={style} {...props}>
      {props.children}
    </button>
  );
};
