import Fuse from "fuse.js";
import { useState } from "react";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ["data.title", "data.description", "data.slug"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ postsList }) {
  // User's input
  const [query, setQuery] = useState("");

  const fuse = new Fuse(postsList, options);

  // Set a limit to the posts: 5
  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 6);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <>
      <div className="absolute -top-[24px] z-20 w-full">
        <input
          className="w-full rounded-full px-5 py-3 ring-1 ring-indigo-100"
          role="search"
          type="text"
          value={query}
          onChange={handleOnSearch}
          placeholder="Три способа работы по 12 шагам..."
        />

        {posts && posts.length > 0 && (
          <ul className="absolute top-[50px] z-10 w-full rounded-xl bg-white/80 p-3 ring-1 ring-gray-200 backdrop-blur-md">
            {query.length > 1 && (
              <p className="text-gray-600">
                Найдено <b>{posts.length}</b>{" "}
                {posts.length === 1 ? "результат" : "результатов"}
                для
                <b> "{query}"</b>
              </p>
            )}

            <div className="mt-2 flex flex-col gap-3">
              {posts.map((post) => (
                <li className="rounded-lg bg-gray-50 p-2 ring-1 ring-gray-100 transition-colors duration-75 ease-linear hover:bg-gray-100">
                  <a href={`/posts/${post.slug}`}>
                    <h4 className="font-bold">&#10149; {post.data.title}</h4>
                    {post.data.description && (
                      <p className="text-sm text-gray-600">
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
