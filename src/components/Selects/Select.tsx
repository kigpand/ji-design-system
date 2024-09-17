import styled, { css, keyframes } from "styled-components";
import { SelectProps } from "../../types/SelectProps";
import { useState } from "react";
import SelectItem from "./SelectItem";

export default function Select(props: SelectProps) {
  const [placeholder, setPlaceholder] = useState<string>(props.placeholder);
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  function handleSelectItem(value: string) {
    setPlaceholder(value);
    props.handleChangeSelect(value);
    setIsOpen(false);
  }

  return (
    <SelectWrapper>
      <Placeholder onClick={() => setIsOpen(!isOpen)}>
        {placeholder}
      </Placeholder>
      {isOpen !== null && (
        <SelectListWrapper $isOpen={isOpen}>
          {props.values.map((value) => {
            return (
              <SelectItem
                key={value}
                value={value}
                handleSelectItem={handleSelectItem}
              />
            );
          })}
        </SelectListWrapper>
      )}
    </SelectWrapper>
  );
}

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

type ContainerProps = {
  $isOpen: boolean;
};

const Placeholder = styled.div`
  width: 100%;
  height: 35px;
  padding: 0px 8px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  padding-left: 4px;
  color: gray;
  cursor: pointer;
`;

const selectListOpacity = ($isOpen: boolean) => css`
  animation: ${$isOpen ? fadeIn : fadeOut} 0.15s ease-in forwards;
`;

const SelectListWrapper = styled.ul<ContainerProps>`
  opacity: 0;
  position: absolute;
  top: 40px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
  border: 1px solid gray;
  ${(props) => selectListOpacity(props.$isOpen)};
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
