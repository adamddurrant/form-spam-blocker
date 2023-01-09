document.addEventListener("DOMContentLoaded", function () {
  let fullMessage = document.getElementById("formMessage");
  let submitButton = document.getElementById("submitButton");

  fullMessage.addEventListener("input", validate);

  function validate(e) {
    e.preventDefault();
    var textBox = fullMessage.value;

    if (
      !textBox.match(
        /link build|guest post|quality links|da[0-9]|DA[0-9]|https:|http:|hello dear/g
      ) // amend this regex as you like :)
    ) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }
});
