import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Dialog } from "./dialog";

const meta: Meta<typeof Dialog> = {
  title: "dialog",
  component: Dialog,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);
    return (
      <>
        <button onClick={open}>open</button>
        <Dialog isOpen={isOpen} onClose={close}>
          dialog content
          <br />
          <button onClick={close}>close</button>
        </Dialog>
      </>
    );
  },
};
