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

    // ----------------------------
    // COMPROBACIÓN DE URLS
    // ----------------------------

    let urlSospechosa = false;

    let regexURL = /(https?:\/\/[^\s]+)/g;
    let urls = mensaje.match(regexURL);

    if (urls) {

        urls.forEach(url => {

            if (
                url.includes("bit.ly") ||
                url.includes("tinyurl") ||
                url.length < 10 ||
                url.length > 40
            ) {

                urlSospechosa = true;
                sospechoso++;

            }

        });

    }

    // ----------------------------
    // CONTADOR DE PALABRAS CLAVE
    // ----------------------------

    let contador = 0;

    palabrasClave.forEach(palabra => {

        if (mensaje.includes(palabra)) {
            contador++;
        }

    });

    console.log("Palabras detectadas:", contador);

    // Una o dos palabras clave
    if (contador >= 1) {
        sospechoso++;
    }

    // Tres o más palabras clave
    if (contador >= 3) {
        bloqueado = 1;
    }

    // URL sospechosa + palabra clave
    if (urlSospechosa && contador >= 1) {
        bloqueado = 1;
    }

    // ----------------------------
    // RESULTADO FINAL
    // ----------------------------

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
