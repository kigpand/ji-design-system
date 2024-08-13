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

const ButtonStyled = styled.button``;

const PrimaryButton = styled(ButtonStyled)``;

const SecondaryButton = styled(ButtonStyled)``;

const TertiaryButton = styled(ButtonStyled)``;

const SpecialityButton = styled(ButtonStyled)``;
