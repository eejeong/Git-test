console.log(login_btn);

id_box.addEventListener("keyup", activeEvent);
pw_box.addEventListener("keyup", activeEvent);
pw_box.addEventListener("keyup", enter);
login_btn.addEventListener("click", logIN);

function activeEvent() {
  switch (!(id_box.value && pw_box.value)) {
    case true:
      login_btn.disabled = true;
      button.classList.add("inputDisabled");
      button.classList.remove("inputAbled");
      break;
    case false:
      login_btn.disabled = false;
      button.classList.add("inputAbled");
      button.classList.remove("inputDisabled");
      break;
  }
}

function enter(e) {
  if (e.keyCode === 13) {
    logIN();
  }
}

function logIN() {
  let push_id = id_box.value;
  let push_pw = pw_box.value;
  let saveid = checked.checked;
  if (push_id == "digi" && push_pw == "1234") {
    alert(push_id + "님 환영합니다.");
    window.location.href = "실습과제2_장은정.html";
  } else if (push_id == "digi") {
    alert("패스워드가 잘못 입력되었습니다.");
    errStack++;
    if (saveid) {
      pw_box.value = "";
      pw_box.focus();
      errStack++;
    } else {
      id_box.value = "";
      pw_box.value = "";
      id_box.focus();
      errStack++;
    }
  } else {
    alert("존재하지 않는 계정입니다.");
    id_box.value = "";
    pw_box.value = "";
    errStack++;
  }
  if (errStack >= 3) {
    alert("비밀번호를 3회 이상 틀리셨습니다. 비밀번호 찾기를 이용해주세요.");
  }
}
