import { useState } from "react";
import Modal from "react-modal";
import { SignInForm } from "../../molecules/sign-in/sign-in";
import { SignUpForm } from "../../molecules/sign-up/sign-up";
import { StyledDivButton, StyledLandPage } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export function LandPage() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <StyledLandPage>
      <h1>My_Organizer</h1>
      <StyledDivButton>
        <button
          onClick={() => {
            setModalIsOpen(!modalIsOpen);
            setIsSignIn(true);
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => {
            setModalIsOpen(!modalIsOpen);
            setIsSignIn(false);
          }}
        >
          Sign Up
        </button>
      </StyledDivButton>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="form"
      >
        {
            isSignIn ? <SignInForm/> : <SignUpForm changeForm={setIsSignIn}/>  
        }
      </Modal>
    </StyledLandPage>
  );
}
