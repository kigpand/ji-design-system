import { ButtonProps } from "@/types/ButtonProps";
import styled from "styled-components";

const Button = (props: ButtonProps) => {
  if (props.func === "primary")
    return <PrimaryButton {...props}>{props.label}</PrimaryButton>;
  if (props.func === "secondary")
    return <SecondaryButton {...props}>{props.label}</SecondaryButton>;
  if (props.func === "tertiary")
    return <TertiaryButton {...props}>{props.label}</TertiaryButton>;
  if (props.func === "speciality")
    return <SpecialityButton {...props}>{props.label}</SpecialityButton>;
  return <ButtonStyled {...props}>{props.label}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
  padding: 8px 16px;
  font-weight: bold;
  color: white;
  border: none;
  outline: none;
  border-radius: 4px;
`;

const PrimaryButton = styled(ButtonStyled)`
  background-color: #3dbfeb;
`;

const SecondaryButton = styled(ButtonStyled)`
  background-color: #ff5252;
`;

const TertiaryButton = styled(ButtonStyled)`
  background-color: #50f050;
`;

const SpecialityButton = styled(ButtonStyled)`
  background-color: #ffff45;
`;
