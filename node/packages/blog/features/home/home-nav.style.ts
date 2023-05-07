import { css } from "linaria";

import { THEME } from "@/ui/base";

export const homeNavWrapperStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const homeNavStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${THEME.size.md};
`;

export const homeNavLinksStyle = css`
  display: flex;
  gap: ${THEME.size.md};
  @media only screen and (max-width: ${THEME.breakPoint.md}px) {
    flex-direction: column;
  }
`;
