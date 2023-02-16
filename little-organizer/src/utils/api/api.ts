import axios from "axios";
import { HandleError } from "../errors/handle-error-modal";
import { Book, Note, SignInRequest, SignUpRequest } from "../types/types-request";

axios.defaults.baseURL = "https://book-tracker-production.up.railway.app";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: "Bearer " + token,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response.status === 401) {
      if (localStorage.getItem("token")) localStorage.removeItem("token");
    }
    throw new Error(error.response.data.message);
  }
);

export const api = {
  signIn: async ({ email, password }: SignInRequest) => {
    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message});
    }
  },

  createUser: async (payload: SignUpRequest) => {
    try {
      const response = await axios.post("/user", payload);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  getBooks: async () => {
    try {
      const response = await axios.get("/book");
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
 }, 
 createBook: async (book: Omit<Book, "id">) => {
  try {
    const response = await axios.post("/book", book);
    return response.data;
  } catch (err: any) {
    HandleError({ message: err.message });
  }
},
updateBook: async (book: Omit<Book, "id">, id: string) => {
  try {
    const response = await axios.patch(`/book/${id}`, book)
    return response.data;
  } catch (err: any) {
    HandleError({ message: err.message });
  }
},
 deleteBook: async (id: string) => {
  try {
    const response = await axios.delete(`/book/${id}`);
    return response.data;
  } catch (err: any) {
    HandleError({ message: err.message });
  }
},
 getNotes: async () => {
  try {
    const response = await axios.get("/notes");
    return response.data;
  } catch (err: any) {
    HandleError({ message: err.message });
  }
}, 
createNote: async (note: Omit<Note,"id">) => {
try {
  const response = await axios.post("/notes", note);
  return response.data;
} catch (err: any) {
  HandleError({ message: err.message });
}
},
updateNote: async (note: Note) => {
try {
  const response = await axios.patch(`/notes/`, note)
  return response.data;
} catch (err: any) {
  HandleError({ message: err.message });
}
},
deleteNote: async (id: string) => {
try {
  const response = await axios.delete(`/notes/${id}`);
  return response.data;
} catch (err: any) {
  HandleError({ message: err.message });
}
},
}
