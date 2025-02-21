"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import apiService from "@/services/apiService";
import toast from "react-hot-toast";

const RegisterModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    };

    const response = await apiService.post(
      "/api/auth/register/",
      JSON.stringify(formData)
    );

    if (response.access) {
      // handlelogin

      registerModal.onClose();

      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });

      setErrors(tmpErrors);
    }
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Nomadix" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        required
      />
      <Input
        id="password1"
        label="Password"
        type="password"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
        disabled={isLoading}
        required
      />
      <Input
        id="password2"
        label="Confirm Password"
        type="password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        disabled={isLoading}
        required
      />
      {errors.map((error, index) => {
        return (
          <div key={`error_${index}`} className="p-4 bg-red-600 text-white rounded-xl opacity-80">
            {error}
          </div>
        );
      })}
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <div className="text-center text-neutral-500">
        Already have an account?{" "}
        <span
          className="text-neutral-800 cursor-pointer hover:underline"
          onClick={() => {
            registerModal.onClose();
            loginModal.onOpen();
          }}
        >
          Log in
        </span>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={submitSignup}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
