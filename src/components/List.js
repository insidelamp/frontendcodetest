import React from "react";
import "../css/list.css";

function List({ data }) {
  console.log(data);
  return (
    <div className="listWrapper">
      <div className="listTitle">
        <div className="listNumber">상품번호</div>
        <div className="listName">상품명</div>
        <div className="listBrand">브랜드</div>
        <div className="listDescription">상품내용</div>
        <div className="listPrice">
          <div>가격</div>
          <div>평점</div>
          <div>재고</div>
        </div>
      </div>
      {data?.map((item) => (
        <div className="listContents">
          <div className="listNumber">{item.id}</div>
          <div className="listName">{item.title}</div>
          <div className="listBrand">{item.brand}</div>
          <div className="listDescription">
            <p className="listDescriptionContents">{item.description}</p>
          </div>
          <div className="listPrice">
            <div>${item.price}</div>
            <div>{item.rating}</div>
            <div>{item.stock}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
