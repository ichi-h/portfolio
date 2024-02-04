import { Meta, StoryObj } from "@storybook/react";
import * as styles from "portfolio-styles/components/text.css";

import { Text } from "./text";

const options = {
  fontSize: Object.keys(styles.fontSize) as Array<keyof typeof styles.fontSize>,
  color: Object.keys(styles.fontColor) as Array<keyof typeof styles.fontColor>,
  weight: Object.keys(styles.fontWeight) as Array<
    keyof typeof styles.fontWeight
  >,
  lineHeight: Object.keys(styles.lineHeight) as Array<
    keyof typeof styles.lineHeight
  >,
  decoration: Object.keys(styles.textDecoration) as Array<
    keyof typeof styles.textDecoration
  >,
  verticalAlign: Object.keys(styles.textVerticalAlign) as Array<
    keyof typeof styles.textVerticalAlign
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
