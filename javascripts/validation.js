function onLoad() {
  const form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", showConfirmationMessage);

  function showConfirmationMessage(e) {
    e.preventDefault();

    if (emailValidation() === false) {
      const errorMessage = form.appendChild(errorMessageParagraph());

      setTimeout(function () {
        errorMessage.remove();
      }, 3000);
      return false;

      function errorMessageParagraph() {
        const p = document.createElement("p");
        p.innerText = "メールアドレスが一致しません";
        p.classList.add("alert");
        return p;
      }
    }

    const name = form.name.value;
    const confirmationMessage = `${name}さん、本当に送信しますか？`;
    const confirmationResult = window.confirm(confirmationMessage);

    if (confirmationResult === false) {
      window.alert("キャンセルしました");
      e.preventDefault();
    } else {
      form.submit();
    }

    function emailValidation() {
      const email = e.currentTarget.email.value;
      const email_confirm = e.currentTarget.email_confirm.value;

      return email === email_confirm;
    }
  }
}

window.onload = onLoad;
