import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchBox = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    router.push(`/post/${searchText}`);
  };
  return (
    <div className="search bg-blue-500 p-5 rounded-md ">
      <h3 className=" font-bold text-white italic text-xl ">Search Post</h3>
      <form action="/post" method="get" onSubmit={onSearch}>
        <div className="form_group">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form_label border-2 rounded-lg w-full p-2 "
            placeholder="
            Place your search!"
          />
        </div>
        <button
          type="submit"
          className=" bg-blue-400 text-center text-white font-bold w-full my-1.5 py-2 text rounded-sm hover:bg-blue-900 "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
