import { Meta, StoryObj } from "@storybook/react";
import * as styles from "portfolio-styles/components/icon.css";
import { COLOR } from "portfolio-styles/constants";

import {
  GitHubIcon,
  PageIcon,
  PublishIcon,
  SearchIcon,
  UpdateIcon,
  XIcon,
  Icon,
} from "./";

const icons = {
  GitHubIcon,
  PageIcon,
  PublishIcon,
  SearchIcon,
  UpdateIcon,
  XIcon,
};

const meta: Meta<typeof Icon> = {
  title: "icons",
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: Object.keys(styles.w) as Array<keyof typeof styles.w>,
    },
    color: {
      control: {
        type: "select",
      },
      options: Object.keys(COLOR) as Array<keyof typeof COLOR>,
    },
    icon: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: ({ icon: _icon, ...args }) => (
    <>
      {Object.entries(icons).map(([name, Component]) => (
        <div
          style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
          key={name}
        >
          <Icon icon={Component} {...args} />
          <span>{name}</span>
        </div>
      ))}
    </>
  ),
};
