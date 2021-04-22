import React, { useState } from "react";
import AddList from "./AddList";
import Main from "./main";

function Nav() {
  let [inputItem, setItem] = useState(""); //inputItem state 輸入item
  let [inputPrice, setPrice] = useState(""); //inputPrice state 輸入金額
  let [inputSelection, setSelection] = useState("0"); //inputSelection state 選擇需要或是想要
  let [needList, setNeedList] = useState([]);
  let [wantList, setWantList] = useState([]);
  return (
    <div>
      <div className="nav">
        <h1>Bennis' 購物清單</h1>
      </div>

      {/* //傳送inputItem, inputPrice, inputSelection這兩個state給Main component */}
      <AddList
        inputItem={inputItem}
        setItem={setItem}
        inputPrice={inputPrice}
        setPrice={setPrice}
        inputSelection={inputSelection}
        setSelection={setSelection}
        needList={needList}
        setNeedList={setNeedList}
        wantList={wantList}
        setWantList={setWantList}
      />
      <Main
        needList={needList}
        setNeedList={setNeedList}
        wantList={wantList}
        setWantList={setWantList}
      />
    </div>
  );
}

export default Nav;
