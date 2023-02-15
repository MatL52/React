// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import { StrictMode } from "react";
// import ReactDom from "react-dom";
// import App from "./App";

// ReactDom.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

//reactを使うときの準備として、Riactを読み込む処理が最初に必要
import React from "react";
import ReactDom from "react-dom";

// Reactでは関数の中でHTMLタグを書く
// 出力する内容はreturnの先でHTMLとほぼ同じ構造で記述する
// 複数のHTMLタグを表示する場合は（）を使って記述する
// divタグで囲むとHTMLの入れ子構造が変わってしまうので
// <React.Fragment>もしくは<>で囲む

const App = () => {
  return (
    // <React.Fragment>
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか</p>
      {/* </React.Fragment> */}
    </>
  );
};

//Render関数
ReactDom.render(<App />, document.getElementById("root"));
