import styled from "styled-components"; 

export const StyledBook = styled.div`
width: 50vw;
height: 60vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 0.2rem;

h1{
 font-size: 1.8rem;
 width: 100%;
}

h2 {
    font-size: 1.5rem; 
    margin-bottom: 2rem;
    color: #818589;
    width: 100%;
}

h3 {
    font-size: 1rem; 
    text-align: justify;
}

.info-footer{
    margin: 1rem 0  1rem 0;
    display: flex;
    width: 100%;
    justify-content: space-between; 
    
    h4 {
    font-size: 1.5rem;
}
span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border: 1rem;
    
    img{
        width: 24px;
        margin-right: 8px;
    }
}
}

.div-btn{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;

    .delete-btn{
    width: 45%;
    cursor: pointer
    padding: 1rem;
    font-size: 2rem;
    border: 1px solid black;
    font-weight: 100;
    background-color: transparent;
    &:hover{
        border: 1px solid red;
        color: red;
    }
   }

 .edit-btn{
    width: 45%;
    cursor: pointer
    padding: 1rem;
    font-size: 2rem;
    border: 1px solid black;
    font-weight: 100;
    background-color: transparent;
    &:hover{
        border: 1px solid orange;
        color: orange;
    }
   }
}
`
