"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./FeedbackEmailForm.module.css";

interface FeedbackEmailFormProps {
  tab: "email";
}
interface Input {
  email: string;
}

const schema = yup.object({
  email: yup.string().email("Некорректный email").required("Введите почту"),
});

const FeedbackEmailForm = ({ tab }: FeedbackEmailFormProps) => {
  const {
    register,
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
      <p className={styles.inputLabel}>ВВЕДИТЕ ПОЧТУ</p>
      <input
        type="email"
        className={styles.input}
        placeholder="example@mail.ru"
        {...register("email")}
      />
      <div className={styles.errorContainer}>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <p className={styles.description}>После отправки почты, мы свяжемся с вами</p>
      <button className={styles.submitButton} type="submit">
        ЗАПИСАТЬСЯ НА ТЕСТ-ДРАЙВ <br />
        <span>И ВЫБРАТЬ МОДЕЛЬ</span>
      </button>
    </form>
  );
};

export default FeedbackEmailForm;
