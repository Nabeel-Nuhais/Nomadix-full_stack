"use server";

import { cookies } from "next/headers";

export async function handleLogin(
  userId: string,
  accessToken: string,
  refreshToken: string
) {
  const cookieStore = await cookies(); // await the promise first

  cookieStore.set("session_userid", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // seconds, minutes, hours, days 1 week
    path: "/",
  });

  cookieStore.set("session_access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, // 1 hour
    path: "/",
  });

  cookieStore.set("session_refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
}

export async function resetAuthCookies() {
  const cookieStore = await cookies();

  cookieStore.set("session_userid", "");
  cookieStore.set("session_access_token", "");
  cookieStore.set("session_refresh_token", "");
}

// getting data

export async function getUserId() {
  const userId = (await cookies()).get("session_userid")?.value;
  return userId ? userId : null;
}

export async function getAccessToken() {
  let accessToken = (await cookies()).get("session_access_token")?.value;

  return accessToken;
}
