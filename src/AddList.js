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
    e.preventDefault(); //避免按下submit button後，re-render
    if (props.inputItem === "") {
      //避免沒有輸入商品名稱
      alert("輸入購物名稱");
      return;
    } else if (props.inputPrice.match(/^[0-9]+$/) === null) {
      //只能輸入正整數
      //避免輸入商品金額錯誤
      alert("輸入正確物品金額");
      return;
    }

    if (props.inputSelection === "0") {
      props.setNeedList([
        ...props.needList,
        props.inputItem + " / NT$ " + parseInt(props.inputPrice),
      ]);
    } else {
      props.setWantList([
        ...props.wantList,
        props.inputItem + " / NT$ " + parseInt(props.inputPrice),
      ]);
    }
  };

  return (
    <div className="addList">
      <form action="" className="container form-inline">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-5 mb-2">
            <input
              type="text"
              name="item"
              id="item"
              placeholder="商品名稱"
              onChange={setItemName}
            />
          </div>
          <div className="col-lg-3 col-5 mb-2 ">
            <input
              type="text"
              name="price"
              id="price"
              placeholder="價格(NT$)"
              onChange={setPriceValue}
            />
          </div>
          <div className="col-lg-3 col-5">
            <select name="" id="nORw" onChange={setSelect}>
              <option value="0">需要</option>
              <option value="1">想要</option>
            </select>
          </div>
          <div className="col-lg-3 col-5">
            <button
              type="submit"
              className="btn btn-outline-success"
              onClick={add}
            >
              新增
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddList;
