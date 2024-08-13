import { Meta } from "@storybook/react/*";
import Input from "../src/components/Inputs/Input";
import { StoryObj } from "@storybook/react/*";

const meta = {
  title: "Input/Input",
  component: Input,
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof Input>;

export const InputView: Story = {};