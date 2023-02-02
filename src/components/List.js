import React from "react";
import "../css/list.css";

function List({ data, searchData }) {
  console.log(101, searchData);
  let filterDefaultData = data?.map((item) =>
    item?.description
      ? {
          ...item,
          description: [
            item?.description.slice(0, 40),
            "\u00A0" +
              "\u00A0" +
              "\u00A0" +
              "\u00A0" +
              "\u00A0" +
              item?.description.slice(40),
          ],
        }
      : item
  );
  let filterSearchData = searchData?.map((item) =>
    item?.description
      ? {
          ...item,
          description: [
            item?.description.slice(0, 40),
            "\u00A0" +
              "\u00A0" +
              "\u00A0" +
              "\u00A0" +
              "\u00A0" +
              item?.description.slice(40),
          ],
        }
      : item
  );

  return (
    <>
      {searchData.length > 0 ? (
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
          {filterSearchData?.map((item) => (
            <div className="listContents">
              <div className="listNumber">{item.id}</div>
              <div className="listName">{item.title}</div>
              <div className="listBrand">{item.brand}</div>
              <div className="listDescription">
                <p className="listDescriptionContents">{item.description[0]}</p>
                <p className="listDescriptionContentsHidden">
                  {" "}
                  {item.description[1]}
                </p>
              </div>
              <div className="listPrice">
                <div>${item.price}</div>
                <div>{item.rating}</div>
                <div>{item.stock}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
          {filterDefaultData?.map((item) => (
            <div className="listContents">
              <div className="listNumber">{item.id}</div>
              <div className="listName">{item.title}</div>
              <div className="listBrand">{item.brand}</div>
              <div className="listDescription">
                <p className="listDescriptionContents">{item.description[0]}</p>
                <p className="listDescriptionContentsHidden">
                  {" "}
                  {item.description[1]}
                </p>
              </div>
              <div className="listPrice">
                <div>${item.price}</div>
                <div>{item.rating}</div>
                <div>{item.stock}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default List;
