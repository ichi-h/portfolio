import { Meta, StoryObj } from "@storybook/react";
import * as styles from "portfolio-styles/components/avatar.css";

import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: Object.keys(styles.avatar) as Array<keyof typeof styles.avatar>,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "./public/images/avatar_512x512.jpg",
    size: 32,
  },
  render: (args) => <Avatar {...args} />,
};
