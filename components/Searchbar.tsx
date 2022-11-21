import React, { ChangeEvent, useEffect, useState } from "react";
import * as _ from "lodash";
import axios from "axios";
import { IData } from "./Homepage";
import { useData } from "../context/DataContext";

export const Searchbar = () => {
  const { setData } = useData();
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchTextChange = _.debounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    500
  );

  useEffect(() => {
    if (searchText.trim() !== "") {
      axios
        .get(`http://hn.algolia.com/api/v1/search?query=${searchText}`)
        .then((data) => setData(data.data.hits as IData[]))
        .catch((err) => console.log(err));
    } else {
      setData([]);
    }
  }, [searchText, setData]);

  return (
    <div className="w-full py-4 text-white">
      <p className="text-xl py-4">Search for any article from Hacker News</p>
      <div className="flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            onChange={handleSearchTextChange}
            className="bg-background-100 border border-black text-gray-400 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search"
            required
          />
        </div>
      </div>
    </div>
  );
};
