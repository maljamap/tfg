javascript id="j4p8mx"
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

        urls.forEach(url => {

            if (
                url.includes("bitly") ||
                url.includes("tinyurl") ||
                url.length > 40
            ) {
                sospechoso++;
            }

        });
    }

    let contador = 0;

    palabrasClave.forEach(palabra => {

        if (mensaje.includes(palabra)) {
            contador++;
        }

    });

    console.log("Palabras detectadas:", contador);

    if (contador >= 1) {
        sospechoso++;
    }

    if (contador >= 2) {
        bloqueado = 1;
    }

    let resultado = "";

    if (bloqueado === 1) {

        resultado = "MENSAJE BLOQUEADO";

    } else if (sospechoso >= 1) {

        resultado = "MENSAJE SOSPECHOSO";

    } else {

        resultado = "MENSAJE SEGURO";
    }

    document.getElementById("resultado").innerText = resultado;
}
