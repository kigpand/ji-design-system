import { ButtonProps } from "@/types/ButtonProps";
import { colors } from "@/utils/styles";
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
  cursor: pointer;
`;

const PrimaryButton = styled(ButtonStyled)`
  background-color: ${colors.primiary};
`;

const SecondaryButton = styled(ButtonStyled)`
  background-color: ${colors.secondary};
`;

const TertiaryButton = styled(ButtonStyled)`
  background-color: ${colors.tertiary};
`;

const SpecialityButton = styled(ButtonStyled)`
  background-color: ${colors.speciality};
`;
