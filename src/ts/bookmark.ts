   

import type { IBookmark } from "@/types/global"

    import { getCookie, setCookie } from "@/utils/cookie"
import { navigate } from "astro:transitions/client"

    document.addEventListener("DOMContentLoaded", () => {
      const url = new URL(window.location.href);
      const hasBookmarkPage = url.pathname.includes("bookmarks");
      const bookmarkButtons = document.querySelectorAll("[data-bookmark]");

      function parseBookmarks(bookmarks: string) {
        return JSON.parse(bookmarks) as IBookmark[];
      }

      function stringifyBookmarks(bookmarks: IBookmark[]) {
        return JSON.stringify(bookmarks);
      }

      Array.from(bookmarkButtons).forEach((button) =>
        button.addEventListener("click", (e) => {
          const targetElement = e.currentTarget as HTMLButtonElement;
          const id = targetElement.dataset.value as string;

          let bookmarks = getCookie("bookmarks") || "[]";

          const parsedBookmarks = parseBookmarks(bookmarks);
          const bookmarkExists = parsedBookmarks.find((item) => item.id === id);

          const bookmark = {
            id,
            date: new Date().toUTCString(),
          };

          targetElement.dataset.checked = bookmarkExists ? "false" : "true";

          const updatedBookmarks = bookmarkExists
            ? parsedBookmarks.filter((item) => item.id !== id)
            : [...parsedBookmarks, bookmark];

          setCookie("bookmarks", stringifyBookmarks(updatedBookmarks));

          if (hasBookmarkPage && bookmarkExists) {
            navigate("/bookmarks");
          }
        }),
      );
    });
