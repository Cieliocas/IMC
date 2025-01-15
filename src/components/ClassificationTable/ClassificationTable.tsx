import React from 'react';
import styles from './ClassificationTable.module.css';

const classifications = [
    { range: "Menor que 18.5", classification: "Abaixo do peso", colorClass: styles.underweight },
    { range: "18.5 - 24.9", classification: "Peso normal", colorClass: styles.normal },
    { range: "25.0 - 29.9", classification: "Sobrepeso", colorClass: styles.overweight },
    { range: "30.0 - 34.9", classification: "Obesidade grau 1", colorClass: styles.obese1 },
    { range: "35.0 - 39.9", classification: "Obesidade grau 2", colorClass: styles.obese2 },
    { range: "Maior que 40.0", classification: "Obesidade grau 3", colorClass: styles.obese3 },
];

export const ClassificationTable: React.FC = () => {
    return (
        <div className={styles.tableContainer}>
            <h2 className={styles.title}>Classificações do IMC</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    {classifications.map((item, index) => (
                        <tr key={index}>
                            <td>{item.range}</td>
                            <td className={item.colorClass}>{item.classification}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

