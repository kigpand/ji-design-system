import { ButtonHTMLAttributes } from "react";
import { DesignType } from "./Types";

export type ButtonProps = {
  func: DesignType;
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
