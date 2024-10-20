window.onload = function () {
    document.getElementById("calcular").addEventListener("click", function () {
        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);

        console.log("Peso:", peso);
        console.log("Altura:", altura);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            document.getElementById("result").textContent = "Por favor, insira valores válidos.";
            return;
        }
        let imc = peso / (altura * altura);
        console.log("IMC:", imc);

        document.getElementById("result").textContent = imc.toFixed(2);

        document.getElementById("resultado").classList.add("active");
    });
}