import React from 'react';
import styles from './Form.module.css';
import { FormData } from '../../../types/imc';

interface FormProps {
    formData: FormData;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export const Form: React.FC<FormProps> = ({ formData, onInputChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <label htmlFor="height" className={styles.label}>
                    Altura (cm)
                </label>
                <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height || ''}
                    onChange={onInputChange}
                    required
                    className={styles.input}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="weight" className={styles.label}>
                    Peso (kg)
                </label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight || ''}
                    onChange={onInputChange}
                    required
                    className={styles.input}
                />
            </div>
            <button type="submit" className={styles.button}>
                Calcular IMC
            </button>
        </form>
    );
};

