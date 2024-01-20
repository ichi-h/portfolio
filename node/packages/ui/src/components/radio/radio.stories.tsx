import { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./radio";

const meta: Meta<typeof Radio> = {
  title: "radio",
  component: Radio,
  argTypes: {
    onChange: {
      action: "changed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: (args) => <Radio {...args}>radio</Radio>,
};
