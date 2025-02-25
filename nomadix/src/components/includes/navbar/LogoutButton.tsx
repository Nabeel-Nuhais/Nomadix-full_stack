"use client";

import { useRouter } from "next/navigation";
import { resetAuthCookies } from "@/lib/actions";
import { useAuth } from "@/context/AuthContext";
import MenuItem from "../navbar/MenuItem";
import toast from "react-hot-toast";

interface LogoutButtonProps {
  onLogout?: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const router = useRouter();
  const { refreshUser } = useAuth();

  const submitLogout = async () => {
    resetAuthCookies();
    toast.success("Logged out successfully!");

    await refreshUser();
    router.push("/");

    if (onLogout) {
      onLogout();
    }
  };

  return <MenuItem label="Log out" onClick={submitLogout} />;
};

export default LogoutButton;
