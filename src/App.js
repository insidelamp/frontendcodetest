import React, { useEffect, useState } from "react";
import "./css/app.css";

import Search from "./components/Search";
import List from "./components/List";

const App = () => {
  const [arrData, setArrData] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [newNumber, setNewNumber] = useState(0);
  const [selectState, setSelectState] = useState("전체");

  const fetchData = () => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((data) => setArrData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(selectState, 12345, userSearch);
  useEffect(() => {
    if (userSearch != "") {
      console.log(11111);
      const filterBrand = arrData?.products?.filter(
        (item) => item.brand.indexOf(userSearch) >= 0
      );
      setFilterData(filterBrand);
      console.log(filterData);
    } else if (userSearch != "" && selectState === "상품명") {
      console.log(22);
      const filterTitle = arrData?.products?.filter(
        (item) => item.title.indexOf(userSearch) >= 0
      );
      setFilterData(filterTitle);
    } else if (userSearch != "" && selectState === "상품내용") {
      const filterContent = arrData?.products?.filter(
        (item) => item.description.indexOf(userSearch) >= 0
      );
      console.log(33);
      setFilterData(filterContent);
    }
  }, [filterData]);
  console.log("333", arrData, filterData);

  return (
    <div className="Wrapper">
      <Search
        selectState={selectState}
        setSelectState={setSelectState}
        setUserSearch={setUserSearch}
      />
      <div className="allData">검색된 데이터 : {arrData.total}건</div>
      <List data={arrData.products} searchData={filterData} />
    </div>
  );
};

export default App;
