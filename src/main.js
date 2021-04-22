import React from "react";

function Main(props) {
  const deleteNeed = (e) => {
    // console.log(e.target.parentElement.parentElement.childNodes[2].innerText);
    props.setNeedList(
      props.needList.filter((list) => {
        return (
          list !== e.target.parentElement.parentElement.childNodes[2].innerText
        );
      })
    );
  };

  const deleteWant = (e) => {
    // console.log(e.target.parentElement.parentElement.childNodes[1].innerText);
    props.setWantList(
      props.wantList.filter((list) => {
        return (
          list !== e.target.parentElement.parentElement.childNodes[2].innerText
        );
      })
    );
  };

  const checkNeed = (e) => {
    let deleteLine = document.querySelectorAll(".deleteLine_1");
    let index = 0; //欲刪除列的編號
    let item = e.target.parentElement.parentElement.childNodes[2].innerText; //找到要刪除那一列的資訊
    for (index = 0; index < props.needList.length; index++) {
      if (props.needList[index] === item) {
        break;
      }
    }
    // console.log(index);
    if (deleteLine[index].style.display === "none") {
      deleteLine[index].style.display = "flex";
    } else {
      deleteLine[index].style.display = "none";
    }
  };

  const checkWant = (e) => {
    let deleteLine = document.querySelectorAll(".deleteLine_2");
    let index = 0; //欲刪除列的編號
    let item = e.target.parentElement.parentElement.childNodes[2].innerText; //找到要刪除那一列的資訊
    for (index = 0; index < props.wantList.length; index++) {
      if (props.wantList[index] === item) {
        break;
      }
    }
    // console.log(index);
    if (deleteLine[index].style.display === "none") {
      deleteLine[index].style.display = "flex";
    } else {
      deleteLine[index].style.display = "none";
    }
  };

  return (
    <div className="main">
      {props.needList.length > 0 && (
        <table className="top">
          <tbody>
            <tr>
              <td className="titleName">需要</td>
              <td className="message">
                {props.needList.map((list, index) => (
                  <tr>
                    <div className="deleteLine_1"></div>
                    <td className="index">{index + 1} </td>
                    <td className="msg">
                      <p>{list}</p>
                    </td>
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
        <table className="down">
          <tbody>
            <tr>
              <td className="titleName">想要</td>
              <td className="message">
                {props.wantList.map((list, index) => (
                  <tr>
                    <div className="deleteLine_2"></div>
                    <td className="index">{index + 1} </td>
                    <td className="msg">
                      <p>{list}</p>
                    </td>
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
