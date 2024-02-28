import { Link as _Link } from "@remix-run/react";
import { Link } from "portfolio-ui";
import { ComponentProps, FC } from "react";

import { navStyle, navLinksStyle, navLinkStyle } from "@/styles/root.css";

type Props = Omit<ComponentProps<"nav">, "children">;

export const Nav: FC<Props> = ({ ...props }) => (
  <nav className={navStyle} {...props}>
    <div className={navLinksStyle}>
      <Link
        className={navLinkStyle}
        as={_Link}
        asProps={{ to: "/" }}
        color="mono.50"
      >
        ichi-h.com
      </Link>
    </div>
    <div className={navLinksStyle}>
      <Link
        className={navLinkStyle}
        as={_Link}
        asProps={{ to: "/works" }}
        color="mono.50"
      >
        Works
      </Link>
      <Link
        className={navLinkStyle}
        as={_Link}
        asProps={{ to: "/me" }}
        color="mono.50"
      >
        Me
      </Link>
      <Link
        className={navLinkStyle}
        as={_Link}
        asProps={{ to: "/contact" }}
        color="mono.50"
      >
        Contact
      </Link>
    </div>
  </nav>
);
