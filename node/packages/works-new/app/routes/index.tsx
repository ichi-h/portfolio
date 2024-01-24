import { Link as _Link } from "@remix-run/react";
import { Background, Link } from "portfolio-ui";

export default function Index() {
  return (
    <Background color="red.500">
      <h1>Welcome to Remix</h1>
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
}
