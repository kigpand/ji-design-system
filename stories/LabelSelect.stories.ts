import { Meta, StoryObj } from "@storybook/react";
import LabelSelect from "../src/components/Selects/LabelSelect";

const meta = {
  title: "Select/LabelSelect",
  component: LabelSelect,
  argTypes: {},
} satisfies Meta<typeof LabelSelect>;
export default meta;

type Story = StoryObj<typeof LabelSelect>;

export const LabelSelectView: Story = {
  args: {
    label: "테스트 라벨",
    placeholder: "테스트입니다",
    values: ["1", "2", "3", "4", "5"],
    width: "500px",
    handleChangeSelect: (value) => console.log(value),
  },
};
