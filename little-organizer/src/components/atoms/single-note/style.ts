import styled from "styled-components";

export const StyledSingleNote = styled.div`
.note {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 1rem;
  min-height: 250px;
  min-width: 250px;
  white-space: pre-wrap;
  background-color: #fef68a;
}

span {
  display: flex;
  align-items: flex-start;
}


.btn-div{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
}

.btn-edit {
    background-color: #e1e1e1;
    border: none;
    border-radius: 15px;
    margin: 0.5rem;
    padding: 10px 10px 10px 10px;
    :hover {
    background-color: #cd5700;
    cursor: pointer;
  }
}

.btn-delete {
    background-color: #e1e1e1;
    border: none;
    border-radius: 15px;
    margin: 0.5rem;
    padding: 10px 10px 10px 10px;
    :hover {
    background-color: #b92e34;
    cursor: pointer;
  }
}
`

export const StyledUpdateNote = styled.div`
.edit-note {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 1rem;
    min-height: 250px;
    min-width: 250px;
    max-height: 250px;
    max-width: 250px;
    background-color: #fef68a;
  }
  
  textarea {
    border: none;
    resize: none;
    outline: none;
    background-color: #fef68a;
  }
  
  .note-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  
  button{
    background-color: #e1e1e1;
    border: none;
    border-radius: 15px;
    padding: 5px 10px 5px 10px;
  :hover {
    background-color: #ededed;
    cursor: pointer;
  }
}
}
`
