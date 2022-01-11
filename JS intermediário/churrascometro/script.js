/* Carne -  400 gr por pessoa + de 6 horas - 650
    Cerveja - 1200ml por Pessoa + de 6 horas-  2000ml
    Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
    Crianças  - 200 gr  e 600 ml de refri/agua

*/

var adultos = 0.400;
var Cerveja = 1.200;
var duracao = 0;
var criancasCarne = adultos / 2;
var criancasRefri = Cerveja / 2;
var refrigerante = 1.000;


function Calcular() {
    let a = document.getElementById("adultos").value;
    duracao = document.getElementById("duracao").value;
    let b = document.getElementById("criancas").value;

    if (duracao >= 6) {
        adultos = 0.650;
        Cerveja = 2.000;
        refrigerante = 1.500;
    }

    let result = a * adultos;
    let resultbeer = a * Cerveja;
    let resultrefri = a * refrigerante;
    let resultCriancasCarne = b * criancasCarne;
    let resultCriancasRefri = b * criancasRefri;
    result += resultCriancasCarne;
    resultrefri += resultCriancasRefri;


    if (result > 1.000) {
        document.getElementById("Carnekg").innerHTML = ` Você precisará de ${result.toFixed(1)} Quilos de carne`;
    }
    else {
        document.getElementById("Carnekg").innerHTML = ` Você precisará de ${result.toFixed(3)} Gramas de carne`;
    }

    // document.getElementById("Carnekg").innerHTML = ` Você precisará de Kg ${result.toFixed(2)} de carne`;
    document.getElementById("cerveja").innerHTML = `Você precisará de ${resultbeer.toFixed(0)} Litros de cerveja`;
    document.getElementById("refrigerante").innerHTML = `Você precisará de ${resultrefri.toFixed(0)} Litros de refrigerante`;
}
