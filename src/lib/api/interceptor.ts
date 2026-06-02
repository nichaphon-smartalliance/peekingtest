import type { AxiosInstance } from "axios";
import { getSession } from "next-auth/react";

export function attachInterceptors(client: AxiosInstance) {
  client.interceptors.request.use(async (config) => {
    const session = await getSession();
    if (session?.user) {
      // Attach auth token if available
    }
    return config;
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
      return Promise.reject(error);
    }
  );
}
