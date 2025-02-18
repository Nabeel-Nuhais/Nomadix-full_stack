"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../general/Heading";
import Input from "../general/input";
import toast from "react-hot-toast";
import Button from "../general/Button";

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <>
      <div className="flex flex-col gap-4">
        <Heading title="Welcome back" subtitle="Login to your account" />
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    </>
  );

  const footerContent = (
    <>
      <div className="flex flex-col gap-4 mt-3">
        <div className="flex flex-row items-center text-neutral-300 gap-3">
          <hr className="border w-full border-solid" />
          <span className="text-sm">or</span>
          <hr className="border w-full border-solid" />
        </div>
        <Button
          outline
          label="Continue with Google"
          icon={FcGoogle}
          onClick={() => {}}
        />
        <Button
          outline
          label="Continue with Github"
          icon={AiFillGithub}
          onClick={() => {}}
        />
        <div
          className="text-neutral-500
            text-center
            mt-4
            font-light"
        >
          <div className="justify-center flex flex-row items-center gap-2">
            <div className="">Don't have an account?</div>
            <div
              onClick={() => {
                loginModal.onClose();
                registerModal.onOpen();
              }}
              className="text-neutral-800 cursor-pointer hover:underline"
            >
              Register
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default LoginModal;
