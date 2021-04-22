import React from "react";
function AddList(props) {
  // let index = [0, 0]; //index[0] "需要"項目編號, index[1] "想要"項目編號
  const setItemName = (e) => {
    props.setItem(e.target.value);
  };

  const setPriceValue = (e) => {
    props.setPrice(e.target.value);
  };

  const setSelect = (e) => {
    props.setSelection(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    if (props.inputItem === "") {
      alert("輸入購物名稱");
      return;
    } else if (props.inputPrice === "") {
      alert("輸入物品金額");
      return;
    }

    if (props.inputSelection === "0") {
      props.setNeedList([
        ...props.needList,
        props.inputItem + " / NT$ " + props.inputPrice,
      ]);
    } else {
      props.setWantList([
        ...props.wantList,
        props.inputItem + " / NT$ " + props.inputPrice,
      ]);
    }
  };

  return (
    <div className="addList">
      <form action="">
        <input
          type="text"
          name="item"
          id="item"
          placeholder="商品名稱"
          onChange={setItemName}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="價格(NT$)"
          onChange={setPriceValue}
        />
        <select name="" id="nORw" onChange={setSelect}>
          <option value="0">需要</option>
          <option value="1">想要</option>
        </select>
        <button type="submit" onClick={add}>
          新增
        </button>
      </form>
    </div>
  );
}

export default AddList;
