// 問題文
const question = "ドラゴンボールに出てくる主人公の名前は次のうちどれ？";
// 選択欄
const answers = ["孫悟空", "孫悟飯", "ブロリー", "ベジータ"];
// 答え
const correct = "孫悟空";

const $button = document.getElementsByTagName("button");
// ボタンの数を数える変数
let buttonLength = $button.length;

// クイズの問題、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解");
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e)
  });  
    handlerIndex++;
}
