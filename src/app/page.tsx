import {ThemeSwitcher} from "../components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center 
      min-h-screen  text-black dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Next.js Dark Mode Example 🌙☀️</h1>
      {/* <ThemeSwitcher /> */}
    </main>
  );
}
