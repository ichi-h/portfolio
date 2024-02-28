import { Headline } from "portfolio-ui";
import { FC } from "react";

import { title } from "@/styles/root.css";

type Props = {
  children: React.ReactNode;
};

export const Title: FC<Props> = ({ children }) => (
  <div className={title}>
    <Headline level="1">{children}</Headline>
  </div>
);
