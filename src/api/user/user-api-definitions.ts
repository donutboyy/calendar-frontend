export interface UserApiService {
  fetchToken(loginFormData: FormData): Promise<Token>;
}

export interface Token {
  access_token: string;
  token_type: string;
}
