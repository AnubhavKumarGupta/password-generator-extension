const genBtn = document.getElementById("generatebtn"); // yha generate button create kr rhe hum
const copyBtn = document.getElementById("copyBtn");  // yha copy button create kr rhe hum
const textField = document.getElementById("textField"); // yha text field create kr rhe hum
const copyMessage = document.getElementById("copyMessage"); // yha copy message create kr rhe hum

copyBtn.addEventListener("click", copyPassword); // yha add event listener kr rhe hum copy button pr 
genBtn.addEventListener("click", generatePassword); // yha add event listener kr rhe hum generate button pr

function generatePassword() {
  // ye function password generate krne k liye h
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=*~`!@#$%^&*()_-+={[}]|:;<,>.?/"; // ye sub characters h jo password me use honge
  const passLength = 16; // ye password ki length h
  let password = ""; // ye password naam ka variable h jisme password store hoga
  for (let i = 0; i < passLength; i++) { // ye loop h jo password generate krne k liye h
    let index = Math.random() * characters.length; // ye ek random index generate kr rha h
    password += characters.charAt(index); // ye password me characters add kr rha h
  } 
  textField.value = password; // ye password ko text field me show kr rha h
}

function copyPassword() { // ye function password ko copy krne k liye h
  if (textField.value != "") { // check kr rhe ki text field empty hai ya nhi
    navigator.clipboard.writeText(textField.value); // Copy the password to the clipboard
    copyMessage.style.display = "block"; // Display the copied message
    setTimeout(() => { // Set a timeout
      copyMessage.style.display = "none"; // Hide the copied message after 0.5 seconds
    }, 500); // 0.5 seconds 
  } else { // ydi text field empty hai to ek alert message show krega ki password generate kro phle 
    window.alert("Click the generate button"); // ye alert message show kr rha h
  } 
} 
