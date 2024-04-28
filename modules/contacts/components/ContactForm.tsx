"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import InputField from "@/common/components/elements/InputField";

interface FormEmail {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormEmail>();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send Email");
  const [isSuccess, setIsSuccess] = useState(false);
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleFormSubmit = async (payload: FormEmail) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/email", payload);
      if (response.status === 200) setIsSuccess(true);
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setButtonText(isLoading ? "Sending your message..." : "Send Email");
    if (!isLoading && isSuccess) setButtonText("Your email sent successfully");
    const timeout = setTimeout(() => {
      setButtonText("Send Email");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isLoading, isSuccess]);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-3">
        <InputField
          name="name"
          rule={{ required: true }}
          register={register}
          error={errors}
        />
        <InputField
          name="email"
          rule={{
            required: true,
            pattern: {
              value: regexEmail,
              message: "please enter a valid email",
            },
          }}
          register={register}
          error={errors}
        />
        <InputField
          name="message"
          rule={{ required: true }}
          register={register}
          error={errors}
          isTextArea
          rows={7}
        />
        <button
          disabled={isLoading}
          type="submit"
          className="w-full rounded-full border-2 border-neutral-300 bg-neutral-50 p-1 hover:border-red-500 dark:border-neutral-700 dark:bg-neutral-900"
        >
          <div className="rounded-full bg-neutral-200 px-8 py-2 text-neutral-600 active:bg-red-500 active:text-neutral-50 dark:bg-neutral-800">
            {buttonText}
          </div>
        </button>
      </form>
    </div>
  );
}
