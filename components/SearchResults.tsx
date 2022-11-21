import Link from "next/link";
import React from "react";
import { useData } from "../context/DataContext";
import { IData } from "./HomePage";

export const SearchResults = () => {
  const { data } = useData();

  if (data.length > 0) {
    return (
      <div className="search-results bg-background-100 border border-black text-white text-md rounded-lg block w-full p-4 h-full overflow-y-scroll">
        {data.map((result: IData) => (
          <div
            className="px-1 py-3 border-b border-gray-700"
            key={result.objectID}
          >
            <Link href={`/post-detail/${result.objectID}`}>
              <p>{result.title}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="search-results bg-background-100 border border-black text-gray-500 text-md rounded-lg block w-full p-10 h-fit">
        <p>No results</p>
      </div>
    );
  }
};
