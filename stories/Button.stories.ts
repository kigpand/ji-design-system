import type { Meta, StoryObj } from "@storybook/react";
import Button from "../src/components/Buttons/Button";
import { ButtonProps } from "../src/types/ButtonProps";

const meta = {
  title: "Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<ButtonProps>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "primary",
    func: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "secondary",
    func: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    label: "tertiary",
    func: "tertiary",
  },
};

export const Speciality: Story = {
  args: {
    label: "speciality",
    func: "speciality",
  },
};
