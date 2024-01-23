import { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";

import * as s from "@/styles";

import { Background } from "./background";

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
      className={clsx([
        s.flex,
        s.flexJustify["center"],
        s.flexAlign["center"],
        s.w["1/1"],
        s.h["vh"],
      ])}
      {...args}
    >
      <div
        className={clsx([
          s.w[32],
          s.h[32],
          s.bg["mono.50"],
          s.textAlign["center"],
        ])}
      >
        content
      </div>
    </Background>
  ),
};
