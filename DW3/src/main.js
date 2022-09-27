

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const CriarContaForm = document.querySelector("#cadastro");
    const RecuperarSenha = document.querySelector('#senharecover');

    document.querySelector("#linkCadastro").addEventListener("click", e  => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        CriarContaForm.classList.remove("form-hidden");
        RecuperarSenha.classList.add("form-hidden");
    });



    document.querySelector("#linkLogin").addEventListener("click", () => {
        loginForm.classList.remove("form-hidden");
        CriarContaForm.classList.add("form-hidden");
        RecuperarSenha.classList.add("form-hidden");

    });

    document.querySelector("#linkSenha").addEventListener("click", () => {
        RecuperarSenha.classList.remove("form-hidden");
        CriarContaForm.classList.add("form-hidden");
        loginForm.classList.add("form-hidden");

    });

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.lenght < 10){
                setInputError(inputElement, "Nome de Usuário deve conter no mínimo 10 caracteres.");
            }
        });
    });

    loginForm.addEventListener('submit', e => {
        e.preventDefault();
    
        setMensagemForm(loginForm, "erro", "Combinação de Usuário/senha inválida");
    });
    

});



