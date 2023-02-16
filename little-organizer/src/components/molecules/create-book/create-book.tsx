import { Dispatch, SetStateAction, FormEvent, useState,} from "react";
import { api } from "../../../utils/api/api";
import { Book } from "../../../utils/types/types-request";
import { StarRate } from "../../atoms/star-rating.tsx/star-rate";
import { StyledBookForm } from "./styles";

type Props = {
    control: boolean;
    editMode: boolean;
    book: Book;
    handleModal: () => void;
    setAddBook: Dispatch<SetStateAction<boolean>>;
    setControl: Dispatch<SetStateAction<boolean>>;
};

export function AddBook({ handleModal, setControl, control, editMode, book} : Props) {
    const[rate, setRate] = useState<number>(0)
    const [newRate, setNewRate] = useState<number>(Number(book.rate));
    

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault(); 
        if(editMode === false){
            const addBookPayload: Omit<Book, "id"> = {
            title: e.currentTarget.bookTitle.value,
            author: e.currentTarget.author.value,
            description: e.currentTarget.description.value,
            price: parseFloat(e.currentTarget.price.value),
            pages: Number(e.currentTarget.pages.value),
            rate: rate,
        };
        const response = await api.createBook(addBookPayload);
        if(response) {
            setControl(!control);
            handleModal();
        }} else {
            const updateBookPayload = { 
                title: e.currentTarget.bookTitle.value,
                author: e.currentTarget.author.value,
                description: e.currentTarget.description.value,
                price: parseFloat(e.currentTarget.price.value),
                pages: Number(e.currentTarget.pages.value),
                rate: newRate,
            };
            const response = await api.updateBook(updateBookPayload, book.id);
            if(response) {
                setControl(!control);
                handleModal();
            }
            
        }
    }

   return (
   <StyledBookForm>
        <form id="book" action="book" onSubmit={handleSubmit}>
        {
            editMode ? (<h2>Edit Your Book</h2>) : (<h2>Create Your Book</h2>)
        }
        <label htmlFor="bookTitle">Title</label>
        <input  type="text" name="bookTitle" defaultValue={editMode ?book.title : ""} required></input>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" defaultValue={editMode ? book.author : ""}  required></input>
        <label htmlFor="description">Sumary</label>
        <textarea form="book" name="description" maxLength={1000} defaultValue={editMode ? book.description : ""} required></textarea>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" defaultValue={editMode ?book.price : ""} required></input>
        <label htmlFor="pages">Pages</label>
        <input type="number" name="pages" defaultValue={editMode ? book.pages : ""} required></input> 
        {editMode ? (
        <>
        <h3>Your Rate</h3>
        <StarRate setRate={setNewRate} defaultValue={book.rate}/>
        <button type="submit">Edit Book</button>
        </>
        ) : (
        <>
        <h3>Rate this Book</h3>
        <StarRate setRate={setRate} defaultValue={rate}/>
        <button type="submit">Add book</button>
        </>
        )}
        </form>    
   </StyledBookForm>
   )
}