import { Link as _Link } from "@remix-run/react";
import { backgroundStyle } from "portfolio-styles/pages/home";
import { Background, Headline, Link, Text } from "portfolio-ui";

export const Home = () => {
  return (
    <Background className={backgroundStyle} src="/bg.webp">
      <Headline level="1">
        <Text color="mono.50">Welcome to Remix</Text>
      </Headline>
      <ul>
        <li>
          <Link href="https://remix.run/tutorials/blog" openInNewTab={true}>
            15m Quickstart Blog Tutorial
          </Link>
        </li>
        <li>
          <Link href="https://remix.run/tutorials/jokes" openInNewTab={true}>
            Deep Dive Jokes App Tutorial
          </Link>
        </li>
        <li>
          <Link href="https://remix.run/docs" openInNewTab={true}>
            Remix Docs
          </Link>
        </li>
        <li>
          <Link as={_Link} asProps={{ to: "/works" }}>
            Works
          </Link>
        </li>
      </ul>
    </Background>
  );
};
