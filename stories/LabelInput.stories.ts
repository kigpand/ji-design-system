import { Meta } from "@storybook/react/*";
import LabelInput from "../src/components/Inputs/LabelInput";
import { StoryObj } from "@storybook/react/*";

const meta = {
  title: "Input/LabelInput",
  component: LabelInput,
} satisfies Meta<typeof LabelInput>;
export default meta;

type Story = StoryObj<typeof LabelInput>;

export const LabelInputView: Story = {
  args: {
    style: {
      width: "150px",
    },
    label: "test label",
  },
};