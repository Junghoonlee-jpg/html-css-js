const form = document.querySelector("body > form");

// form.style.border = "1px solid";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const birth = document.querySelector("#b");

  const userid = document.querySelector("#i");

  const password = document.querySelector("#p");

  const confirmPassword = document.querySelector("#c");

  if (birth.length !== 8) {
    alert("생년월일을 다시 입력하세요!");
    return birth.focus();
  }
  if (userid.length === 0) {
    alert("아이디를 다시 입력하세요!");
    return userid.focus();
  }
  if (password.length < 8) {
    alert("비밀번호를 다시 입력하세요!");
    return password.focus();
  }
  if (password.length === confirmPassword.length) {
    alert("비밀번호가 같지 않습니다!");
    return confirmPassword.focus();
  }

  const message = `정말로 회원가입을 하시겠습니까?`;
  if (confirm(message)) {
    alert("축하합니다! 회원가입이 완료되었습니다!");
  } else {
    alert("다시 한번 생각하시고 회원가입을 진행해주세요!");
  }
});
