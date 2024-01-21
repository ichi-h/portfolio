import { Meta, StoryObj } from "@storybook/react";

import * as s from "@/styles";

import { Text } from "./text";

const options = {
  fontSize: Object.keys(s.fontSize) as Array<keyof typeof s.fontSize>,
  color: Object.keys(s.fontColor) as Array<keyof typeof s.fontColor>,
  weight: Object.keys(s.fontWeight) as Array<keyof typeof s.fontWeight>,
  lineHeight: Object.keys(s.lineHeight) as Array<keyof typeof s.lineHeight>,
  decoration: Object.keys(s.textDecoration) as Array<
    keyof typeof s.textDecoration
  >,
  verticalAlign: Object.keys(s.textVerticalAlign) as Array<
    keyof typeof s.textVerticalAlign
  >,
};

const meta: Meta<typeof Text> = {
  title: "text",
  component: Text,
  argTypes: {
    fontSize: {
      control: {
        type: "select",
      },
      options: options.fontSize,
    },
    color: {
      control: {
        type: "select",
      },
      options: options.color,
    },
    weight: {
      control: {
        type: "select",
      },
      options: options.weight,
    },
    lineHeight: {
      control: {
        type: "select",
      },
      options: options.lineHeight,
    },
    decoration: {
      control: {
        type: "select",
      },
      options: options.decoration,
    },
    verticalAlign: {
      control: {
        type: "select",
      },
      options: options.verticalAlign,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => <Text {...args}>sample text</Text>,
};
