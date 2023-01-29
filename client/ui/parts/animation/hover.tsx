import { css } from "linaria";

interface Props {
  children: React.ReactNode;
  scale?: "md" | "lg";
}

const hoverStyle = css`
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

const largeScaleStyle = css`
  &:hover {
    transform: scale(1.06);
  }
`;

export const Hover = ({ children, scale }: Props) => {
  const scaleStyle = scale === "lg" ? largeScaleStyle : "";
  return <div className={`${hoverStyle} ${scaleStyle}`}>{children}</div>;
};
