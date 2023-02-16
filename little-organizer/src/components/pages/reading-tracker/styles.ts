import styled from "styled-components";

export const StyledReadingTracker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
   
  .div-border{
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    border: 1px solid;
    overflow: scroll;
    overflow-x:hidden;
}

.header{
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1rem;
 width: 100%

 h1{

 }

 .search {
    display: flex;
    width: 50%;
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

 .filter{
    display: flex;
    justifiy-content: center;
    
    select {
        appearance: none;
        background-color: transparent;
        border: none;
        padding: 0 1em 0 0;
        margin-left: 0.5rem;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        cursor: pointer;
        line-height: inherit;
        z-index: 1;
        &::-ms-expand {
          display: none;
        }
        outline: none;
    }
    
 }


 button{
    display: flex;
    justify-content: space-between;
    border-radius: 16px;
    padding: 0.4rem;
    background-color: transparent;
    cursor: pointer;
    border: none;
    &:hover{
        transform: scale(1.1);
        transition: 0.01s ease-in-out;
    }

    h2{
        font-weight: 300;
        margin-right: 0.2rem;
    }
  }
 }
}
`

export const StyledBook= styled.button`
width: 100%;
display: flex;
background-color: transparent;
border: none;
justify-content: space-between;
align-items: center;
padding: 1rem;
cursor: pointer;
&:nth-child(odd){
 background-color: #D3D3D3;
}

.book-info{
    display: flex;
    align-items:center; 
    width: 70%;


    h2 {
        font-weight:200;
        font-size: 2rem;
    }
    
    h3 {
        padding-left: 1rem;
        font-weight:100;
        font-size: 1.5rem;
    }
}

span {
display: flex;
justify-content: flex-start;
align-items: center;
font-size: 1rem;
border: 1rem;
width: 8%;

img{
    width: 16px;
    margin-right: 8px;
}
}
`