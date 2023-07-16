export interface LoginInput {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  permissions: string;
}
