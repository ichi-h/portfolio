import { Link, Text } from "portfolio-ui";

import { footerStyle } from "@/styles";

export const Footer = () => (
  <footer className={footerStyle}>
    <Link
      href="http://creativecommons.org/licenses/by/4.0/"
      rel="license"
      openInNewTab={true}
    >
      <img
        alt="Creative Commons License"
        src="https://i.creativecommons.org/l/by/4.0/88x31.png"
      />
    </Link>
    <Text color="mono.50">
      This work is licensed under a{" "}
      <Link
        href="http://creativecommons.org/licenses/by/4.0/"
        rel="license"
        openInNewTab={true}
      >
        Creative Commons Attribution 4.0 International License
      </Link>
      .
    </Text>
    <Text color="mono.50">
      Copyright ©{` ${new Date().getFullYear()} `}ichi-h All rights reserved.
    </Text>
  </footer>
);
