import { Meta, StoryObj } from "@storybook/react";

import { Link } from "./link";

const meta: Meta<typeof Link> = {
  title: "link",
  component: Link,
  argTypes: {
    href: {
      control: {
        type: "text",
      },
      defaultValue: "https://google.com",
    },
    openInNewTab: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "https://google.com",
  },
  render: (args) => <Link {...args}>link</Link>,
};
