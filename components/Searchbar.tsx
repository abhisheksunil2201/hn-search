import React, { ChangeEvent, useEffect, useState } from "react";
import * as _ from "lodash";
import axios from "axios";

export const Searchbar = () => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchTextChange = _.debounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    1000
  );

  useEffect(() => {
    if (searchText.trim() !== "") {
      axios
        .get(`http://hn.algolia.com/api/v1/search?query=${searchText}`)
        .then((data) => console.log(data));
    }
  }, [searchText]);

  return (
    <div className="w-10/12">
      <div className="flex items-center p-4">
        <div className="relative w-full">
          <input
            type="text"
            onChange={handleSearchTextChange}
            className="bg-background-100 border border-black text-gray-400 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
            placeholder="Search"
            required
          />
        </div>
      </div>
    </div>
  );
};
