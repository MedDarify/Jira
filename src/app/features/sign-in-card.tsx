"use client"

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { useState } from "react"

const FormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(1, "Password is required").min(8, "Password must have more than 8 characters"),
})

function SignInCard() {
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        console.log("Sign in data:", values)
    }

    return (
        <Card
            className="w-full  shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader
                className="space-y-1 text-center pb-4">
                <CardTitle
                    className="text-xl font-semibold">
                    Sign In
                </CardTitle>
                <CardDescription
                    className="text-sm text-muted-foreground">
                    Enter your credentials to access your account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel
                                        className="text-sm font-medium text-foreground">Email Address</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                            <Input
                                                className="pl-10 h-11 bg-background border-input focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all duration-200"
                                                placeholder="Enter your email"
                                                type="email"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel className="text-sm font-medium text-foreground">Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter your password"
                                                className="pl-10 pr-10 h-11 bg-background border-input focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all duration-200"
                                                {...field}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />

                        <div className="flex items-center justify-end">
                            {/* <Link 
                                href="/forgot-password" 
                                className="text-xs text-primary hover:text-primary/80 transition-colors">
                                Forgot password?
                            </Link> */}
                        </div>

                        <Button
                            className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground 
                            font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </form>
                </Form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link
                            className="text-primary hover:text-primary/80 font-medium transition-colors"
                            href="/authentication/sign-up"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

export default SignInCard
