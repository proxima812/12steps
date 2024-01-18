import Fuse from "fuse.js";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function LoopIcon() {
  return (
    <>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.1998 3.60001C6.24503 3.60001 5.32935 3.97929 4.65422 4.65442C3.97909 5.32955 3.5998 6.24523 3.5998 7.20001C3.5998 8.15479 3.97909 9.07046 4.65422 9.74559C5.32935 10.4207 6.24503 10.8 7.1998 10.8C8.15458 10.8 9.07026 10.4207 9.74539 9.74559C10.4205 9.07046 10.7998 8.15479 10.7998 7.20001C10.7998 6.24523 10.4205 5.32955 9.74539 4.65442C9.07026 3.97929 8.15458 3.60001 7.1998 3.60001ZM1.7998 7.20001C1.7997 6.35014 2.00018 5.51225 2.38496 4.75447C2.76974 3.9967 3.32794 3.34044 4.01416 2.83908C4.70039 2.33771 5.49526 2.0054 6.33414 1.86916C7.17301 1.73291 8.0322 1.7966 8.84182 2.05502C9.65145 2.31345 10.3886 2.75932 10.9935 3.35637C11.5983 3.95343 12.0536 4.68481 12.3225 5.49103C12.5913 6.29724 12.6661 7.15554 12.5407 7.9961C12.4153 8.83667 12.0933 9.63577 11.6008 10.3284L15.9361 14.6637C16.1 14.8334 16.1908 15.0608 16.1887 15.2968C16.1867 15.5327 16.092 15.7585 15.9251 15.9253C15.7583 16.0922 15.5325 16.1869 15.2966 16.1889C15.0606 16.191 14.8332 16.1002 14.6635 15.9363L10.3291 11.6019C9.52123 12.1764 8.57082 12.5174 7.58201 12.5875C6.59321 12.6577 5.60417 12.4543 4.72327 11.9997C3.84238 11.5451 3.10362 10.8567 2.58796 10.0101C2.07229 9.16351 1.79961 8.1913 1.7998 7.20001V7.20001Z"
          fill="white"
        />
      </svg>
    </>
  );
}

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ["data.title", "data.description", "data.slug", "data.tags"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({
  postsList,
  classNameMainDiv,
  classNameIcon,
  classNameSearch,
  placeHolder,
}) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(""); // State for selected radio button
  const fuse = new Fuse(postsList, options);

  // Modify this part to filter by the selected tag
  const filteredPosts = selectedTag
    ? postsList.filter((post) => post.data.tags.includes(selectedTag))
    : postsList;

  // Perform the search on the filtered posts
  const posts = fuse
    .search(query, { list: filteredPosts })
    .map((result) => result.item)
    .slice(0, 6);

  function handleOnSearch({ target }) {
    setQuery(target.value);
  }

  return (
    <>
      <div
        className={twMerge("relative w-full max-w-[556px]", classNameMainDiv)}
      >
        <div className="relative">
          <span
            className={twMerge(
              "absolute left-0 top-0 flex h-[48px] w-[48px] items-center justify-center rounded-lg bg-zinc-800",
              classNameIcon,
            )}
          >
            <LoopIcon />
          </span>
          <input
            aria-label="Поле поиска"
            className={twMerge(
              "h-[48px] w-full rounded-lg bg-zinc-900 py-3 pl-[62px] pr-5 focus:outline-none",
              classNameSearch,
            )}
            role="search"
            type="text"
            value={query}
            onChange={handleOnSearch}
            placeholder="Изучение традиций"
          />
        </div>

        {posts && posts.length > 0 && (
          <ul className="absolute top-[48px] z-50 w-full rounded-xl bg-black/80 p-3 backdrop-blur-md">
            {query.length > 1 && (
              <p className="text-gray-300">
                Найдено <b>{posts.length}</b>{" "}
                {posts.length === 1 ? "результат" : "результатов"}
                для
                <b> "{query}"</b>
              </p>
            )}

            <div className="mt-4 flex flex-col gap-4">
              {posts.map((post) => (
                <li
                  className="rounded-lg bg-zinc-900 p-2 ring-1 ring-white/10  transition-colors duration-75 ease-linear hover:bg-zinc-950"
                  key={post.slug}
                >
                  <a href={`/posts/${post.slug}`}>
                    <h4 className="font-bold">{post.data.title}</h4>
                    {post.data.description && (
                      <p className="text-sm text-gray-400">
                        {post.data.description}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>
    </>
  );
}

export default Search;
