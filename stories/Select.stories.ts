import { Meta } from "@storybook/react/*";
import { StoryObj } from "@storybook/react/*";
import Select from "../src/components/Selects/Select";

const meta = {
  title: "Select/Select",
  component: Select,
  argTypes: {},
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof Select>;

export const SelectView: Story = {
  args: {
    placeholder: "테스트입니다",
    values: ["1", "2", "3", "4", "5"],
    handleChangeSelect: (value) => console.log(value),
  },
};
