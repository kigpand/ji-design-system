import { Meta } from "@storybook/react/*";
import LabelInput from "../src/components/Inputs/LabelInput";
import { StoryObj } from "@storybook/react/*";

const meta = {
  title: "Input/LabelInput",
  component: LabelInput,
  argTypes: {},
} satisfies Meta<typeof LabelInput>;
export default meta;

type Story = StoryObj<typeof LabelInput>;

export const LabelInputView: Story = {
  args: {
    $width: "150px",
    label: "asd",
  },
};
