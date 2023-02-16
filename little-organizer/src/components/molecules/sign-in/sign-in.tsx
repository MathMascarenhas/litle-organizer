import { StyledSignIn } from "./styles";
import { FormEvent} from "react";
import { api } from "../../../utils/api/api";
import { useNavigate } from "react-router-dom";

export function SignInForm() {
    const navigate = useNavigate();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const signInPayload = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        };
        const response = await api.signIn(signInPayload)
        if(response) {
            navigate("/home");
        }
    }

    return (
        <StyledSignIn>
        <fieldset>
            <legend>Sign In</legend>
            <form action="sign-in" onSubmit={handleSubmit}
            >
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
                <button type="submit">Next</button>
            </form>
        </fieldset>
        </StyledSignIn>
    );
}