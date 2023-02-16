import styled from "styled-components"; 

export const StyledBookForm = styled.div`
 form{
    display: flex;
    flex-direction: column;
    min-width: 200px;
    justify-content: center;
    align-items: center;

     h2{
        font-size: 2rem;
    }

    label{
        font-size: 1.4rem;
        margin-top: 1rem;
    }

    input{
        outline: none;
        background-color: rgb(200, 199, 199);
        box-shadow: inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
        margin-top: 0.2rem;
        border: none;
        padding: 0.4rem;
        border-radius: 2px;
        width: 80%;
        ::placeholder {
            color: black;
        }
    }

    textarea{
        outline: none;
        background-color: rgb(200, 199, 199);
        box-shadow: inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
        margin-top: 0.2rem;
        border: none;
        padding: 0.4rem;
        border-radius: 2px;
        width: 80%;
        ::placeholder {
            color: black;
        }
    }

    h3{
     margin: 1.5rem 0 0.5rem 0;
    }
    
    button{
        margin-top: 1rem;
        background-color: #0D0D0D;
        color: white;
        border-radius: 2px;
        padding: 0.4rem;
        border: none;
        font-size: 0.8rem;
        font-weight: 300;
        cursor: pointer;
        width: 80%;
        &:hover {
            color: #0D0D0D;
            background-color: white;
            border:  1px solid #0D0D0D;
        }
    }
 }
`