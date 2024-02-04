import { Meta, StoryObj } from "@storybook/react";
import * as styles from "portfolio-styles/components/paragraph.css";

import { Paragraph } from "./paragraph";

const options = {
  align: Object.keys(styles.textAlign) as Array<keyof typeof styles.textAlign>,
  overflow: Object.keys(styles.overflow) as Array<keyof typeof styles.overflow>,
  textOverflow: Object.keys(styles.textOverflow) as Array<
    keyof typeof styles.textOverflow
  >,
  whiteSpace: Object.keys(styles.textWhiteSpace) as Array<
    keyof typeof styles.textWhiteSpace
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
