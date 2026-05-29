javascript
function analizar() {

    let mensaje = document.getElementById("mensaje").value.toLowerCase();

    let sospechoso = 0;
    let bloqueado = 0;

    let palabrasClave = [
        "urgente",
        "urgencia",
        "caducidad",
        "caduca",
        "renovar",
        "renovación",
        "suscribir",
        "suscripción",
        "dinero",
        "banco",
        "tarjeta",
        "paquete",
        "pedido",
        "pago",
        "click",
        "clic",
        "cambio"
    ];

    let regexURL = /(https?:\/\/[^\s]+)/g;
    let urls = mensaje.match(regexURL);

    if (urls) {
        let urlSospechosa = false;

        urls.forEach(url => {
            if (
                (url.includes("bitly") || url.includes("tinyurl")) &&
                (url.length < 10 || url.length > 40)
            ) {
                urlSospechosa = true;
            }
        });

        if (urlSospechosa) {
            sospechoso++;
        }

    } else {
        document.getElementById("resultado").innerText = "MENSAJE SEGURO";
        return;
    }

    let contador = 0;

    palabrasClave.forEach(p => {
        if (mensaje.includes(p)) {
            contador++;
        }
    });

    if (contador >= 1) {
        sospechoso++;
    }

    if (contador >= 2) {
        bloqueado = 1;
    }

    let resultado = "";

    if (bloqueado === 1) {
        resultado = "MENSAJE BLOQUEADO";

    } else if (sospechoso === 1) {
        resultado = "MENSAJE SOSPECHOSO";

    } else if (sospechoso === 0) {
        resultado = "MENSAJE SEGURO";

    } else {
        resultado = "MENSAJE SOSPECHOSO";
    }

    document.getElementById("resultado").innerText = resultado;
}
