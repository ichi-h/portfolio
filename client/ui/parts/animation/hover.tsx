import { css } from "linaria";

const hoverStyle = css`
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Hover = ({ children }: { children: React.ReactNode }) => {
  return <div className={hoverStyle}>{children}</div>;
};
