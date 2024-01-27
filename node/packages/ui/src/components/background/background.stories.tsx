import { Meta, StoryObj } from "@storybook/react";

import { Background } from "./background";
import * as s from "./background.css";

const meta: Meta<typeof Background> = {
  title: "background",
  component: Background,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: Object.keys(s.bg) as `${keyof typeof s.bg}`[],
    },
    opacity: {
      control: {
        type: "select",
      },
      options: Object.keys(s.opacity) as `${keyof typeof s.opacity}`[],
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
      options: Object.keys(s.bgPosition) as `${keyof typeof s.bgPosition}`[],
    },
    size: {
      control: {
        type: "select",
      },
      options: Object.keys(s.bgSize) as `${keyof typeof s.bgSize}`[],
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
