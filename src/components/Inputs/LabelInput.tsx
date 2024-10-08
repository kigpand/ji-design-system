import styled from "styled-components";
import Input from "./Input";
import { LabelComponentProps } from "../../types/LabelComponentProps";
import { InputProps } from "../../types/InputProps";

export default function LabelInput(props: LabelComponentProps<InputProps>) {
  return (
    <LabelInputStyled>
      <label>{props.label}</label>
      <Input {...props} />
    </LabelInputStyled>
  );
}

const LabelInputStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    padding-left: 4px;
    font-weight: bold;
    font-size: 12px;
  }
`;
