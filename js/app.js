//Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById ('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message');

//Event Listeners

eventListeners();

function eventListeners(){
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    //validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}

//Functions

//App Initialization
function appInit() {
    //disable the send button on load
    sendBtn.disabled = true;

}

//Validate the fields
function validateField() {
    let errors;

    //Validate the length of the field
    validateLength(this)
}