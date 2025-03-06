"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Cleave from "cleave.js/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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
  const [resetKey, setResetKey] = useState<number>(0);
  const {
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(schema),
    defaultValues: { phone: "" },
  });

  const onSubmit = async (data: Input) => {
    const toastId = toast.loading("Отправка запроса...");
    try {
      const response = await fetch("https://formspree.io/f/mwplevdd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: tab }),
      });

      if (response.ok) {
        toast.success("Ваш запрос отправлен!", { id: toastId });
        reset();
        setResetKey((prevKey) => prevKey + 1);
      } else {
        toast.error("Произошла ошибка, попробуйте снова", { id: toastId });
      }
    } catch (err) {
      toast.error(`Произошла ошибка, попробуйте снова. Ошибка: ${err}`, { id: toastId });
    }
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
        key={resetKey}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue("phone", e.target.value)}
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
