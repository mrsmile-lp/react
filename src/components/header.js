import React from "react";
import ReactDOM from "react-dom";
import SearchPanel from "./searchPanel";
import GeneralTitle from "./generalTitle";

function Header() {
  return (
    <div className="header">
      <GeneralTitle />
      <SearchPanel />
    </div>
  );
}

export default Header;