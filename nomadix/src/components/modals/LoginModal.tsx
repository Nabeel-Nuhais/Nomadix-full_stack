"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../general/Heading";
import Input from "../general/Input";
import apiService from "@/services/apiService";
import { handleLogin } from "@/lib/actions";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    non_field_errors?: string[];
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const { refreshUser } = useAuth(); // for user menu correct time updation

  const submitLogin = async () => {
    setIsLoading(true);
    setErrors({});
    const formData = { email, password };

    try {
      const response = await apiService.postWithoutToken(
        "/api/auth/login/",
        JSON.stringify(formData)
      );

      if (response.access) {
        handleLogin(response.user.pk, response.access, response.refresh);

        await refreshUser(); // 🔹 Refresh user state after login

        toast.success("Logged in successfully!");
        loginModal.onClose();
        router.push("/");
      } else {
        setErrors(response);
        toast.error("Login failed. Please check your inputs.");
      }
    } catch (error: any) {
      if (error.response?.data) {
        setErrors({
          email: error.response.data.email?.[0] || "",
          password: error.response.data.password?.[0] || "",
          non_field_errors: error.response.data.non_field_errors || [],
        });

        if (error.response.data.non_field_errors) {
          toast.error(error.response.data.non_field_errors[0]); // Show general error
        }
      } else {
        toast.error("Invalid email or password.");
      }

      setPassword(""); // Clear password field after failure
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
      delete newErrors[field];
      return newErrors;
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account" />

      <Input
        id="email"
        label="Email"
        value={email}
        onChange={(e) => handleInputChange(setEmail, e.target.value, "email")}
        disabled={isLoading}
        required
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}

      <Input
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) =>
          handleInputChange(setPassword, e.target.value, "password")
        }
        disabled={isLoading}
        required
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
      )}

      {/* shows non-field errors */}
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
        Don’t have an account?{" "}
        <span
          className="text-neutral-800 cursor-pointer hover:underline"
          onClick={() => {
            loginModal.onClose();
            registerModal.onOpen();
          }}
        >
          Register
        </span>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={submitLogin}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
