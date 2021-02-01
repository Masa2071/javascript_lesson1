const quiz = [
  {
    question: "ドラゴンボールに出てくる主人公の名前は次のうちどれ？", // 問題文
    answers: ["孫悟空", "孫悟飯", "ブロリー", "ベジータ"], // 選択欄
    correct: "孫悟空", // 答え
  },
  {
    question: "ジョジョの奇妙な冒険３部の主人公は次のうちどれ？",
    answers: [
      "ジョセフ・ジョースター",
      "東方仗助",
      "空条承太郎",
      "ジョルノ・ジョバーナ",
    ],
    correct: "空条承太郎",
  },
  {
    question: "青森県の生産量が一位の物は次のうちどれ？",
    answers: ["絆創膏", "靴下", "包帯", "ストッキング"],
    correct: "ストッキング",
  },
];

const quizLength = quiz.length;
let quizIndex = 0; //constだと++できないのでエラーになる
let score = 0;

const $button = document.getElementsByTagName("button");
// ボタンの数を数える変数
let buttonLength = $button.length;

// クイズの問題、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解!");
    score++;
  } else {
    window.alert("不正解");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です");
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
