import { UserApiService, Token } from "./user-api-definitions";

class UserApi implements UserApiService {
  async fetchToken(loginFormData: FormData): Promise<Token> {
    const requestUrl = new URL("/token", import.meta.env.VITE_BACKEND_URL);
    const response = await fetch(requestUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: loginFormData,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch token");
    }
    const data = await response.json();
    return data;
  }
}

export default UserApi;
