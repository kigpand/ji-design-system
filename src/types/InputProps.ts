import { InputHTMLAttributes } from "react";

export type InputProps = {
  $width: string;
  errortext?: string;
} & InputHTMLAttributes<HTMLInputElement>;
