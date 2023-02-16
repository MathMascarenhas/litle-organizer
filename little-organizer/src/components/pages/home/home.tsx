import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { StyledHome } from "./style";

export function Home() {
    const navigate = useNavigate()

    return (
        <StyledHome>
            <button onClick={() => navigate("/reading-tracker")}>
                <img src="./icons/open-book.png" alt="book icon" />
                <h2>Reading Tracker</h2>
            </button>
            <button onClick={() => Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "This page is not available",
  })}>
                <img src="./icons/tasks.png" alt="task icon" />
                <h2>Tasks</h2>
            </button>
            <button onClick={() => navigate("/notes")}>
                <img src="./icons/sticky-note.png" alt="note icon" />
                <h2>Notes</h2>
            </button>
        </StyledHome>
    )
}