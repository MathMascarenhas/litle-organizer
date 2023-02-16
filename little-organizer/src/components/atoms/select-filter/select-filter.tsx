import { Dispatch, SetStateAction } from "react";

type SelectProps = {
    selectedOption: Dispatch<SetStateAction<string>>; 
    setControl: Dispatch<SetStateAction<boolean>>; 
    control: boolean;
}

export function Select({selectedOption, setControl, control}: SelectProps) {
    return (
    <select
        defaultValue={"default"}
        onChange={(e) => {
            selectedOption(e.currentTarget.value);
            setControl(!control);
        }}
    >
        <option value="default"  disabled>
            filter
      </option>
      <option value="more_pages">
        more pages
      </option>
      <option  value="fewer_pages">
        fewer pages
      </option>
      <option  value="rate">
        rate
      </option>
    </select>
    );    
}
