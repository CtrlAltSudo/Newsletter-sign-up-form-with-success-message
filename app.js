const input = document.querySelector("input");
const form = document.querySelector("form");

document.getElementById("email").addEventListener("change", () => {
    if (!input.value.includes("@")){
        input.classList.add("formErr")
        document.getElementsByTagName("span")[0].style.display = "inline";
    } else {
        input.classList.remove("formErr")
    }
})

