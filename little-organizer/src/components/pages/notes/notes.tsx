import { FormEvent, TextareaHTMLAttributes, useEffect, useState } from "react";
import { Note } from "../../../utils/types/types-request";
import { StyledAddNote, StyledNotes, StyledNotesList } from "./styles";
import { IoSearchOutline } from "react-icons/io5";
import { api } from "../../../utils/api/api";
import { OneNote } from "../../atoms/note/note";
import Modal from "react-modal";
import { SingleNote } from "../../atoms/single-note/single-note";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
    },
  };

export function Notes() {
  const [noteList, setNoteList] = useState<Note[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [singleNote, setSingleNote] = useState<Note>({} as Note);
  const [control, setControl] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [noteText, setNoteText] = useState<string>(""); 
  const characterLimit = 300; 

  const handleModal = () => {
    if (editMode) {
      setEditMode(false);
    }
    setModalIsOpen(!modalIsOpen);
  };

  async function getAll() {
    const notes = await api.getNotes();
    if (searchText !== "") {
      const noteList = notes.filter((note: Note) =>
        note.body.includes(searchText)
      );
      setNoteList(noteList);
      return
    }
    setNoteList(notes)
    return
  }
  async function handleCreate(noteText:string) {
    const note = {body: noteText}
    const response = await api.createNote(note);
    if(response) {
        setControl(!control);
    }
  };

  async function handleUpdate(noteText:string, id: string){
    const updatePayload = {
       body: noteText,
       id: id
    };
    const response = await api.updateNote(updatePayload)
    if (response){
    setControl(!control)
    handleModal()
  }
  }

  

  useEffect(() => {
    getAll();
  }, [control]);

  return (
    <>
    <StyledNotes>
      <div className="header">
        <h1>Your Notes</h1>
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="What are you looking for?"
            onChange={(event) => {
              setSearchText(event.currentTarget.value);
              setControl(!control)
            }}
          />
          <IoSearchOutline size={"18px"} />
        </div>
      </div>
      <StyledNotesList>
        {noteList.map((note) => {
          return (
        <button  className="note" onClick={() => {
            setSingleNote(note);
            handleModal();
        }}>
          <OneNote text={note.body} />
        </button>
          )
        })}

        <StyledAddNote>
        <div className="newNote">
          <textarea
            placeholder="Type to add a note..."
            name="body"
            onChange={(event) => {
                setNoteText(event.currentTarget.value);
            }}
            value={noteText}
            maxLength={300}
          ></textarea>
          <div className="note-footer">
            <span>{characterLimit - noteText.length}/300 Characters</span>
            <button className="btn-save" onClick={() => handleCreate(noteText)}>
              Save
            </button>
          </div>
        </div>
        </StyledAddNote>
      </StyledNotesList>
    </StyledNotes>
    <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card information"
    >
          <SingleNote editMode={editMode} text={singleNote.body} id={singleNote.id} handleModal={handleModal} setEditMode={setEditMode} control={control} setControl={setControl} handleUpdate={handleUpdate}/>
    </Modal>
    </>
  );
}
