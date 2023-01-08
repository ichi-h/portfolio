import { css } from "linaria";

import { THEME } from "@/ui/base";

const horizonRoleStyle = css`
  width: 100%;
  border-bottom: 1px solid ${THEME.color.mono["500"]};
  margin: ${THEME.size.xs3} 0;
`;

export const HorizonRole = () => {
  return <div className={horizonRoleStyle} />;
};
