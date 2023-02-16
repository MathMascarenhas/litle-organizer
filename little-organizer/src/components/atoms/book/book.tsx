import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { api } from "../../../utils/api/api";
import { StyledBook } from "./style";

type Props = {
  bookTitle: string;
  author: string;
  description: string;
  price: number;
  rate: number;
  pages: number;
  id: string;
  handleModal: () => void;
  setEdit:Dispatch<SetStateAction<boolean>>;
  setAddBook: Dispatch<SetStateAction<boolean>>;
};

export function BookInfo({
  bookTitle,
  description,
  author,
  price,
  rate,
  pages,
  id,
  handleModal,
  setEdit,
  setAddBook,
}: Props) {

  return (
    <div>

    
    <StyledBook>

      <h1>{bookTitle}</h1>
     <h2>{author}</h2>
     <h3>{description}</h3>
      <div className="info-footer">
      <h4>Price: {price}</h4>
      <h4>Pages: {pages}</h4>
        <span>
          <img src="./../../../icons/star.png" alt="star icon" />
          {`${rate}`}
        </span>
      </div>
      <div className="div-btn">
        <button className="edit-btn" onClick={() => {
          setAddBook(true);
          setEdit(true);
        }
      }>
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            api.deleteBook(id);
            handleModal();
          }}
        >
          Delete
        </button>
      </div>
    </StyledBook>
    </div>
  );
}
