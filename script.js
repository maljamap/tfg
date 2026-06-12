function analizar() {
    
    let mensaje = document.getElementById("mensaje").value;
    let mensajeAnalisis = mensaje.toLowerCase();
    
    let sospechoso = 0;
    let bloqueado = 0;
    let urlSospechosa = false;
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
    let urls = mensajeAnalisis.match(regexURL);
    
    if (urls) {
        urls.forEach(url => {
            if (
                url.includes("bit.ly") ||
                url.includes("tinyurl") ||
                url.length < 10 ||
                url.length > 40
            ) {
                sospechoso++;
                urlSospechosa = true;
            }
        });
    }
    
    let contador = 0;
    
    palabrasClave.forEach(palabra => {
        if (mensajeAnalisis.includes(palabra)) {
            contador++;
        }
    });
    
    console.log("Palabras detectadas:", contador);
    
    if (contador >= 1) {
        sospechoso++;
    }
    
    if (contador >= 3) {
        bloqueado = 1;
    }

    if (urlSospechosa && contador >= 1) {
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
    let resultadoElemento = document.getElementById("resultado");
    
    if (resultado === "MENSAJE SEGURO") {
        resultadoElemento.style.color = "green";
    }
    
    if (resultado === "MENSAJE SOSPECHOSO") {
        resultadoElemento.style.color = "orange";
    }
    if (resultado === "MENSAJE BLOQUEADO") {
        resultadoElemento.style.color = "red";
    }
    
    resultadoElemento.innerText = resultado;
    document.getElementById("mensajeMostrado").innerText = mensaje;
}
