import { InputHTMLAttributes } from "react";

export type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export type LabelInputProps = {
  label: string;
} & InputProps;
