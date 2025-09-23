import SignInCard from "@/app/features/sign-in-card";


function SignIn() {
    return (
        <div className="w-full flex items-center justify-center p-4 dark:bg-black ">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold 
                    tracking-tight text-foreground">
                        Welcome Back
                    </h1>
                    <p 
                    className="text-muted-foreground text-sm font-semibold md:text-base">
                        Sign in to your account to continue
                    </p>
                </div>
                <SignInCard />
            </div>
        </div>
    )
}

export default SignIn
