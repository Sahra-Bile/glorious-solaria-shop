import { ChangeEvent } from "react";
import { styled } from "styled-components";

const Filter = styled.div`
  background-color: lightgray;
  padding: 10px;
  display: flex;
`;
const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
  background-color: lightgray;
`;
const SelectOption = styled.option`
  background-color: gray;
  font-size: 6rem;
  color: white;
`;

type FilterDropdownProps = {
  title?: string;
  options: string[];
  selectedValue: string;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export function FilterDropdown({
  title,
  options,
  selectedValue,
  handleSelectChange,
}: FilterDropdownProps) {
  return (
    <Filter>
      <Select onChange={handleSelectChange} value={selectedValue}>
        <SelectOption value="">{`All ${title?.toLowerCase()}`}</SelectOption>
        {options.map((option, index) => (
          <SelectOption key={index} value={option}>
            {option}
          </SelectOption>
        ))}
      </Select>
    </Filter>
  );
}
