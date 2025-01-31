let btn = document.querySelector(".btn")
btn.addEventListener("click",function() {
    event.preventDefault()
    password.classList.remove("valid","invalid")
    confirmPassword.classList.remove("valid","invalid")
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm");
    if (password.value == confirmPassword.value){
        password.classList.add('valid')
        confirmPassword.classList.add('valid')
    }else{
        confirmPassword.classList.add('invalid')
        password.classList.add('invalid')
    }
})


