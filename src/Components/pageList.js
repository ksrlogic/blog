import React, { useEffect, useState } from "react";
import store from "../store/index";

const PageList = () => {
  const [pagenum, setPageList] = useState();

  const pageList = [...Array(pagenum).keys()];
  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch("/api/get_count");
      const Data = await getData.json();
      const num = (await parseInt(Number(Data) / 5)) + 1;
      await setPageList(num);
    };
    fetchData();
    console.log(pagenum);
  }, [pagenum]);

  return (
    <div>
      {pageList.map((e, key) => {
        if (store.getState().pageNum === e + 1) {
          return (
            <button
              key={key}
              href="/"
              style={{ color: "red", paddingRight: "10px" }}
              onClick={() => {
                store.dispatch({ type: "CHANGE_PAGE", pageNum: e + 1 });
              }}
            >
              {e + 1}
            </button>
          );
        } else {
          return (
            <button
              key={key}
              href="/"
              style={{ color: "black", paddingRight: "10px" }}
              onClick={() => {
                store.dispatch({ type: "CHANGE_PAGE", pageNum: e + 1 });
              }}
            >
              {e + 1}
            </button>
          );
        }
      })}
    </div>
  );
};

export default PageList;
