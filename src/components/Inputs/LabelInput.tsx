import styled from "styled-components";
import { LabelInputProps } from "../../types/InputProps";
import Input from "./Input";

export default function LabelInput(props: LabelInputProps) {
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
