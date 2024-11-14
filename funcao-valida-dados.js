/* 
Caso 1: Só quero validar se for número
Caso 2: Quero validar se é número e é inteiro
Caso 3: Quero validar se é número e é fracinário
Caso 4: Quero validar se é número, se é inteiro e se está dentro de um intervalo
Caso 5: Quero validar se é número, se é fracionário e se está dentro de um intervalo
*/

function validaNumero(num, inteiro = null, limiteInferior = null, limiteSuperior = null) {
    let resultado;
    if ((inteiro) == null && (limiteInferior) == null && (limiteSuperior) == null) {
        resultado = !isNaN(num);
        console.log(`Caso 1: Só quero validar se for número \n resultado: ${resultado}`);
        return resultado;
    } else if (inteiro == true && (limiteInferior) == null && (limiteSuperior) == null) {
        resultado = !isNaN(num) && Number.isInteger(num);
        console.log(`Caso 2: Quero validar se é número e é inteiro \n resultado: ${resultado}`);
        return resultado;
    } else if (inteiro == false && (limiteInferior) == null && (limiteSuperior) == null) {
        resultado = !isNaN(num) && !Number.isInteger(num);
        console.log(`Caso 3: Quero validar se é número e é fracinário \n resultado: ${resultado}`)
        return resultado;
    } else if (inteiro == true && !isNaN(limiteInferior) && !isNaN(limiteSuperior)) {
        resultado = !isNaN(num) && Number.isInteger(num) && num >= limiteInferior && num <= limiteSuperior;
        console.log(`Caso 4: Quero validar se é número, se é inteiro e se está dentro de um intervalo \n resultado: ${resultado}`);
        return resultado;
    } else {
        resultado = !isNaN(num) && !(Number.isInteger(num)) && num >= limiteInferior && num <= limiteSuperior;
        console.log(`Caso 5: Quero validar se é número, se é fracionário e se está dentro de um intervalo \n resultado: ${resultado}`);
        return resultado;
    }
  }

validaNumero(10)
validaNumero(10, true)
validaNumero(10.85, false)
validaNumero(10, true, 1, 10)
validaNumero(10, false, 1, 10)
