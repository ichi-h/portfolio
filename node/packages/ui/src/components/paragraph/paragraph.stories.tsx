import { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";

import * as s from "@/styles";

import { Paragraph } from "./paragraph";

const options = {
  align: Object.keys(s.textAlign) as Array<keyof typeof s.textAlign>,
  overflow: Object.keys(s.overflow) as Array<keyof typeof s.overflow>,
  textOverflow: Object.keys(s.textOverflow) as Array<
    keyof typeof s.textOverflow
  >,
  whiteSpace: Object.keys(s.textWhiteSpace) as Array<
    keyof typeof s.textWhiteSpace
  >,
};

const meta: Meta<typeof Paragraph> = {
  title: "paragraph",
  component: Paragraph,
  argTypes: {
    align: {
      control: {
        type: "select",
      },
      options: options.align,
    },
    overflow: {
      control: {
        type: "select",
      },
      options: options.overflow,
    },
    textOverflow: {
      control: {
        type: "select",
      },
      options: options.textOverflow,
    },
    whiteSpace: {
      control: {
        type: "select",
      },
      options: options.whiteSpace,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  render: (args) => (
    <div
      className={clsx([
        s.flex,
        s.flexDirection["column"],
        s.gap[2],
        s.border[1],
        s.borderStyle["solid"],
        s.borderColor["mono.500"],
        s.w[64],
        s.p[4],
      ])}
    >
      <Paragraph {...args}>sample text1</Paragraph>
      <Paragraph {...args}>sample text2</Paragraph>
      <Paragraph {...args}>
        long sample text sample text sample text sample text sample text sample
        text sample text
      </Paragraph>
    </div>
  ),
};
