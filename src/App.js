import React, { useEffect, useState } from "react";
import "./css/app.css";

import Search from "./components/Search";
import List from "./components/List";

const App = () => {
  const [arrData, setArrData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((data) => setArrData(data));
  };
  return (
    <div className="Wrapper">
      <Search />
      <div className="allData">검색된 데이터 : {arrData.total}건</div>
      <List data={arrData.products} />
    </div>
  );
};

export default App;
