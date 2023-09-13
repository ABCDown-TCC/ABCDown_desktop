import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from '../layout/FormComponents/Input.module.css';

interface FormData {
  nome: string;
  sexo: string;
  cpf: string;
  numeroTelefone: string;
  dataNascimento: string; // Alteramos para string para corresponder aos dados do seu exemplo
  cep: string;
  endereco: string;
  bairro: string;
  estado: string;
  numero: string;
}

interface InputProps {
  label: string;
  name: keyof FormData;
  type?: string;
  required?: boolean;
  errors: any;
  register: any;
  disabled: boolean; // Tornamos 'disabled' obrigatório
}

function InputField({ label, name, type = 'text', required = false, errors, register, disabled }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.textTitle}>{label}:</label>
      <input
        {...register(name, { required })}
        type={type}
        className={`${styles.inputField} ${styles.inputWithImage}`}
        disabled={disabled} // Usamos a propriedade 'disabled' passada
      />
      {errors[name] && <span>{label} é obrigatório</span>}
    </div>
  );
}

function CreateACountReactHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isDisabled, setIsDisabled] = useState(false); // Inicialmente, todos os campos estão desabilitados

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Nome" name="nome" required errors={errors} register={register} disabled={isDisabled} />
      <InputField label="Sexo" name="sexo" required errors={errors} register={register} disabled={isDisabled} />
      <InputField label="CPF" name="cpf" required errors={errors} register={register} disabled={isDisabled} />
      <InputField label="Data Nascimento" name="dataNascimento" type="date" required errors={errors} register={register} disabled={isDisabled} />
      <InputField label="Número de Telefone" name="numeroTelefone" required errors={errors} register={register} disabled={isDisabled} />
      <InputField label="CEP" name="cep" required errors={errors} register={register} disabled={isDisabled} />
      <InputField label="Endereço" name="endereco" required errors={errors} register={register} disabled={isDisabled} />
      <InputField label="Bairro" name="bairro" required errors={errors} register={register} disabled={isDisabled} />
      <InputField label="Estado" name="estado" required errors={errors} register={register} disabled={isDisabled} />
      <InputField label="Número" name="numero" required errors={errors} register={register} disabled={isDisabled} />
      
      <button type="button" onClick={() => setIsDisabled(!isDisabled)}>
        {isDisabled ? 'Editar' : 'Cancelar'}
      </button>

      {!isDisabled && (
        <button type="submit">Salvar</button>
      )}
    </form>
  );
}

export default CreateACountReactHook;
