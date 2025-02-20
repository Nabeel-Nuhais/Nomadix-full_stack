"use client";

import axios from "axios";

// import { AiFillGithub } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../general/Heading";
import Input from "../general/input";
import toast from "react-hot-toast";
import Button from "../general/Button";
import useLoginModal from "@/hooks/useLoginModal";

const RegisterModal = () => {
  const router = useRouter();

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/auth/register/", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        console.log(data);
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <>
      <div className="flex flex-col gap-4">
        <Heading title="Welcome to Nomadix" subtitle="Create an account!" />
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="name"
          label="Name"
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
        <div className="flex border w-full border-solid flex-row items-center text-neutral-300 gap-3">
          {/* <hr className="border w-full border-solid" />
          <span className="text-sm">or</span>
          <hr className="border w-full border-solid" /> */}
        </div>
        {/* <Button
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
        /> */}
        <div
          className="text-neutral-500
            text-center
            mt-4
            font-light"
        >
          <div className="justify-center flex flex-row items-center gap-2">
            <div className="">Already have an account?</div>
            <div
              onClick={() => {
                registerModal.onClose();
                loginModal.onOpen();
              }}
              className="text-neutral-800 cursor-pointer hover:underline"
            >
              Log in
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
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default RegisterModal;
