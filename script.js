"use strict";
// Select Elements
const submitBtn = document.getElementById("submitBtn");
const input = document.getElementsByTagName("input")[0];
const invalidFeedback = document.getElementsByClassName("invalid-feedback")[0];
const invalidFeedbackIcon = document.getElementsByClassName("invalid-icon")[0];

// Handle Input Validation
var emailRegexp = /^[^@]+@[^@]+\.[^@]+$/;

submitBtn.addEventListener("click", () => {
    if (input.value !== "" && emailRegexp.test(input.value)){
        // Popup Toast
        Swal.fire({
            toast: true,
            text: "Thank you for filling our form",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
            position: "top",
        });
        input.value = ""
        input.classList.remove("invalid");
        invalidFeedback.classList.add("hide");
        invalidFeedbackIcon.classList.add("hide");
    }
    else{
        input.value = ""
        input.classList.add("invalid");
        invalidFeedback.classList.remove("hide");
        invalidFeedbackIcon.classList.remove("hide");
    }
})



// function validate(element, regexp){
//   if (regexp.test(element.value)){
//     element.classList.add("is-valid");
//     element.classList.remove("is-invalid");
//   }
//   else {
//     element.classList.add("is-invalid");
//     element.classList.remove("is-valid");
//   }
// }





