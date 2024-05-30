const genBtn = document.getElementById("generatebtn");
const copyBtn = document.getElementById("copyBtn");
const textField = document.getElementById("textField");
const copyMessage = document.getElementById("copyMessage"); 

copyBtn.addEventListener("click", copyPassword);
genBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=*~`!@#$%^&*()_-+={[}]|:;<,>.?/";
  const passLength = 16;
  let password = "";
  for (let i = 0; i < passLength; i++) {
    let index = Math.random() * characters.length;
    password += characters.charAt(index);
  }
  textField.value = password;
}

function copyPassword() {
  if (textField.value != "") {
    navigator.clipboard.writeText(textField.value);
    copyMessage.style.display = "block"; // Show the copied message
    setTimeout(() => {
      copyMessage.style.display = "none"; // Hide the copied message after 0.5 seconds
    }, 500);
  } else {
    window.alert("Click the generate button");
  }
}
