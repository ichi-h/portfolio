import { Avatar, GitHubIcon, Icon, Link, Text, XIcon } from "portfolio-ui";

import me from "@/assets/me_512x512.jpg";
import { Hr } from "@/components/hr";
import { Layout } from "@/components/layout";
import { Title } from "@/components/title";
import * as styles from "@/styles/me.css";

export default function Index() {
  return (
    <Layout>
      <div className={styles.layout}>
        <Title>About me</Title>
        <Avatar className={styles.avatar} src={me} size={64} />
        <Text fontSize="12" color="mono.900">
          ichi-h
        </Text>
        <Text fontSize="6" color="mono.900">
          考えること。作ること。
        </Text>
        <div className={styles.snsLinks}>
          <Link
            className={styles.snsLink}
            href="https://github.com/ichi-h"
            openInNewTab
          >
            <Icon icon={GitHubIcon} size={12} />
          </Link>
          <Link
            className={styles.snsLink}
            href="https://twitter.com/ichi_h3"
            openInNewTab
          >
            <Icon icon={XIcon} size={12} />
          </Link>
        </div>
        <Hr />
        <Text fontSize="4" color="mono.900">
          Coming soon...
        </Text>
      </div>
    </Layout>
  );
}
