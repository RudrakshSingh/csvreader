import React, { useState } from "react";
import "./Dropdown.css";
import dropIcon from "../images/dropIcon.svg";

const Dropdown = ({ onSelect, data }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleDropdown = (txt) => {
    onSelect(txt);
    setSelected(txt);
    setShowDropdown(false);
  };

  return (
    <div
      style={{
        borderBottomLeftRadius: showDropdown ? "0" : "5px",
        borderBottomRightRadius: showDropdown ? "0" : "5px",
        padding: "0",
      }}
      className={"container"}
    >
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={"dropdown"}
        // style={{padding:'0'}}
      >
        <p className={"name_txt"}>{selected || "Select Tags"}</p>
        <img alt="dropdownIcon" src={dropIcon} />
      </div>

      {showDropdown && (
        <div className={"list"}>
          {data.map((item, index) => (
            <p
              className={"list_name"}
              key={index}
              onClick={() => handleDropdown(item)}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
