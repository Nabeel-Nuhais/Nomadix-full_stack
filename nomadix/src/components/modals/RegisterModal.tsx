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
import { handleLogin } from "@/lib/actions";
import { useAuth } from "@/context/AuthContext";

const RegisterModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password1?: string;
    password2?: string;
    non_field_errors?: string[];
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const { refreshUser } = useAuth(); // useAuth to refresh user state

  const submitSignup = async () => {
    setIsLoading(true);
    setErrors({});

    const formData = { email, password1, password2 };

    try {
      const response = await apiService.postWitoutToken(
        "/api/auth/register/",
        JSON.stringify(formData)
      );

      if (response.access) {
        handleLogin(response.user.pk, response.access, response.refresh);
        await refreshUser(); // Refresh user state to update UI immediately

        toast.success("Account created successfully!");
        registerModal.onClose();
        router.push("/");
      } else {
        setErrors(response);
        toast.error("Registration failed. Please check your inputs.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    field: keyof typeof errors
  ) => {
    setter(value);

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field]; // Remove error properly
      return newErrors;
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Nomadix" subtitle="Create an account!" />

      <Input
        id="email"
        label="Email"
        value={email}
        onChange={(e) => handleInputChange(setEmail, e.target.value, "email")}
        disabled={isLoading}
        required
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <Input
        id="password1"
        label="Password"
        type="password"
        value={password1}
        onChange={(e) =>
          handleInputChange(setPassword1, e.target.value, "password1")
        }
        disabled={isLoading}
        required
      />
      {errors.password1 && (
        <p className="text-red-500 text-sm">{errors.password1}</p>
      )}

      <Input
        id="password2"
        label="Confirm Password"
        type="password"
        value={password2}
        onChange={(e) =>
          handleInputChange(setPassword2, e.target.value, "password2")
        }
        disabled={isLoading}
        required
      />
      {errors.password2 && (
        <p className="text-red-500 text-sm">{errors.password2}</p>
      )}

      {/* Display non-field errors (e.g., password mismatch) */}
      {errors.non_field_errors &&
        errors.non_field_errors.map((err, i) => (
          <p key={i} className="text-red-500 text-sm">
            {err}
          </p>
        ))}
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
