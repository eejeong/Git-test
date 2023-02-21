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

## 0217 강의

# 제이쿼리

- 직접선택자 : 하나의 개체만 선택하는 경우 사용

```
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./jquery.js"></script>
    <script>
      $(function () {
        $("*").css("border", "1px solid blue"); //선택자
      });
    </script>
  </head>
  <body>
    <h1>제이쿼리</h1>
    <h2>선택자</h2>
    <h3>직접 선택자</h3>
  </body>
```

```
    <script>
      //id는 #, class는 . 으로 선택자 지정
      //요소 선택자는 태그 지정
      //동시 선택 가능 $("#kb, h1") 또는 ("h1#kb") h1중에서 id값이 같은 것만 지정
      $(function () {
        $("#kb")
          .css("background-color", "#ff0") //id 선택자
          .css("border", "4px solid #f00"); //체이닝 기법 : 선택한 요소에 메서드를 연속해서 사용
      });
      $(function () {
        $("a")
          .attr("href", "https://www/naver.com")
          .attr("target", "_blank")
          .css("font-size", "100px");
      });
      //선택한 요소에 지정한 스타일 적용
      //$("css선택자").css("스타일 속성명", "값")
      //선택한 요소에 지정한 속성 적용
      //$("css선택자").attr("속성명", "값")
    </script>
  </head>
  <body>
    <h1>제이쿼리</h1>
    <h2 id="kb">선택자</h2>
    <a>국민</a>
    <h3>직접 선택자</h3>
  </body>
```

- 인접 선택자 예제 : 다중으로 선택하는 경우 사용

```
    <script src="./jquery.js"></script>
    <script>
      $(function () {
        $("#22").parent().css("border", "4px solid #f00"); //체이닝 기법 : 선택한 요소에 메서드를 연속해서 사용
      });
    </script>
  </head>
  <body>
    <h1>인접 관계 선택자</h1>
    <ul id="kb">
      <li>리스트1</li>
        <ul>
          <li id="22">리스트22</li>
          <li>리스트22-1</li>
        </ul>
      <li>리스트2</li>
      <li>리스트3</li>
    </ul>
  </body>
```

```
    <script src="./jquery.js"></script>
    <script>
      $(function () {
        $("#22 > h1").css("border", "4px solid #f00"); // 22 중에서 h1만 선택
        $("#22 > section").children()
        .css({"background-color":"blue", "border":"4px solid #ff0"})
      });
    </script>
  </head>
  <body>
    <h1>인접 관계 선택자</h1>
    <div id = 22>
      <h1>ddd</h1>
      <section>
        <h1>ddd</h1>
        <p>ppp</p>
      </section>
    </div>
  </body>
```

- 예제

  - prev 선택자의 이전 대상 속성 변경
  - next 선택자의 다음 대상 속성 변경

  ```
      <script src="./jquery.js"></script>
    <script>
      $(function () {
        var style_1 = {
          "background-color": "#0FF",
          border: "4px solid #f00",
        };
        var style_2 = {
          "background-color": "#ff0",
          border: "4px dashed #f00",
        };
        $(".txt").prev().css(style_1);
        $(".txt + p").css(style_2);
        $(".txt").next().next().css(style_2);
      });
    </script>
  </head>
  <body>
    <div id="tt">
      <h1>인접 관계 선택자</h1>
      <p>내용1</p>
      <p class="txt">내용2</p>
      <p>내용3</p>
      <p>내용4</p>
    </div>
  </body>
  ```

  - prevAll 선택자의 이전의 모든 대상 속성 변경
  - nextAll 선택자의 다음의 모든 대상 속성 변경

  ```
      <script>
      $(function () {
        var style_1 = {
          "background-color": "#0FF",
          border: "4px solid #f00",
        };
        var style_2 = {
          "background-color": "#ff0",
          border: "4px dashed #f00",
        };
        $(".txt").prevAll().css(style_1);
        $(".txt").nextAll().css(style_2);
      });
    </script>
  </head>
  <body>
    <h1>hi</h1>
    <div id="tt">
      <h1>인접 관계 선택자</h1>
      <p>내용1</p>
      <p class="txt">내용2</p>
      <p>내용3</p>
      <p>내용4</p>
    </div>
  </body>
  ```

  - prevUntil
  - nextUntil

