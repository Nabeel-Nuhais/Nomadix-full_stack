import { getAccessToken } from "@/lib/actions";
import toast from "react-hot-toast";

const apiService = {
  get: async function (url: string): Promise<any> {
    console.log("get", url);

    const token = await getAccessToken();

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (response) => {
          if (response.status === 401) {
            toast.error("Unauthorized. Please log in again.");
            throw new Error("Unauthorized. Please log in again.");
          }
          return response.json();
        })
        .then((json) => {
          console.log("Response:", json);
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  post: async function (url: string, data: any): Promise<any> {
    console.log("post", url);

    const token = await getAccessToken();

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (response) => {
          if (response.status === 401) {
            toast.error("Unauthorized. Please log in again.");
            throw new Error("Unauthorized. Please log in again.");
          }
          return response.json();
        })
        .then((json) => {
          console.log("Response:", json);
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  postWithoutToken: async function (url: string, data: any): Promise<any> {
    console.log("post", url);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(async (response) => {
          if (response.status === 401) {
            toast.error("Unauthorized. Please log in again.");
            throw new Error("Unauthorized. Please log in again.");
          }
          return response.json();
        })
        .then((json) => {
          console.log("Response:", json);
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default apiService;
