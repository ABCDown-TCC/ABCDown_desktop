import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from '../layout/FormComponents/Input.module.css';

interface FormData {
  nome: string;
  sexo: string; // Add the sexo attribute to FormData
  cpf: string;
  numeroTelefone: string;
  dataNascimento: Date;
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
}

function InputField({ label, name, type = 'text', required = false, errors, register }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.textTitle}>{label}:</label>
      <input {...register(name, { required })} type={type} className={`${styles.inputField} ${styles.inputWithImage}`} />
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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Nome" name="nome" required errors={errors} register={register} />
      <InputField label="Sexo" name="sexo" required errors={errors} register={register} /> {/* Add the gender input field */}
      <InputField label="CPF" name="cpf" required errors={errors} register={register} />
      <InputField label="Data Nascimento" name="dataNascimento" type="date" required errors={errors} register={register} />
      <InputField label="Número de Telefone" name="numeroTelefone" required errors={errors} register={register} />
      <InputField label="CEP" name="cep" required errors={errors} register={register} />
      <InputField label="Endereço" name="endereco" required errors={errors} register={register} />
      <InputField label="Bairro" name="bairro" required errors={errors} register={register} />
      <InputField label="Estado" name="estado" required errors={errors} register={register} />
      <InputField label="Número" name="numero" required errors={errors} register={register} />
      
      <button type="submit">Criar Conta</button>
    </form>
  );
}

export default CreateACountReactHook;