```
    <script>
      $(function () {
        var style_1 = {
          "background-color": "#0FF",
          border: "4px solid #f00",
        };
        var style_2 = {
          "background-color": "#ff0",
          border: "4px dashed #f00",
        };
        $(".txt").prevUntil(".t").css(style_1);
        $(".txt").nextUntil(".t2").css(style_2);
      });
    </script>
  </head>
  <body>
    <h1>hi</h1>
    <div id="tt">
      <h1 class="t">인접 관계 선택자</h1>
      <p>내용1</p>
      <p>내용1</p>
      <p class="txt">내용2</p>
      <p>내용3</p>
      <p>내용4</p>
      <p class="t2">내용1</p>
    </div>
  </body>
```

- 탐색선택자

```
    <script src="./jquery.js"></script>
    <script>
      $(function () {
        $("#menu li:first").css({ "background-color": "#ff0" });
        $("#menu li:last").css({ "background-color": "#0ff" });
      });
    </script>
  </head>
  <body>
    <ul id="menu">
      <h2>dd</h2>
      <h2>dd</h2>
      <h2>dd</h2>
      <li>내용1</li>
      <li>내용2</li>
      <li>내용3</li>
      <li>내용4</li>
    </ul>
  </body>
```

- 탐색선택자
  - even : 홀수 인덱스
  - odd : 짝수 인덱스

```
    <script src="./jquery.js"></script>
    <script>
      $(function () {
        $("#menu li:even").css({ "background-color": "#ff0" }); //홀수 인덱스 (짝수 제외)
        $("#menu li:odd").css({ "background-color": "#0ff" }); //짝수 인덱스 (홀수 제외)
      });
    </script>
  </head>
  <body>
    <ul id="menu">
      <h2>dd</h2>
      <h2>dd</h2>
      <h2>dd</h2>
      <li>내용1</li>
      <li>내용2</li>
      <li>내용3</li>
      <li>내용4</li>
    </ul>
  </body>
```

- equal, less than, greater than

```
    <script src="./jquery.js"></script>
    <script>
      $(function () {
        $("#menu li")
          .eq(2) // 인덱스 2
          .css({ "background-color": "#ff0" });
        $("#menu li:lt(2)") // 인덱스 2보다 큰 인덱스 제외
          .css({ "background-color": "#0f0" });
        $("#menu li:gt(2)") // 인덱스 2보다 작은 인덱스 제외
          .css({ "background-color": "#f0f" });
      });
    </script>
  </head>
  <body>
    <ul id="menu">
      <h2>dd</h2>
      <h2>dd</h2>
      <h2>dd</h2>
      <li>내용1</li>
      <li>내용2</li>
      <li>내용3</li>
      <li>내용4</li>
      <li>내용5</li>
    </ul>
  </body>
```

- nth-child : 0부터 시작하지 않고, 1이 첫번째 대상을 의미

```
    <script src="./jquery.js"></script>
    <script>
      $(function () {
        $("#menu1 li:nth-child(1)").css({ "background-color": "#ff0" });
        $("#menu1 li:nth-child(3n)").css({ "background-color": "#0f0" });
        $("#menu2 li:nth-last-child(1)").css({ "background-color": "#f0f" });
      });
    </script>
  </head>
  <body>
    <h1>탐색 선택자</h1>
    <ul id="menu1">
      <li>내용1</li>
      <li>내용2</li>
      <li>내용3</li>
      <li>내용4</li>
    </ul>
    <ul id="menu2">
      <li>내용1</li>
      <li>내용2</li>
      <li>내용3</li>
      <li>내용4</li>
    </ul>
  </body>
```

