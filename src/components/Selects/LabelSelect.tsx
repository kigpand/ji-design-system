import styled from "styled-components";
import { LabelComponentProps } from "../../types/LabelComponentProps";
import { SelectProps } from "../../types/SelectProps";
import Select from "./Select";

export default function LabelSelect(props: LabelComponentProps<SelectProps>) {
  return (
    <LabelSelectStyled>
      <label>{props.label}</label>
      <Select {...props} />
    </LabelSelectStyled>
  );
}

const LabelSelectStyled = styled.div`
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
