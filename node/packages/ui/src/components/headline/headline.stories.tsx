import { Meta, StoryObj } from "@storybook/react";

import { Headline } from "./headline";

const meta: Meta<typeof Headline> = {
  title: "headline",
  component: Headline,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Headline>;

export const Default: Story = {
  render: () => (
    <>
      <Headline level="1">Headline 1</Headline>
      <Headline level="2">Headline 2</Headline>
      <Headline level="3">Headline 3</Headline>
      <Headline level="4">Headline 4</Headline>
      <Headline level="5">Headline 5</Headline>
      <Headline level="6">Headline 6</Headline>
    </>
  ),
};