## 0220 강의

# jquery event

```
    <script src="./jquery.js"></script>
    <script>
      $(function () {
        //단독 이벤트 등록
        $(".btn1").click(function () {
          $(".btn1").parent().next().css({ color: "#f00" });
        });
        $(".btn2").on({
          //.on 메소드를 이용한 그룹 이벤트 등록
          "mouseover focus": function () {
            $(".btn2").parent().next().css({ color: "#0f0" });
          },
          "mouseout blur": function () {
            $(".btn2").parent().next().css({ color: "#00f" });
          },
        });
      });
    </script>
  </head>
  <body>
    <p>
      <button class="btn1">버튼1</button>
    </p>
    <p>내용</p>
    <p>
      <button class="btn2">버튼2</button>
    </p>
    <p>내용</p>
  </body>
```

- 강제 event : 최초 접속시 이벤트 발생 상태 출력됨

```
        $(".btn1").click();
        $(".btn2").trigger("mouseover");
```

- event 제거

```
        $(".btn1").off("click");
        $(".btn2").off("mouseover focus");
```

- ready 
  - 호출시점 : DOM Tree 생성 완료 후
  - window.load() 보다 더 빠르게 실행되고 중복 사용하여 실행해도 선언한 순서대로 실행
- load
  -  호출시점 : 모든 페이지 구성요소 페인팅 완료 후

```
      $(function () {
        $(document).ready(function () {
          var h1 = $(".img1").height();
          console.log("ready :", h1); //ready : 값
        });
        $(window).load(function () {
          var h2 = $(".img1").height();
          console.log("load :", h2); //load : 값
        });
      });
```

- preventDefault : 기존 이벤트 막기
- dblclick : 더블클릭

```
    <script src="./jquery.js"></script>
    <script>
      $(function () {
        $(".btn1").on("click", function (e) {
          e.preventDefault(); //기존 이벤트 막기
          $(".txt1").css({ "background-color": "#ff0" });
        });
        $(".btn2").on("click", function (e) {
          // e.preventDefault();
          $(".txt2").css({ "background-color": "#0ff" });
        });
        $(".btn3").on("dblclick", function (e) {
          // e.preventDefault();
          $(".txt3").css({ "background-color": "#0f0" });
        });
      });
    </script>
  </head>
  <body>
    <p><a href="https://www.naver.com" class="btn1">버튼1</a></p>
    <p class="txt1">내용1</p>
    <p><a href="https://www.naver.com" class="btn2">버튼1</a></p>
    <p class="txt2">내용2</p>
    <p><button class="btn3">버튼1</button></p>
    <p class="txt3">내용3</p>
  </body>
```

```
      $(function () {
        $(".btn1").on({
          mouseover: function () {
            $(".txt1").css({ "background-color": "yellow" });
          },
          mouseout: function () {
            $(".txt1").css({ background: "none" });
          },
        });
        $(".btn2").hover(
          function () {
            $(".txt2").css({ "background-color": "aqua" });
          },
          function () {
            $(".txt2").css({ "background-color": "white" });
          }
        );
      });
```

- cursor 위치

```
    <script>
      $(function () {
        $(document).on("mouseover", function (e) {
          $(".posX").text(e.pageX);
          $(".posY").text(e.pageY);
        });
      });
    </script>
  </head>
  <body>
    <h1>mouseover</h1>
    <p>X : <span class="posX">0</span>px</p>
    <p>Y : <span class="posY">0</span>px</p>
  </body>
```

- scroll 위치

