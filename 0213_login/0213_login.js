let id_box = document.getElementById("input.id")[0];
let pw_box = document.getElementById("input.pw")[0];
let login_btn = document.getElementById("button")[0];
let errStack = 0;

console.log(login_btn);

login_btn.addEventListener("click", logIN);
push_id.addEventListener("keyup", activeEvent);
push_pw.addEventListener("keyup", activeEvent);

function logIN() {
  let push_id = id_box.value;
  let push_pw = pw_box.value;
  if (push_id == "") {
    alert("아이디와 비밀번호를 입력해주세요.");
  } else if (push_id == "digi" && push_pw == "campus") {
    alert(push_id + "님 환영합니다.");
    location.reload();
  } else if (push_id == "digi") {
    alert("패스워드가 잘못 입력되었습니다.");
    errStack++;
  } else {
    alert("존재하지 않는 계정입니다.");
    errStack++;
    location.reload();
  }

  if (errStack >= 3) {
    alert("비밀번호를 3회 이상 틀리셨습니다. 비밀번호 찾기를 이용해주세요.");
  }
}

function activeEvent() {
  switch (!(id_box.value && pw_box.value)) {
    case true:
      button.disabled = true;
      break;
    case false:
      button.disabled = false;
      break;
  }
}
