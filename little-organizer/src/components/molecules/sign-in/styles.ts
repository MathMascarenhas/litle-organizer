import styled from "styled-components";

export const StyledSignIn = styled.div`
 legend{
    text-align: center;
    font-size: 1.5rem;
 }

 form {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    label{
        margin: 1rem 0 0.2rem 0;
        font-weight: 300;
    }

    input {
        outline: none;
        background-color: #DCDCDC;
        border: none;
        padding: 0.4rem;
        border-radius: 2px;
        box-shadow: inset 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    }

    button{
        background-color: #0D0D0D;
        color: white;
        border-radius: 2px;
        padding: 0.4rem;
        border: none;
        font-size: 0.5rem;
        margin-top: 1.5rem;
        font-weight: 300;
        cursor: pointer;
        &:hover {
            color: #0D0D0D;
            background-color: white;
            border:  1px solid #0D0D0D;
        }
      }
 }
`
