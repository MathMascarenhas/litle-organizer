import styled from "styled-components"; 

export const StyledNote = styled.div`
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
`