import { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";

import { COLOR } from "@/constants";
import * as s from "@/styles";

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
          className={clsx([s.flex, s.gap[2], s.flexAlign["center"]])}
          key={name}
        >
          <Icon icon={Component} {...args} />
          <span>{name}</span>
        </div>
      ))}
    </>
  ),
};
