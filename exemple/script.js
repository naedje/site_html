function Hello() {
    const Prenom = document.getElementById("Prenom");
    const message = document.getElementById("message");

    if (Prenom.value === "Jane") {
        message.innerText = `J'adore ce prénom !`;
    } else {
        message.innerText = `Bonjour ${Prenom.value} !`;
    }
}