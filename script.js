let tag = document.querySelector("h1");
let btn = document.querySelector("button");
let input = document.querySelector("input");
btn.addEventListener("click",
    () => {
        let v = tag.textContent = input.value.toUpperCase();
    }
)