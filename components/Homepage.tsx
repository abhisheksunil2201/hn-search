import React from "react";
import { Searchbar } from "./Searchbar";
import { SearchResults } from "./SearchResults";

export interface IData {
  objectID: string;
  title: string;
  author: string;
}

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center h-full bg-background-200 px-60">
      <Searchbar />
      <SearchResults />
    </div>
  );
};
