import { StyledSingleNote, StyledUpdateNote } from "./style";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md"
import { Dispatch, SetStateAction, useState } from "react";
import { api } from "../../../utils/api/api";

type Props = {
    text: string;
    id: string;
    control: boolean;
    editMode: boolean;
    setEditMode: Dispatch<SetStateAction<boolean>>;
    setControl: Dispatch<SetStateAction<boolean>>;
    handleModal: () => void;
    handleUpdate: (text: string, id: string) => void;
} 

export function SingleNote({text, id, control, setControl, setEditMode, handleUpdate, handleModal, editMode}: Props){
    const [updateText, setUpdateText] = useState<string>(text)

    async function handleDelete(id: string) {
        const response = await api.deleteNote(id);
        if(response){
            setControl(!control);
            handleModal();
        }
    }

    return(
        <>
     { editMode ? (
        <StyledUpdateNote>
        <div className="edit-note">
        <textarea
          className="edit-textarea"
          placeholder="Type your change"
          onChange={(event) => setUpdateText(event.currentTarget.value)}
          defaultValue={text}
        ></textarea>
        <div className="note-footer">
          <button  onClick={() => handleUpdate(updateText, id)}>
            Update
          </button>
        </div>
      </div>
      </StyledUpdateNote>
      ) :(
        <StyledSingleNote>
            <div className="note">
      <span>{text}</span>
      </div>
      <div className="btn-div">
        <button className="btn-delete" onClick={() => {
            handleDelete(id);
        }}>
            <AiFillDelete/>
        </button>
        <button className="btn-edit" onClick={() => setEditMode(true)}>
        <MdEdit/>
        </button>
      </div>
      </StyledSingleNote>
      )}
    </>
    )
}