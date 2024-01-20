import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "button",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>click</Button>,
};
