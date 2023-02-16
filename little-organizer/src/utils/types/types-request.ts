export type SignInRequest = {
    email: string;
    password: string;
};

export type SignUpRequest = {
    name: string;
    cpf: string;
    email: string;
    password: string;
    isPremium: boolean;
}

export type Book = {
    title: string,
    description: string,
    author: string,
    pages: number,
    rate: number,
    price: number,
    id: string,
}

export type Note = {
    body: string,
    id: string,
}


  