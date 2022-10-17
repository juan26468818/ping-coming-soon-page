
const button = document.getElementById("submit")
const input = document.getElementById("input-s")
const patternErr = document.getElementById("valid-msg")
const emptyErr = document.getElementById("empty-msg")

button.addEventListener("click", ()=>{
    console.log(input.value)
    input.className += " invalid";
    if(input.value === ""){
        patternErr.className += " pattern-error"
        emptyErr.classList.remove("empty")
    }else{
        emptyErr.className += " empty"
        patternErr.classList.remove("pattern-error")
    }
})