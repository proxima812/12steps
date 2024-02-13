import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-blue-50 px-3.5 py-1.5 font-medium text-blue-400 ring-1 ring-inset ring-blue-300 dark:bg-blue-950 dark:text-blue-100 dark:ring-blue-600"
    >
      {theme === "light" ? "Светлая 🌙" : "Темная 🌞"}
    </button>
  );
}
