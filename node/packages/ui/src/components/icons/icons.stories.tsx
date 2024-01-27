import { Meta, StoryObj } from "@storybook/react";

import { COLOR } from "@/constants";

import * as s from "./icon.css";

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
      options: Object.keys(s.w) as Array<keyof typeof s.w>,
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
