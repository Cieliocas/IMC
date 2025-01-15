import React from 'react';
import styles from './Result.module.css';
import { IMCData } from '../../../types/imc';
interface ResultProps {
    result: IMCData;
}

export const Result: React.FC<ResultProps> = ({ result }) => {
    const getClassificationColor = (classification: string) => {
        switch (classification) {
            case "Abaixo do peso":
                return styles.underweight;
            case "Peso normal":
                return styles.normal;
            case "Sobrepeso":
                return styles.overweight;
            case "Obesidade grau 1":
                return styles.obese1;
            case "Obesidade grau 2":
                return styles.obese2;
            case "Obesidade grau 3":
                return styles.obese3;
            default:
                return "";
        }
    };

    return (
        <div className={styles.result}>
            <h2 className={styles.title}>Resultado:</h2>
            <p className={styles.imc}>IMC: {result.imc.toFixed(2)}</p>
            <p className={`${styles.classification} ${getClassificationColor(result.classification)}`}>
                Classificação: {result.classification}
            </p>
        </div>
    );
};

