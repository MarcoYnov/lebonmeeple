import { IUser } from "./user";

export interface IBlogCreate {
  title: string;
  body: string;
  image: string;
}

export interface IPost {
  postId: number;
  title: string;
  body: string;
  user: IUser;
  image: string;
}
