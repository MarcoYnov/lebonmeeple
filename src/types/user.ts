export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserSignup {
  username: string;
  password: string;
  passwordConfirmation: string;
  email: string;
  avatar: string;
}

export interface IUserProfile {
  username: string;
  email: string;
  avatar: string;
}

export interface IUser extends IUserProfile {
  userId: number;
}