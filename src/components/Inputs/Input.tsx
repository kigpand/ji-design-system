import styled from "styled-components";
import { InputProps } from "../../types/InputProps";

export default function Input(props: InputProps) {
  return (
    <Wrapper $width={props.$width}>
      <InputStyled {...props} />
      {props.errorText && <ErrorText>{props.errorText}</ErrorText>}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  position: relative;
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 4px;
`;

const ErrorText = styled.div`
  color: red;
  position: absolute;
  margin-top: 4px;
  font-size: 8px;
`;
