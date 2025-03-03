"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Cleave from "cleave.js/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./FeedbackPhoneForm.module.css";

interface FeedbackPhoneFormProps {
  tab: "whatsApp" | "telegram";
}
interface Input {
  phone: string;
}

const schema = yup.object({
  phone: yup
    .string()
    .required("Введите номер")
    .min(16, "Введите полностью")
    .max(16, "Введите полностью"),
});

const FeedbackPhoneForm = ({ tab }: FeedbackPhoneFormProps) => {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Input) => {
    console.log(data, tab);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <p className={styles.inputLabel}>ВВЕДИТЕ НОМЕР ТЕЛЕФОНА</p>
      <Cleave
        options={{
          delimiters: [" ", " ", "-", "-"],
          blocks: [2, 3, 3, 2, 2],
          prefix: "+7",
          numericOnly: true,
        }}
        placeholder="+7 ___ ___-__-__"
        className={styles.input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue("phone", e.target.value, { shouldValidate: true })
        }
      />
      <div className={styles.errorContainer}>
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>
      <p className={styles.description}>После отправки контакта, мы свяжемся с вами</p>
      <button className={styles.submitButton} type="submit">
        ЗАПИСАТЬСЯ НА ТЕСТ-ДРАЙВ <br />
        <span>И ВЫБРАТЬ МОДЕЛЬ</span>
      </button>
    </form>
  );
};

export default FeedbackPhoneForm;
