import React from "react";

function Main(props) {
  const deleteNeed = (e) => {
    // console.log(e.target.parentElement.parentElement.childNodes[2].innerText);

    // console.log(
    //   props.needList.indexOf(
    //     e.target.parentElement.parentElement.childNodes[2].innerText
    //   )
    // );
    let deleteLine = document.querySelectorAll(".deleteLine_1");
    let item_index =
      parseInt(e.target.parentElement.parentElement.childNodes[1].innerText) -
      1;
    for (let i = item_index; i < deleteLine.length - 1; i++) {
      //從刪除列開始，下方刪除線狀態取代上方刪除線狀態
      deleteLine[i].style.display = deleteLine[i + 1].style.display;
    }

    props.setNeedList(
      props.needList.filter((list, index) => {
        return (
          // list !== e.target.parentElement.parentElement.childNodes[2].innerText
          index !==
          props.needList.indexOf(
            e.target.parentElement.parentElement.childNodes[2].innerText
          )
        );
      })
    );
  };

  const deleteWant = (e) => {
    // console.log(e.target.parentElement.parentElement.childNodes[1].innerText);
    let deleteLine = document.querySelectorAll(".deleteLine_2");
    let item_index =
      parseInt(e.target.parentElement.parentElement.childNodes[1].innerText) -
      1;
    for (let i = item_index; i < deleteLine.length - 1; i++) {
      //從刪除列開始，下方刪除線狀態取代上方刪除線狀態
      deleteLine[i].style.display = deleteLine[i + 1].style.display;
    }

    props.setWantList(
      props.wantList.filter((list, index) => {
        return (
          // list !== e.target.parentElement.parentElement.childNodes[2].innerText
          index !==
          props.wantList.indexOf(
            e.target.parentElement.parentElement.childNodes[2].innerText
          )
        );
      })
    );
  };

  const checkNeed = (e) => {
    let deleteLine = document.querySelectorAll(".deleteLine_1");
    let index =
      parseInt(e.target.parentElement.parentElement.childNodes[1].innerText) -
      1; //欲刪除列的編號
    // console.log(index);
    if (deleteLine[index].style.display === "none") {
      deleteLine[index].style.display = "flex";
    } else {
      deleteLine[index].style.display = "none";
    }
  };

  const checkWant = (e) => {
    let deleteLine = document.querySelectorAll(".deleteLine_2");
    let index =
      parseInt(e.target.parentElement.parentElement.childNodes[1].innerText) -
      1; //欲刪除列的編號
    // console.log(index);
    if (deleteLine[index].style.display === "none") {
      deleteLine[index].style.display = "flex";
    } else {
      deleteLine[index].style.display = "none";
    }
  };

  return (
    <div className="main container mt-3">
      {props.needList.length > 0 && (
        <table className="table-striped top">
          <tbody>
            <tr>
              <td className="titleName">需要</td>
              <td className="message">
                {props.needList.map((list, index) => (
                  <tr>
                    <div
                      className="deleteLine_1"
                      style={{ display: "none" }}
                    ></div>
                    <td className="index">{index + 1} </td>
                    <td className="msg">{list}</td>
                    <td className="checkBtn">
                      <i className="fas fa-check" onClick={checkNeed}></i>
                    </td>
                    <td className="clearBtn">
                      <i class="fas fa-trash-alt" onClick={deleteNeed}></i>
                    </td>
                  </tr>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {props.needList.length > 0 && props.wantList.length > 0 && (
        <div className="line"></div>
      )}
      {props.wantList.length > 0 && (
        <table className="table-striped down">
          <tbody>
            <tr>
              <td className="titleName">想要</td>
              <td className="message">
                {props.wantList.map((list, index) => (
                  <tr>
                    <div
                      className="deleteLine_2"
                      style={{ display: "none" }}
                    ></div>
                    <td className="index">{index + 1} </td>
                    <td className="msg">{list}</td>
                    <td className="checkBtn">
                      <i className="fas fa-check" onClick={checkWant}></i>
                    </td>
                    <td className="clearBtn">
                      <i class="fas fa-trash-alt" onClick={deleteWant}></i>
                    </td>
                  </tr>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Main;
