// Função para gerar senhas
function generatePassword() {
    const length = 16;
    const charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    const passwordElement = document.getElementById("password");
    passwordElement.textContent = password;


}

// Função para copiar senhas
function copyPassword() {
    const passwordElement = document.getElementById("password");
    const passwordText = passwordElement.textContent;

    // Cria um elemento de input temporário para copiar o texto
    const tempInput = document.createElement("input");
    tempInput.value = passwordText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Exibe a mensagem "Senha copiada!" abaixo da senha
    passwordElement.textContent = passwordText + " - Senha copiada!";
}

// Configura os manipuladores de eventos após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    const passwordElement = document.getElementById("password");
    const buttonElement = document.querySelector("button");

    passwordElement.addEventListener("click", copyPassword);
    buttonElement.addEventListener("click", generatePassword);

    // Chama a função para gerar a senha inicialmente
    generatePassword();
});
