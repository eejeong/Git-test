# 0215 강의

## classList

- css 안에 특정 스타일을 지정하여 add하거나 delete 가능
- add 예제

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>style</title>
    <style>
      .red-color {
        color: red;
      }
      .fs20 {
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <p id="text">text</p>
    <script>
      const pE1 = document.querySelector("#text"); //노드 선택
      //pE1.classList.add("red-color");  색깔 스타일만 add
      //pE1.classList.add("red-color", "fs20") 색깔, 폰트사이즈 add
    </script>
  </body>
</html>
```

## DOM (document object model) : 문서 객체 모델

- DOM을 구성하는 기본 원칙

1. 모든 HTML 태그는 요소(element) 노드
2. HTML 태그에서 사용하는 텍스트 내용은 자식 노드인 텍스트(text) 노드
3. HTML 태그에 있는 속성은 자식 노드인 속성(attribute) 노드
4. 주석은 주석(comment) 노드

- attribute 예제

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>attribute</title>
  </head>
  <body>
    <a href ="https://www.naver.com">NAVER</a>

    <script>
      const aE1 = document.querySelector("a"); //노드 선택
      const href = aE1.getAttribute("href");
      aE1.setAttribute("href", "https://www.daum.net");
      aE1.innerText = "daum";
      aE1.setAttribute("target", "_blank"); //target 속성값을 blank로 지정
    </script>
  </body>
</html>
```

- attribute : data-link 변경 예제

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>attribute2</title>
    <style>
      .red-color {
        color: red;
      }
    </style>
  </head>
  <body>
    <a href="https://www.naver.com" data-link="네이버">NAVER</a>

    <script>
      const aE1 = document.querySelector("a"); //노드 선택
      aE1.setAttribute("data-link", "다음");
      aE1.setAttribute("class", "red-color"); //class - red
    </script>
  </body>
</html>
```

- attribute : class 속성 삭제 예제

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>attribute3</title>
    <style>
      .red color {
        color: red;
      }
    </style>
  </head>
  <body>
    <a href="https://www.naver.com" class = "red-color">NAVER</a>

    <script>
      const aE1 = document.querySelector("a"); //노드 선택
      aE1.removeAttribute("class");            //class 속성 삭제
    </script>
  </body>
</html>
```

- attribute와 classList
  - classList 는 추가의 개념, attribute는 초기화하고 원하는 양식 추가

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>attribute와 classList</title>
    <style>
      .red-color {
        color: red;
      }
      .fs40 {
        font-size: 60px;
      }
    </style>
  </head>
  <body>
    <a href="https://www.naver.com" class="fs40">NAVER</a>

    <script>
      const aE1 = document.querySelector("a"); //노드 선택
      aE1.classList.add("red-color"); //class 속성 추가
      aE1.setAttribute("class", "red-color"); //class 속성 초기화
    </script>
  </body>
</html>
```

## 컨텐츠

- textContent, innerText : 텍스트로 인식
- innerHTML : 태그에 걸린 모든 속성 인식
- 아래 예제에서 strong 값은 innerHTML에만 적용됨

```
  <body>
    <p id="textContent"></p>
    <p id="innerText"></p>
    <p id="innerHTML"></p>
    <script>
      document.querySelector(
        "#textContent"
      ).textContent = `<strong>textContent</strong> 속성`;
      document.querySelector(
        "#innerText"
      ).innerText = `<strong>innerText</strong> 속성`;
      document.querySelector(
        "#innerHTML"
      ).innerHTML = `<strong>innerHTML</strong> 속성`;
    </script>
  </body>
</html>``
```

```
  <body>
    <p id="title">Hello, <span style="display: none">Javascript!</span></p>

    <script>
      document.getElementById("title").textContent; //Hello, Javascropt!
      document.getElementById("title").innerText; //Hello,
      document.getElementById("title").innerHTML; //Hello, <span style="display: none">Javascript!</span>

      console.log(document.getElementById("title").textContent);
      console.log(document.getElementById("title").innerText);
      console.log(document.getElementById("title").innerHTML);
    </script>
  </body>
</html>
```

- Node 추가

```
  <body>
    <script>
      //요소 노드 생성
      const CE1 = document.createElement("a");
      document.body.appendChild(CE1); //덧붙이기

      //텍스트 노드 생성
      const txtEl = document.createTextNode("NAVER");
      document.querySelector("a").appendChild(txtEl);

      //href 속성 추가
      const hrefAttr = document.createAttribute("href");
      hrefAttr.value = "https://www.naver.com";
      document.querySelector("a").setAttributeNode(hrefAttr);
    </script>
  </body>
</html>
```

- Node 삭제
  - querySelector("a") : 괄호 안의 하나의 대상만 선택 (a가 여러개인 경우, 최상위 대상만 선택)
  - querySelectorAll : 모든 대상 선택

```
  <body>
    <p>text 1</p>
    <a href="https://www.naver.com">NAVER</a>
    <a href="https://www.daum.net">daum</a>
    <script>
      const CEl = document.querySelector("p");
      CEl.parentNode.removeChild(CEl); //덧붙이기
    </script>
  </body>
</html>
```

- 자식 Node 삭제

```
  <body>
    <p>text 1</p>
    <a href="https://www.naver.com">NAVER</a>
    <a href="https://www.daum.net">daum</a>
    <script>
      const childNodes = document.body.childNodes;
      childNodes.forEach((node) => {
        if (node.nodeName === "A") node.parentNode.removeChild(node);
      });
    </script>
  </body>
</html>
```

- checkbox 예제

```
  <body>
    <form>
      <label><input type="checkbox" value="blue" />파랑</label>
      <label><input type="checkbox" value="red" />빨강</label>
      <label><input type="checkbox" value="green" />초록</label>
      <label><input type="checkbox" value="purple" />보라</label>
    </form>
    <script>
      const checkboxEls = document.querySelectorAll("[type = 'checkbox']");
      for (let i = 0; i < checkboxEls.length; i++) {
        checkboxEls[i].checked = true;
      }
    </script>
  </body>
</html>
```

- checklist 특정 값만 체크

```
  <body>
    <form>
      <label><input type="radio" value="blue" />파랑</label>
      <label><input type="radio" value="red" />빨강</label>
      <label><input type="radio" value="green" />초록</label>
      <label><input type="radio" value="purple" />보라</label>
    </form>
    <script>
      const radioEls = document.querySelectorAll("[type = 'radio']");
      for (let i = 0; i < radioEls.length; i++) {
        if (radioEls[i].value === "green") {
          radioEls[i].checked = true;
        }
      }
    </script>
  </body>
</html>
```

# 0216 강의

## event

- click 시 알림 pop up

```
  <body>
    <button onclick="clickEvent()">클릭</button>
    <script>
      function clickEvent() {
        alert("click");
      }
    </script>
  </body>
</html>
```

- click 시 테두리 변화
  - onblur : focus가 대상에서 벗어났을 때 이벤트 실행
  - onfocus 통해 focus된 횟수 등의 데이터 수집 가능

```
  <body>
    <form>
      <input type="text" onfocus="FocusEvent()" onblur="blurEvent()" />
    </form>
    <script>
      function FocusEvent() {
        console.log("focus on");
      }
      function blurEvent() {
        console.log("focus out");
      }
    </script>
  </body>
</html>
```

- 버튼 클릭시 알림창 pop up 3가지 방식

```
  <body>
    <button>클릭</button>
    <script>
      const btnEl = document.querySelector("button");
      btnEl.onclick = function () {
        alert("click");
      };

      // btnEl.onclick = () => {
      //   alert("click");
      // };

      // btnEl.onclick = clickEvent;
      // function clickEvent() {
      //   alert("click");
      // }
    </script>
  </body>
</html>
```

- <노드>.addEventListener("이벤트타입", 이벤트 함수)
- onclick 중 on제거

```
  <body>
    <button>클릭</button>
    <script>
      const btnEl = document.querySelector("button");
      btnEl.addEventListener("click", function () {
        alert("button click");
      });
    </script>
  </body>
</html>
```

- 화살표 함수

```
  <body>
    <button>클릭</button>
    <script>
      const btnEl = document.querySelector("button");
      const clickEvent = () => {
        alert("button click");
      };
      btnEl.addEventListener("click", clickEvent);
    </script>
  </body>
</html>
```

- 클릭 위치 console 창에 표시

```
  <body>
    <button>클릭</button>
    <script>
      const btnEl = document.querySelector("button");
      btnEl.addEventListener("click", function (event) {
        // 내부적으로 이벤트 객체를 매개변수로 전달
        console.log(event);
        console.log(`clientX:${event.clientX}`);
        console.log(`clientY:${event.clientY}`);
        console.log(`pageX:${event.pageX}`);
        console.log(`pageY:${event.pageY}`);
        console.log(`screenX:${event.screenX}`);
        console.log(`screenY:${event.screenY}`);
      });
    </script>
  </body>
```

- input에 키 입력시 console 창에 출력

```
  <body>
    <form>
      <input type="text" />
    </form>
    <script>
      const inputEl = document.querySelector("input");
      inputEl.addEventListener("keydown", function (event) {
        // 내부적으로 이벤트 객체를 매개변수로 전달
        console.log(event);
        console.log(`keyCode:${event.keyCode}`);
        console.log(`ctrlKey:${event.ctrlKey}`);
        console.log(`altKey:${event.altKey}`);
        console.log(`shiftKey:${event.shiftKey}`);
      });
    </script>
  </body>
```

- click시 text 색깔 변경
  - this는 사용자가 해당 요소를 클릭했을 때 출력

```
  <body>
    <p>text-1</p>
    <p>text-2</p>
    <p>text-3</p>
    <script>
      const pEl = document.querySelectorAll("p");
      pEl.forEach((el) => {
        el.addEventListener("click", function () {
          console.log(this);
          if (this.style.color === "red") {
            this.style.color = "black";
          } else {
            this.style.color = "red";
          }
        });
      });
    </script>
  </body>
```
