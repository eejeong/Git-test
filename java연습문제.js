/* let a = 10; //전역 스코프, 전역변수
{
  let b = 20;  //지역 스코프, 지역변수
  console.log(`코드 블록 내부 a: ${a}`);
  console.log(`코드 블록 내부 b: ${b}`);
}
console.log(`코드 블록 외부 a: ${a}`);
console.log(`코드 블록 외부 b: ${b}`);
 */

// let a = 10;
// const b = 20;
// function sum() {
//   let a = 50;
//   let b = 70;
//   console.log(`함수 내부 a: ${a}`);
//   console.log(`함수 내부 b: ${b}`);
// }
// sum();

/* var i, j;

for (let i = 1; i <= 9; i++) {
  document.write("<div>");
  document.write("<h2>" + i + " 단" + "</h2>");
  for (let j = 1; j <= 9; j++) {
    document.write(i + "X" + j + "=" + i * j + "<br>");
  }
  document.write("</div>");
  if (i == 3) break;
}

//별 찍기
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
} */

// 짝수 구하기
/* for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) continue;
  console.log(i);
} */

// 짝수 구하기 2
// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

//찍수 내림차순 구하기
// for (let i = 20; i >= 1; i--) {
//   if (i % 2 === 1) continue;
//   console.log(i);
// }

//내림차순 구하기
// for (let i = 20; i >= 1; i -= 3) {
//   console.log(i);
// }

//홀수 구하기
/* for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
 */

//짝수 문자열로 출력하기
var result = "";
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) result += i;
}
console.log(result);
