import * as Yup from "yup";
import { IBlogCreate } from "../types/post";

export const validationBlogSchema = Yup.object().shape({
  title: Yup.string().required("Le titre est obligatoire"),
  body: Yup.string()
    .required("Le contenu est obligatoire")
    .min(1, "Le contenu doit avoir au minimum 1 caractères"),
  image: Yup.mixed(),
});

export const initialBlogValues: IBlogCreate = {
  title: "",
  body: "",
  image: "",
};
