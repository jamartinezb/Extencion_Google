var valor1E = "",
    valor2E = "";

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) { //Se lanza cuando una pestaña se actualiza

    console.log('ingreso');
    if (changeInfo.url == "https://www.google.com.co/") {
        alert('se direccionara a la pagina de la prueba');

        chrome.tabs.executeScript(tabId, {
            code: 'location.href = "https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1"' //Javascript

        });
    }


    if (changeInfo.title) {
        if (tabId.status = "complete") {
            if (changeInfo.title.includes("Exercise")) {
                chrome.tabs.executeScript(tabId, {
                    file: 'js/w3school.js'
                });
            }
        }
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    if (confirm("¿Desea reiniciar la extensión?")) {
        chrome.runtime.reload();

    }
});
console.log('ingreso mensaje');

chrome.runtime.onMessage.addListener(
    function(request) {
        switch (request.accion) {

            case "sms":
                valor1E = request.datos['valor1'];
                valor2E = request.datos['valor2'];
                llamarApi()
                console.log(valor1E + valor2E)
                console.log('el mensaje se recibio con exito')

            case "hi":
                console.log('falto un dato');
                break;


        }
    });




function llamarApi() {

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);

            var api = (this.responseText);
            alert(api);

        }

    });

    xhr.open("POST", "https://controlroom.grupodigitex.com:8010/RobotWS.svc/test");

    xhr.send();
}