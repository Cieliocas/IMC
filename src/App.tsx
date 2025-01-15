import React, { useState } from 'react';
import { calculateIMC } from './utils/calculateIMC';
import { FormData, IMCData } from './types/imc';
import { Form } from './components/Form/Form';
import { Result } from './components/Result/Result';
import { ClassificationTable } from './components/ClassificationTable/ClassificationTable';
import styles from './App.module.css';

export default function App() {
  const [formData, setFormData] = useState<FormData>({ height: 0, weight: 0 });
  const [result, setResult] = useState<IMCData | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: parseFloat(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const imcData = calculateIMC(formData);
    setResult(imcData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <h1 className={styles.title}>Calculadora de IMC</h1>
          <Form
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
          {result && <Result result={result} />}
        </div>
        <div className={styles.tableContainer}>
          <ClassificationTable />
        </div>
      </div>
    </div>
  );
}