```<script>
      $(window).on("scroll", function () {
        var sc_top = $(this).scrollTop();
        var sc_left = $(this).scrollLeft();

        $(".top").text(sc_top);
        $(".left").text(sc_left);
      });
    </script>
    <style>
      body {
        height: 10000px;
        width: 5000px;
      }
      #wrap {
        position: fixed;
        left: 10px;
        top: 10px;
      }
    </style>
  </head>
  <body>
    <div id="wrap">
      <p>scrollTop: <span class="top">0</span>px</p>
      <p>scrollLeft: <span class="left">0</span>px</p>
    </div>
  </body>
```

- focus / blur : 해당 칸 색깔 변경
- focus in/out : 해당 칸의 배경 색 변경

```
    <script>
      $(function () {
        $("#user_id_1, #user_pw_1").on("focus", function () {
          $(this).css({ "background-color": "pink" });
        });
        $("#user_id_1, #user_pw_1").on("blur", function () {
          $(this).css({ "background-color": "blue" });
        });
        $("#frm_2").on("focusin", function () {
          $(this).css({ "background-color": "pink" });
        });
        $("#frm_2").on("focusout", function () {
          $(this).css({ "background-color": "blue" });
        });
      });
    </script>
```
```
    <script>
      $(function () {
        $("#btn1")
          .data({ "text": "javascript"})
          .on({ "mouseover":over, "mouseout":out });
        $("#btn2")
          .data({ "text": "welcome!" })
          .on({ "mouseover focus": over, "mouseout blur": out });
        function over() {
          $(".txt").text($(this).data("text"));
        }
        function out() {
          $(".txt").text("");
        }
      });
    </script>
```
```
    <script>
      $(function(){
        $(document).on("keydown", KeyEventFnc);
        function KeyEventFnc(e){
          var direct = "";

          switch(e.keyCode){
            //값1 : 행위1
            case 37: direct = "LEFT"
            break;
            case 38: direct = "TOP"
            break;
            case 39: direct = "RIGHT"
            break;
            case 40: direct = "BOTTOM"
            break;
          }
          //만약 direct에 값이 들어가있다면 user_id 값을 value 값으로 변경
          if(direct) $("#user_id").val(direct);
        }
      })
    </script>
  </head>
  <body>
    <p><input type = "text" name = "user_id" id = "user_id"></p>
  </body>
```
```
    <script>
      $(function(){
        $(".menuWrap_1 a").on("click", function(e){
        e.preventDefault();

        $(".menuWrap_1 a")
        .css({"background-color":"#fff"});

        $(this)
        .css({"background-color":"#ff0"});
      });

        $(".menuWrap_2 a").on("click", function(e){
        e.preventDefault();

        $(".menuWrap_2 a")
        .css({"background-color":"#fff"});

        var idx = $(".menuWrap_2 a").index(this);
        $(".menuWrap_2 a").eq(idx)
        .css({"background-color":"#0ff"});

        $(".idxNum").text(idx); //텍스트 값 표시
      });
    })
    </script>
```
- delegate : 선택한 요소의 하위 요소에 이벤트 등록
  - 등록 이후에는 동적으로 생성된 요소와 복제된 요소에도 등록
- one : 이벤트가 1회만 발생
```
    <script>
      $(function(){
        $(".btn_wrap").delegate(".btn_1.on",
        "mouseover focus", function(){
          alert("HELLO!");
        });
        $(".btn_1").addClass("on");
        $(document).one("mouseover focus",
        ".btn_2.on", function(){
          alert("WELCOME!");
        });
        $(".btn_2").addClass("on");
      })
    </script>
```
- 이벤트 해지
```
    <script src="./jquery.js"></script>
    <script>
      $(function(){
        $(".btn_1").on("mouseover", function(){
          alert("HELLOOO!");
        })

        $(document).on("mouseover", ".btn_2", function(){
          alert("WELCOME!");  // 버튼 생성한 곳에 등록
        })

        var btn_2 = $("<p><button class=\"btn_2\">버튼2</button></p>");
        $("#wrap").append(btn_2); // 버튼 생성

        $(".del_1").on("click", function(){
          $(".btn_1").off("mouseover");
        });

        $(".del_2").on("click", function(){
          $(document).off("mouseover", ".btn_2");
        });
      })
    </script>
  </head>
  <body>
    <div id = "wrap">
      <p><button class = "btn_1">버튼1</button></p>
    </div>
    <p>
      <button class = "del_1">버튼1 이벤트 해지</button>
      <button class = "del_2">버튼2 이벤트 해지</button>     
    </p>
```
## 0221 강의

