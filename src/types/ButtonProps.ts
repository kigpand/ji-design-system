import { ButtonHTMLAttributes } from "react";
import { DesignType, Size } from "./Types";

export type ButtonProps = {
  func: DesignType;
  label: string;
  size: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;
