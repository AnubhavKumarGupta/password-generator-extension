const genBtn = document.getElementById("generatebtn"); // Get the generate button
const copyBtn = document.getElementById("copyBtn"); // Get the copy button
const textField = document.getElementById("textField"); // Get the text field
const copyMessage = document.getElementById("copyMessage"); // Get the copy message

copyBtn.addEventListener("click", copyPassword); // Add event listener to the copy button
genBtn.addEventListener("click", generatePassword); // Add event listener to the generate button

function generatePassword() {
  // Function to generate a random password
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=*~`!@#$%^&*()_-+={[}]|:;<,>.?/"; // Characters to be used in the password
  const passLength = 16; // Length of the password
  let password = ""; // Variable to store the password
  for (let i = 0; i < passLength; i++) { // Loop to generate the password
    let index = Math.random() * characters.length; // Generate a random index
    password += characters.charAt(index); // Add the character at the generated index to the password
  } // End of loop
  textField.value = password; // Set the password to the text field
}

function copyPassword() { // Function to copy the password to the clipboard
  if (textField.value != "") { // Check if the text field is not empty
    navigator.clipboard.writeText(textField.value); // Copy the password to the clipboard
    copyMessage.style.display = "block"; // Display the copied message
    setTimeout(() => { // Set a timeout
      copyMessage.style.display = "none"; // Hide the copied message after 0.5 seconds
    }, 500); // End of timeout
  } else { // If the text field is empty display an alert message to the user to generate a password first before copying it to the clipboard 
    window.alert("Click the generate button"); // Alert message 
  } // End of if statement
} // End of function
