import { useEffect, useState } from "react";

export default function ThemeToggle({ classNameStyle }) {
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
      className={`${classNameStyle} rounded-full px-2.5 py-1 text-zinc-800 ring-1 ring-zinc-800  dark:text-white dark:ring-white`}
    >
      {theme === "light" ? "Темный 🌞" : "Светлый 🌙"}
    </button>
  );
}
