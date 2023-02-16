import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  button{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: rgb(200, 199, 199);
    border-radius: 100%;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    margin: 2rem;
    padding: 2rem;
    &:hover {
        background-color: grey;
        transform: scale(1.1);
    }

    img{
        height: 96px;
        width: 96px;
        margin: 1rem 1rem 0.5rem 1rem;
    }

    h2{
        font-weight: 300;
        font-size: 1rem;
    }
  }
`