# animate

- 요소 선택, 메소드, 스타일, 소요시간, 투명도, 콜백함수
- 소요시간 : 1000=1초, linear 일정한 속도
- 대입연산자 : +=50px은 50px씩 계속 이동, 50px은 여러번 클릭해도 50px만 이동
  
```
  <title>효과와 애니메이션</title>
  <script src="./js/jquery.js"></script>
  <script>
    $(function(){
      $(".btn1").on("click", function(){
        $(".txt1").animate({
          marginLeft:"500px",
          fontSize:"50px"
        },
        2000, "linear", function (){
          alert("모션 완료!");
        });
      });
      $(".btn2").on("click", function(){
        $(".txt2").animate({
          marginLeft:"+=50px",
          },1000);
      });
    })
  </script>
  <style>
    .txt1{background-color: #fbc0e1;}
    .txt2{background-color: lemonchiffon;}
  </style>
</head>
<body>
  <p><button class = "btn1">버튼1</button></p>
  <span class = "txt1">"500px" 이동</span>
  <p><button class = "btn2">버튼2</button></p>
  <span class = "txt2">"50px" 이동</span>
</body>
```
# queue

- queue : 특정 요소에서 애니메이션이 실행되는 순서로 저장되어 있는 공간. 큐에 저장된 목록에서 순번대로 애니메이션을 하나씩 꺼내어 실행하고, 실행된 애니메이션은 제거
  - .animate() 중간에 추가하게 되면 .queue() 까지만 실행되고 그 뒤에 대기중인 대기열은 자동으로 취소. 일종의 break 역할
- dequeue : 다음 애니메이션까지 작동되도록 함
- clearQueue : 현재 실행 중인 애니메이션은 제외하고 대기중인 애니메이션만 모두 제거

<예제1>
```
  <script>
    $(function(){
      $(".txt1")
      .animate({marginLeft:"200px"},1000)
      .animate({marginTop:"200px"},1000)
      .queue(function(){
        $(this).css({background:"red"});
        $(this).dequeue();
      })
      .animate({marginLeft:0},1000)
      .animate({marginTop:0},1000)
    })
  </script>
  <style>
    *{margin:0;}
    .txt1{width: 50px; text-align: center;
    background-color: antiquewhite;}
  </style>
  </head>
  <body>
    <p class = "txt1">내용1</p>
  </body>
```

<예제2>
```
  <script>
    $(function(){
      $(".txt1")
      .animate({marginLeft:"100px"},1000)
      .animate({marginLeft:"400px"},1000)
      .animate({marginLeft:"700px"},1000);
      $(".txt2")
      .animate({marginLeft:"100px"},1000)
      .animate({marginLeft:"400px"},1000)
      .animate({marginLeft:"700px"},1000);
      $(".txt2").clearQueue(); 
    })
  </script>
  <style>
    .txt1, .txt2{width: 50px; text-align: center;
    background-color: antiquewhite;}
    .txt2 {background-color: cadetblue;}
  </style>
  </head>
  <body>
    <p class = "txt1">내용1</p>
    <p class = "txt2">내용2</p>
  </body>
```
# 비동기식
- 동기식 : 값을 넣어서 응답이 오는 경우 실행
- 비동기식 : 

- load()메서드 : 사용자가 지정한 URL 주소에 데이터 전송하고 외부 콘텐츠를 요청하여 가져올 때 사용
- ajax()메서드 : 
