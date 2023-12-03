import { css } from "linaria";

import { THEME } from "@/ui/base";

interface Props {
  children?: React.ReactNode;
  isLoading: boolean;
}

const skeleton = css`
  background-color: ${THEME.color.mono["500"]};
  line-height: 1;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
  width: 100%;
  ::after {
    animation: load 1.5s ease-in-out infinite;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    /* background-size: 200% 100%; */
    content: "";
    height: 100%;
    left: -100%;
    position: absolute;
    top: 0;
    width: 100%;
    @keyframes load {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }
  }
`;

const skeletonContent = css`
  visibility: hidden;
`;

const skeletonContentVisible = css`
  visibility: visible;
`;

export const Skeleton = ({ children, isLoading }: Props) => (
  <div className={isLoading ? skeleton : ""}>
    <div className={isLoading ? skeletonContent : skeletonContentVisible}>
      {children}
    </div>
  </div>
);
