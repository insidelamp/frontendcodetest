import React, { useState } from "react";
import "../css/search.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function search() {
  const selectBoxOption = [
    { value: "전체", id: 1 },
    { value: "상품명", id: 2 },
    { value: "브랜드", id: 3 },
    { value: "상품내용", id: 4 },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectState, setSelectState] = useState("전체");
  const [selectOptions, setSelectOptions] = useState("");

  function clickFunc() {
    setIsOpen(!isOpen);
    console.log(11);
  }
  const selectOption = (id, value) => {
    setSelectOptions(id);
    setSelectState(value);
  };
  console.log(isOpen, selectOptions, selectState);
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
                      selectOption(option.id, option.value), clickFunc();
                      console.log(option.id, option.value);
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

        <input className="searchInputBox" />
        <button className="searchBtn">조회</button>
      </div>
    </div>
  );
}

export default search;
