"use server";

import { cookies } from "next/headers";
import toast from "react-hot-toast";

export async function handleRefresh() {
  console.log("HandleRefresh");

  const refreshToken = await getRefreshToken();
  if (!refreshToken) return;

  try {
    const response = await fetch("http://localhost:8000/api/v1/auth/token/refresh/", {
      method: "POST",
      body: JSON.stringify({ refresh: refreshToken }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log("Response - Refresh:", json);

    if (json.access) {
      await setAuthCookies(json.access);
      return json.access;
    } else {
      await resetAuthCookies();
    }
  } catch (error) {
    toast.error("An error occurred");
    await resetAuthCookies();
  }
}

export async function handleLogin(userId, accessToken, refreshToken) {
  await setAuthCookies(accessToken, refreshToken, userId);
}

async function setAuthCookies(accessToken, refreshToken = "", userId = "") {
  const cookieStore = await cookies();

  cookieStore.set("session_userid", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });

  cookieStore.set("session_access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, // 1 hour
    path: "/",
  });

  if (refreshToken) {
    cookieStore.set("session_refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
  }
}

export async function resetAuthCookies() {
  const cookieStore = await cookies();
  cookieStore.set("session_userid", "", { path: "/" });
  cookieStore.set("session_access_token", "", { path: "/" });
  cookieStore.set("session_refresh_token", "", { path: "/" });
}

export async function getUserId() {
  const cookieStore = await cookies();
  return cookieStore.get("session_userid")?.value || null;
}

export async function getAccessToken() {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("session_access_token")?.value;
  if (!accessToken) {
    accessToken = await handleRefresh();
  }
  return accessToken || "";
}

export async function getRefreshToken() {
  const cookieStore = await cookies();
  return cookieStore.get("session_refresh_token")?.value || "";
}
