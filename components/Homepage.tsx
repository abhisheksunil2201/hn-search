import Image from "next/image";
import React from "react";
import { Searchbar } from "./Searchbar";
import { SearchResults } from "./SearchResults";
import logo from "./logo.png";

export interface IData {
  objectID: string;
  title: string;
  author: string;
}

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center h-full bg-background-200 px-60">
      <Image className="p-10" src={logo} width="500" alt="" />
      <Searchbar />
      <SearchResults />
    </div>
  );
};
