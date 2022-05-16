import React from "react";
import Search from "./Search";

function Header({searchTerm}) {
  function handleSearch(search){
    console.log(search);
    searchTerm(search)
  }
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={handleSearch}/>
    </header>
  );
}

export default Header;
