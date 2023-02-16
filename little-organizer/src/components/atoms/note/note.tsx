import { Dispatch, SetStateAction } from "react";
import { StyledNote } from "./style";

type Props = {
    text: string;
} 

export function OneNote({text}: Props){
    return(
        <StyledNote>
      <div className="note">
      <span>{text}</span>
      </div>
        </StyledNote>
    )
}