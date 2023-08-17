const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    if (input.value === ""){
        input.classList.add("formErr")
        document.getElementsByClassName("validEmailErr")[0].style.display = "flex";
    } else {
        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("successContainer").style.display = "flex";
        document.getElementsByClassName("successSpan")[0].innerHTML = input.value;
    }
});

document.getElementById("email").addEventListener("input", () => {
    if (!input.value.includes("@")){
        input.classList.add("formErr")
        document.getElementsByClassName("validEmailErr")[0].style.display = "flex";
    } else if (input.value.includes("@")){
        input.classList.remove("formErr")
        document.getElementsByClassName("validEmailErr")[0].style.display = "none";
    }
});

