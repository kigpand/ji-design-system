import { Meta, StoryObj } from "@storybook/react";
import Input from "../src/components/Inputs/Input";

const meta = {
  title: "Input/Input",
  component: Input,
  argTypes: {},
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof Input>;

export const InputView: Story = {
  args: {
    $width: "100px",
  },
};
