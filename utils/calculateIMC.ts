import { IMCData, FormData } from '../types/imc';

export function calculateIMC({ height, weight }: FormData): IMCData {
    const imc = weight / ((height / 100) ** 2);
    let classification: string;

    if (imc < 18.5) {
        classification = "Abaixo do peso";
    } else if (imc < 24.9) {
        classification = "Peso normal";
    } else if (imc < 29.9) {
        classification = "Sobrepeso";
    } else if (imc < 34.9) {
        classification = "Obesidade grau 1";
    } else if (imc < 39.9) {
        classification = "Obesidade grau 2";
    } else {
        classification = "Obesidade grau 3";
    }

    return { imc, classification };
}

