/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
import { AuthenticationService } from "@/service/authentication.service";
import { revalidatePath } from "next/cache";
import z from "zod";

const FormSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must have more than 8 characters"),
});

async function signUpAction(values: z.infer<typeof FormSchema>) {
    
    try {
        const authService = new AuthenticationService();
        const result = await authService.SignUp(values);
        revalidatePath("/"); 
        return { success: true, data: result };
    } catch (error) {
        const err = error as Error;
        return { success: false, error: err.message ?? "Failed to sign up" };
    }
}

export default signUpAction;