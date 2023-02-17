let heartCount = 0;
let heart = document.querySelectorAll(".heart"); //텅빈 하트의 요소를 가져오겠단 의미
console.log(heart);

// heart.addEventListener("click", changePic);
// heart.addEventListener("click", addLike);

// 하트 리스트 중 각각 클릭하면 하트색 바뀌는 함수 적용
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

let result = Math.floor(Math.random() * 1001);
console.log(result); // 난수 생성
var count = result;

// heartCount상태에 따라 count수치 변경함수
function countPlus() {
  heartCount === 1 ? (count += 1) : (count -= 1);
}

// 하트이미지 리스트(2개)에서 각각 하트와 그 하트의 인덱스(순서:0번째,1번째)를 꺼내와서
heart.forEach((value, index) => {
  // 각 하트를 클릭했을때
  value.addEventListener("click", () => {
    // like_count요소들을 countList에 담은 후
    let countList = document.querySelectorAll(".like_count");
    // countLIst의 순서를 선택해 안의 내용을 바꿈
    countList[index].innerHTML = `<b>\u00A0외 ${count}명</b>`;
  });
});
// 즉 첫 번째 하트가 선택되면, 첫번째하트의 인덱스값인 0이 가져와지고,
// like_count들 중 1번째(0번 인덱스)의 내용을 바꾸고

// 두번째 하트가 선택되면, 두번째하트의 인덱스값인 1이 가져와지고,
// like_count들 중 2번째(1번 인덱스)의 내용을 바꿔줍니다.

// .innerHTML = "\u00A0" + "<b>외</b>" + "\u00A0" + count + "<b>명</b>";

function sTo() {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
}
