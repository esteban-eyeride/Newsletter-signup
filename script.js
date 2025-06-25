const form = document.getElementById("form");
const input = document.getElementById("email");
const errorLAbel = document.getElementById("error");
const formContainer = document.getElementById("formContainer");
const dialogue = document.getElementById("dialogue");
const dialogueEmail = document.getElementById("dialogueEmail")
const dismissBtn = document.getElementById("dismiss")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailAnswer = input.value;

    emailValidation(emailAnswer)
})

function emailValidation (email) {
    if (typeof email ==! "string" || email === "") {
        errorLAbel.textContent = "This field cannot be empty.";
        input.classList.add("inputError")
    }
    else if (!email.includes("@")) {
        errorLAbel.textContent = "An email must contain '@'.";
        input.classList.add("inputError")
    }
    else {
        formContainer.classList.add("hidden")
        dialogue.classList.remove("hidden")
        dialogueEmail.textContent = email;
    }
};

input.addEventListener("input", () =>{
    input.classList.remove("inputError")
    errorLAbel.textContent = "";
});

dismissBtn.addEventListener("click", () => {
    formContainer.classList.remove("hidden")
    dialogue.classList.add("hidden")
    input.value = "";
})