function add(a, b) {
  console.log(a + b);
  return a + b; //저장해서 반환
}
var result = add(3, 4);
console.log("두 수를 더한 값 : " + result);

const a = 100;
function sample(a) {
  if (a > 0) {
    return;
  }
  console.log("hello world");
}
sample();
