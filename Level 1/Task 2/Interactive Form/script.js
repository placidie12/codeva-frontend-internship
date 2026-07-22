const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");



nameInput.addEventListener("blur", function () {
      if (nameInput.value.trim() === "") {

            document.getElementById("nameError").innerText = "Name is required.";

      } 
      else {
            document.getElementById("nameError").innerText = "";
      }
});

emailInput.addEventListener("blur", function () {
      let emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;

      if (!emailInput.value.match(emailPattern)) {
            document.getElementById("emailError").innerText = "Please enter a valid email address.";
      } else {
            document.getElementById("emailError").innerText = "";
      }
});

phoneInput.addEventListener("blur", function(){

    if(phoneInput.value.length !== 10){

        document.getElementById("phoneError").innerHTML =
        "Phone number must contain 10 digits";

    }

    else{

        document.getElementById("phoneError").innerHTML="";

    }

});

passwordInput.addEventListener("blur", function(){


    if(passwordInput.value.length < 8){

        document.getElementById("passwordError").innerHTML =
        "Password must be at least 8 characters";

    }

    else{

        document.getElementById("passwordError").innerHTML="";

    }


});

form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (
             nameInput.value !== "" &&
        emailInput.value !== "" &&
        phoneInput.value.length === 10 &&
        passwordInput.value.length >= 8

) {
     document.getElementById("successMessage").textContent = "Form submitted successfully!";
      message.textContent = "Form submitted successfully!";
      message.style.color = "blue";

       form.reset();
}
else{
      alert("Please fill out the form correctly before submitting.");
}
});