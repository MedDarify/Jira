'use client'
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout(
    { children }: { children: React.ReactNode }) {
    const pathname = usePathname();
        return (
        <main className="bg-neutral-100 min-h-screen dark:bg-black">
            <div className="mx-auto max-w-screen-2xl p-4 ">
                <nav className="flex justify-between items-center">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={85}
                        height={85}
                    />
                    <Button
                        asChild
                        variant={"secondary"}
                        className="rounded-sm relative right-9 -top-1.5 font-bold bg-white dark:text-black  dark:hover:text-white">
                        <Link href={pathname === "/authentication/sign-in" ? "/authentication/sign-up" : "/authentication/sign-in"}>
                            {pathname === "/authentication/sign-in" ?  "Sign Up" : "Login" }
                        </Link>
                    </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:">
                    {children}
                </div>
            </div>
        </main >
    )
}