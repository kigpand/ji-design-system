import React from "react";
import { ButtonProps } from "../../types/ButtonProps";
import styled from "styled-components";

const Button = ({ label }: ButtonProps) => {
  return <ButtonStyled>{label}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
  width: 200px;
  height: 300px;
  background-color: red;
`;
