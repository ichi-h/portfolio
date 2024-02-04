import { Meta, StoryObj } from "@storybook/react";
import * as styles from "portfolio-styles/components/background.css";

import { Background } from "./background";

const meta: Meta<typeof Background> = {
  title: "background",
  component: Background,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: Object.keys(styles.bg) as `${keyof typeof styles.bg}`[],
    },
    opacity: {
      control: {
        type: "select",
      },
      options: Object.keys(
        styles.opacity,
      ) as `${keyof typeof styles.opacity}`[],
    },
    src: {
      control: {
        type: "text",
      },
    },
    position: {
      control: {
        type: "select",
      },
      options: Object.keys(
        styles.bgPosition,
      ) as `${keyof typeof styles.bgPosition}`[],
    },
    size: {
      control: {
        type: "select",
      },
      options: Object.keys(styles.bgSize) as `${keyof typeof styles.bgSize}`[],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Default: Story = {
  args: {
    src: "https://source.unsplash.com/random",
  },
  render: (args) => (
    <Background
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...args}
    >
      <div
        style={{
          width: "128px",
          height: "128px",
          backgroundColor: "#f8f8f8",
          textAlign: "center",
        }}
      >
        content
      </div>
    </Background>
  ),
};
