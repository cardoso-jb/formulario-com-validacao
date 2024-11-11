const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkFinal();
    
})

nome.addEventListener("blur", () => {
    checkInputNome();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

telefone.addEventListener("blur", () => {
    checkInputTelefone();
})
mensagem.addEventListener("blur", () => {
    checkInputMsg();
})

function checkInputNome () {
    const nomeValor = nome.value;

    if(nomeValor ==="") {
        erroInput(nome, "Campo Obrigatório")
    } else {
        const formItem = nome.parentElement;
        formItem.className = "form-content preenchido"
    }
}

function checkInputEmail () {
    const emailValor = email.value;

    if (emailValor ==="") {
        erroInput(email, "Campo Obrigatório")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content preenchido"
    }
}

function checkInputTelefone () {
    const telefoneValor = telefone.value;

    if (telefoneValor === "") {
        erroInput(telefone, "Campo Obrigatório")
    } else {
        const formItem = telefone.parentElement;
        formItem.className = "form-content preenchido"
    }
}

function checkInputMsg () {
    const msgValor = mensagem.value;

    if (msgValor === "") {
        erroInput (mensagem, "Campo Obrigatório")
    } else {
        const formItem = mensagem.parentElement;
        formItem.className = "form-content preenchido"
    }
}

function checkFinal () {
    checkInputNome();
    checkInputEmail();
    checkInputTelefone();
    checkInputMsg();

    const formItems = form.querySelectorAll(".form-content");

    const validado = [...formItems].every((item) => {
        return item.className === "form-content preenchido"
    });

    if(validado) {
        alert("Enviando Com Sucesso!!!")
    }

}

function erroInput (input, mensagem) {
    const formItem = input.parentElement;
    const textoMensagem = formItem.querySelector("a");

    textoMensagem.innerText = mensagem;

    formItem.className = "form-content error"
}