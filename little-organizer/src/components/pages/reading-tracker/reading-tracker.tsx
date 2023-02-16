import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { Book } from "../../../utils/types/types-request";
import { StyledBook, StyledReadingTracker } from "./styles";
import { IoSearchOutline, IoAddSharp } from "react-icons/io5";
import Modal from "react-modal";
import { BookInfo } from "../../atoms/book/book"; 
import { AddBook } from "../../molecules/create-book/create-book";
import { filterBooks } from "./utils/filter-books";
import { Select } from "../../atoms/select-filter/select-filter";
import {BsFilter} from "react-icons/bs"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "none",
  },
};

export function ReadingTracker() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [booklist, setBooklist] = useState<Book[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filter, setFilter] = useState<string>("default");
  const [uniqueBook, setUniqueBook] = useState<Book>({} as Book);
  const [addBook, setAddBook] = useState<boolean>(false);
  const [control, setControl] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
    if(addBook){
      setAddBook(false);
    }
    if(editMode){
      setEditMode(false)
    }
  };

  async function getAll() {
    const allBooks = await api.getBooks();
    if (searchText !== "") {
      const filtered = allBooks.filter((book: Book) =>
        book.title.includes(searchText)
      );
      setBooklist(filtered);
      return;
    }
    if(filter !== ""){
      const filtered = filterBooks(allBooks, filter);
      setBooklist(filtered)
    }
    setBooklist(allBooks);
  }

  useEffect(() => {
    getAll();
  }, [control]);

  return (
    <>
    <StyledReadingTracker>
              <div className="div-border">
                <div className="header">
                  <h1>Your shelf</h1>
                  <div className="search">
                    <input
                      type="text"
                      name="search"
                      placeholder="What are you looking for?"
                      onChange={(event) => {
                        setSearchText(event.currentTarget.value);
                        setControl(!control);
                      }}
                    />
                    <IoSearchOutline size={"18px"} />
                  </div>
                  <div className="filter">
                  <BsFilter/>
                  <Select selectedOption={setFilter} control={control} setControl={setControl}/>
                  </div>
                  <button onClick={() => {
                     handleModal();
                     setAddBook(true);
                    }}>
                    <h2>Add Book</h2>
                    <IoAddSharp size={"20px"} />
                  </button>
                </div>
                <section className="books">
                  {
                  booklist.map((book, index) => {
                    return (
                      <StyledBook
                        key={index}
                        className="book"
                        onClick={() => {
                          setUniqueBook(book);
                          handleModal();
                        }}
                      >
                        <div className="book-info">
                          <h2>{book.title} -</h2>
                          <h3>{book.author}</h3>
                        </div>
                        <span>Pages{`(${book.pages})`}</span>
                        <span>
                          <img src="./../../../icons/star.png" alt="star icon" />
                          {`${book.rate}`}
                        </span>
                      </StyledBook>
                    );
                  })}
                </section>
              </div>
            </StyledReadingTracker>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="form"
      >
      {
        addBook ?
        (
          <AddBook  handleModal={handleModal} setAddBook={setAddBook} setControl={setControl} control={control} book={uniqueBook} editMode={editMode}/>
        ) : (<BookInfo
          setEdit={setEditMode}
          handleModal={handleModal}
          id={uniqueBook.id}
          pages={uniqueBook.pages}
          rate={uniqueBook.rate}
          price={uniqueBook.price}
          bookTitle={uniqueBook.title}
          description={uniqueBook.description}
          author={uniqueBook.author}
          setAddBook={setAddBook}
        />) }
      </Modal>
    </>
  );
}
