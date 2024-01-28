import { Link as _Link } from "@remix-run/react";
import {
  outer,
  headline,
  links,
  link,
  footer,
  avatar,
} from "portfolio-styles/pages/home";
import { Headline, Link, Text, Avatar } from "portfolio-ui";

import me from "@/assets/me_512x512.jpg";
import { Footer } from "@/components/footer";

export default function Index() {
  return (
    <div className={outer}>
      <Link as={_Link} asProps={{ to: "/me" }}>
        <Avatar className={avatar} src={me} size={64} />
      </Link>
      <Headline level="1">
        <Text className={headline} color="mono.50" fontSize="16">
          ichi-h.com
        </Text>
      </Headline>
      <div className={links}>
        <Link
          as={_Link}
          asProps={{ to: "/works?category=development" }}
          color="mono.50"
        >
          <Text className={link} fontSize="8">
            Development
          </Text>
        </Link>
        <Link
          as={_Link}
          asProps={{ to: "/works?category=music" }}
          color="mono.50"
        >
          <Text className={link} fontSize="8">
            Music
          </Text>
        </Link>
        <Link
          as={_Link}
          asProps={{ to: "/works?category=photography" }}
          color="mono.50"
        >
          <Text className={link} fontSize="8">
            Photography
          </Text>
        </Link>
        <Link
          as={_Link}
          asProps={{ to: "/works?category=philosophy" }}
          color="mono.50"
        >
          <Text className={link} fontSize="8">
            Philosophy
          </Text>
        </Link>
      </div>
      <div className={footer}>
        <Footer />
      </div>
    </div>
  );
}
