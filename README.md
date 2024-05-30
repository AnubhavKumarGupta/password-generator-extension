# password-generator-extension
An extension that generates secure passwords and allows users to copy them to the clipboard.

#


## Overview
This project is a simple web-based password generator extension. It allows users to generate random, secure passwords and copy them to the clipboard with a single click. The interface is built using HTML, CSS, and JavaScript, with additional styling from Bootstrap and Font Awesome.

# 

## Features
1. **Password Generation**: The app generates a random password containing uppercase and lowercase letters, digits, and special characters. The generated password is 16 characters long.
2. **Copy to Clipboard**: Users can copy the generated password to their clipboard by clicking a copy button. A "Copied!" message will briefly appear to confirm the action.
3. **Responsive Design**: The application is designed to be responsive and user-friendly on various devices, thanks to Bootstrap.

# 

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the web page, with additional styles from Bootstrap.
- **JavaScript**: For handling the functionality of password generation and clipboard copying.
- **Bootstrap**: For responsive design and pre-made styles.
- **Font Awesome**: For icons used in the buttons.

# 

## How It Works
1. **User Interface**: 
   - An input field displays the generated password.
   - A "Generate Password" button triggers the creation of a new random password.
   - A "Copy" button allows the user to copy the password to the clipboard.
   - A message ("Copied!") appears momentarily to confirm the copying action.

2. **Password Generation**:
   - When the "Generate Password" button is clicked, a JavaScript function generates a random 16-character password using a set of allowed characters.
   - The generated password is displayed in the input field.

3. **Copy to Clipboard**:
   - When the "Copy" button is clicked, the JavaScript `copyPassword` function copies the content of the input field to the clipboard.
   - A "Copied!" message appears below the input field for 2 seconds.

# 

## How to Use
1. Open the application in a web browser.
2. Click the "Generate Password" button to create a new random password.
3. Click the "Copy" button to copy the generated password to the clipboard.
4. The "Copied!" message will appear to confirm the password has been copied.

This simple yet functional password generator is useful for anyone needing secure passwords quickly and easily.
