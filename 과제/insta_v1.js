let heartCount = 0;
let heart = document.querySelectorAll(".heart"); //텅빈 하트의 요소를 가져오겠단 의미
// heart.addEventListener("click", changePic);
// heart.addEventListener("click", addLike);

heart.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("1", this);
    if (heartCount == 0) {
      this.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/2107/2107845.png"
      );
      /* 카운트가 0일 때 빨간색으로 */
      heartCount++;
      countPlus();
    } else {
      this.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/5948/5948503.png"
      ); /* 카운트가 1일 때 원래색으로 */
      heartCount--;
      countPlus();
    }
  });
});

var count = 23;
function countPlus() {
  heartCount === 1 ? (count += 1) : (count -= 1);
}
let countArray = document.querySelectorAll(".like_count");

for (let cnt of countArray) {
  cnt.innerHTML = "\u00A0" + "<b>외</b>" + "\u00A0" + count + "<b>명</b>";
}

// heart.forEach((btn) => {
// function changePic() {
//   console.log("첫번쨰실행");
//   if (heartCount == 0) {
//     heart.src =
//       "https://cdn-icons-png.flaticon.com/512/2107/2107845.png"; /* 카운트가 0일 때 빨간색으로 */
//     heartCount++;
//   } else {
//     heart.src =
//       "https://cdn-icons-png.flaticon.com/512/5948/5948503.png"; /* 카운트가 1일 때 원래색으로 */
//     heartCount--;
//   }
// }
// // });

// function addLike() {
//   console.log("두번째실행");
//   const pushHeart = document.querySelectorAll("#heart");
//   pushHeart.innerHTML = '<img id="heart"></img>';
//   pushHeart.addEventListener("click", countPlus);
// }

function sTo() {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
}
