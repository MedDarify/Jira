import { SignInData } from "@/interface/authentication.interface";
import { SignUpData } from "@/interface/signUp.interface";

export class AuthenticationService {

    async SignIn(data: SignInData): Promise<{ token: string }> {
        const response = await fetch(
            "http://localhost:3001/api/Manager/SignIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to sign in");
        }

        return response.json();
    }

    async SignUp(data: SignUpData): Promise<{ message: string }> {
        const response = await fetch(
            "http://localhost:3001/api/authentication/CreateManager", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to sign up");
        }

        return response.json();
    }
}