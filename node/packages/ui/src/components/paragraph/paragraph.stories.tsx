import { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "./paragraph";
import * as s from "./paragraph.css";

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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid #000",
        width: "300px",
        padding: "1rem",
      }}
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
