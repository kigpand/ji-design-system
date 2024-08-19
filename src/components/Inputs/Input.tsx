import styled from "styled-components";
import { InputProps } from "../../types/InputProps";

export default function Input(props: InputProps) {
  return <InputStyled {...props} />;
}

const InputStyled = styled.input`
  padding: 4px 8px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 4px;
`;
