import SignUpCard from "@/app/features/sign-up-card"

function SignUp() {
  return (
    <div className=" w-full flex flex-col items-center p-2 justify-center dark:bg-black ">
      <div className="w-full max-w-md  space-y-1">
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Join Us Today</h1>
          {/* <p className="text-muted-foreground">Create your account to get started</p> */}
        </div>
        <SignUpCard />
      </div>
    </div>
  )
}

export default SignUp
