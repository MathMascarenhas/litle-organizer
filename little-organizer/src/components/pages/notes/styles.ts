import styled from "styled-components";

export const StyledNotes = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100%;

.header{
    display: flex;
    justify-content: flex-start;
    margin-left: 2rem;
    align-items: center;
    margin-top: 2rem;
    padding: 1rem;
    width: 100%;
   
    h1{
        margin-left: 3rem;
        margin-right: 6rem;
    }
   
    .search {
       display: flex;
       width: 40%;
       justify-content: space-between;
       align-items: center;
       background-color: rgb(200, 199, 199);
       padding: 0.5rem;
       border-radius: 16px;
       box-shadow: inset 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
       input {
           background-color: transparent;
           border: none;
           color: black;
           width: 80%;
           ::placeholder {
           color: black;
         }
       }
    }
}
`

export const StyledNotesList = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
padding-left: 3.25rem;
padding-right: 3.25rem;

button{
    border: none;
    background-color: transparent;
    margin: 0.5rem;
    cursor: pointer;
    :hover {
        transform: scale(1.05);
    }
}
`

export const StyledAddNote = styled.div`
.newNote {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 1rem;
    min-height: 250px;
    min-width: 250px;
    max-height: 250px;
    max-width: 250px;
    background-color: palegreen;
  }
  
  textarea {
    border: none;
    resize: none;
    outline: none;
    background-color: palegreen;
  }
  
  .note-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .btn-save {
    background-color: #e1e1e1;
    border: none;
    border-radius: 15px;
    padding: 5px 10px 5px 10px;
  }
  
  .btn-save:hover {
    background-color: #ededed;
    cursor: pointer;
  }
}
`