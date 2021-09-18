console.log("--------------------------CreateBotonRobot.JS-------------------------------------------- ");

alert('se asignaran los valores de var y value');
console.log("se inicio la funcion cambiar");

document.getElementsByClassName('editablesection')[0].value = "carName";
document.getElementsByClassName('editablesection')[1].value = "Volvo";

var valor1 = document.getElementsByClassName('editablesection')[0].value;
var valor2 = document.getElementsByClassName('editablesection')[1].value;
var prueba = "prueba";

console.log("--------------------------FinBotonRobot.JS-------------------------------------------- ");

if (valor1 == "carName") {
    envioSMS(valor1, valor2);

}

function envioSMS(valor1, valor2, msm) {
    console.log("entro envio sms" + valor1 + " " + valor2 + " " + msm);
    sms = {
        'valor1': valor1,
        'valor2': valor2,
        'msm': msm,
    };
    hi = {
        'prueba': prueba,
    }

    try {
        setTimeout(function() {
            console.log(sms);
            console.log(typeof sms);
            chrome.runtime.sendMessage({ accion: "sms", datos: sms });
        }, 3000);
    } catch (error) {
        console.error(error);
        alert('Mensaje NO enviado, por favor comuniquese con su supervisor.' + error);
    };
}