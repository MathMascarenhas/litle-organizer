import styled from "styled-components";

export const StyledLandPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 7vh;
    margin-top: 13rem;
  }
`;

export const StyledDivButton = styled.div`
  display: flex;
  margin-top: 10rem;
  align-items: center;
  justify-content: center;
  width: 50%;

  button{
    background-color: #0D0D0D;
    color: white;
    border-radius: 12px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem 0.5rem 1rem;
    border: none;
    font-size: 1.5rem;
    margin: 1.5rem;
    font-weight: 200;
    cursor: pointer;
    &:hover {
        color: #0D0D0D;
        background-color: white;
        border:  1px solid #0D0D0D;
        transform: translateY(-5px);
        box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
    }
  }
`;
