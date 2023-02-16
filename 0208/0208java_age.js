var currentyear = 2023;
var birthyear;
var age;

birthyear = prompt("태어난 연도를 입력하세요.");
age = currentyear - birthyear + 1;
document.write(currentyear + "년 현재<br>");
document.write(birthyear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");
