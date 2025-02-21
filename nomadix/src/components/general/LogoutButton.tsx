"use client";

import { useRouter } from "next/navigation";
import { resetAuthCookies } from "@/lib/actions";
import { useAuth } from "@/context/AuthContext"; // Import Auth Context
import MenuItem from "../includes/navbar/MenuItem";
import toast from "react-hot-toast";

const LogoutButton: React.FC = () => {
  const router = useRouter();
  const { refreshUser } = useAuth(); // Get refreshUser function from context

  const submitLogout = async () => {
    resetAuthCookies(); // Clear cookies/session
    toast.success("Logged out successfully!");

    await refreshUser(); // Refresh user state
    router.push("/");
  };

  return <MenuItem label="Log out" onClick={submitLogout} />;
};

export default LogoutButton;
