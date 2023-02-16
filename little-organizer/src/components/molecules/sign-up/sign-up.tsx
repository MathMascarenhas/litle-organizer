import { StyledSignUp } from "./styles";
import { Dispatch, FormEvent, SetStateAction} from "react";
import { api } from "../../../utils/api/api";

interface SignUpProps {
    changeForm: Dispatch<SetStateAction<boolean>>
}
export function SignUpForm( {changeForm} : SignUpProps) {

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();        
        const signUpPayload = {
            name: e.currentTarget.username.value,
            cpf: e.currentTarget.cpf.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            isPremium: true,
        };
        const user = await api.createUser(signUpPayload);
        if(user){
           changeForm(true);
        }
    }

    return (
        <StyledSignUp>
        <fieldset>
            <legend>Sign Up</legend>
            <form action="sign-in" onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input type="text" name="username" required/>
                <label htmlFor="cpf">CPF</label>
                <input type="text" name="cpf" required/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"required minLength={6}/>
                <button type="submit">Next</button>
            </form>
        </fieldset>
        </StyledSignUp>
    );
}