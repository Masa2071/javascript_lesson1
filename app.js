// 問題文
const question = "ドラゴンボールに出てくる主人公の名前は次のうちどれ？";
// 選択欄
const answers = ["孫悟空", "孫悟飯", "ブロリー", "ベジータ"];
// 答え
const correct = "孫悟空";

document.getElementById("js-question").textContent = question;

document.getElementsByTagName("button")[0].textContent = answers[0];
document.getElementsByTagName("button")[1].textContent = answers[1];
document.getElementsByTagName("button")[2].textContent = answers[2];
document.getElementsByTagName("button")[3].textContent = answers[3];

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[0].textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解");
  }
});

document.getElementsByTagName("button")[1].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[1].textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解");
  }
});

document.getElementsByTagName("button")[2].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[2].textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解");
  }
});

document.getElementsByTagName("button")[3].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[3].textContent) {
    window.alert("正解!");
  } else {
    window.alert("不正解");
  }
});
