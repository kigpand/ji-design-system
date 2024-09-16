import { InputHTMLAttributes } from "react";

export type InputProps = {
  $width: string;
  errorText?: string;
} & InputHTMLAttributes<HTMLInputElement>;
