import styled from "styled-components";

type Props = {
  value: string;
  handleSelectItem: (select: string) => void;
};

export default function SelectItem({ value, handleSelectItem }: Props) {
  return (
    <BoxItemWrapper onClick={() => handleSelectItem(value)}>
      {value}
    </BoxItemWrapper>
  );
}

const BoxItemWrapper = styled.li`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 4px;
  border-bottom: 1px solid gray;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }

  &:last-of-type {
    border: none;
  }
`;
