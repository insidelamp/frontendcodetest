import React, { useState, use } from "react";
import "../css/search.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function search({ selectState, setSelectState, setUserSearch }) {
  const [writeText, setWriteText] = useState("");
  const selectBoxOption = [
    { value: "전체", id: 1 },
    { value: "상품명", id: 2 },
    { value: "브랜드", id: 3 },
    { value: "상품내용", id: 4 },
  ];
  const [isOpen, setIsOpen] = useState(false);
  function clickFunc() {
    setIsOpen(!isOpen);
  }
  const selectOption = (value) => {
    setSelectState(value);
  };
  const searchFunc = (e) => {
    setWriteText(e.target.value);
  };
  const clickBtn = () => {
    if (writeText !== "") {
      setUserSearch(writeText);
    }
  };
  return (
    <div className="searchWrapper">
      <div className="searchTitle">상품검색</div>
      <div className="searchContentsSpace">
        <div className="searchContents">검색</div>
        <div className="searchSelectBox" value={selectBoxOption}>
          {isOpen ? (
            <div className="selectBox" onClick={clickFunc}>
              <ul className="selectUlOn">
                {selectBoxOption.map((option) => (
                  <li
                    className="selectLi"
                    key={option.id}
                    value={option.value}
                    onClick={() => {
                      selectOption(option.value), clickFunc();
                    }}
                  >
                    {option.value}
                  </li>
                ))}
              </ul>
              {selectState}
              <BsChevronUp />
            </div>
          ) : (
            <div onClick={clickFunc} className="selectBox">
              <ul>
                <li>{selectState}</li>
              </ul>
              <BsChevronDown />
            </div>
          )}
        </div>

        <input className="searchInputBox" onChange={searchFunc} />
        <button className="searchBtn" onClick={clickBtn}>
          조회
        </button>
      </div>
    </div>
  );
}

export default search;
