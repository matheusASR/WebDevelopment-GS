function dataehora() {
    const pDate = document.querySelector(".date")
    pDate.innerText = new Date()
}

function login() {
    const user = document.getElementById("user")
    const password = document.getElementById("password")
    const loginBtn = document.getElementById("loginBtn")
    loginBtn.addEventListener("click", (event) => {
        event.preventDefault()
        if (user.value === "Admin" && password.value === "123456") {
            window.location.replace("https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-paracerca-de-828-milhoes-em-2021")
        } else {
            alert("Usuário ou senha inválidos")
        }
    })
}

dataehora()
login()
