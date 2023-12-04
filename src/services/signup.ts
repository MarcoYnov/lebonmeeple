import * as Yup from "yup";
import type { IUserSignup } from "../types/user";

export const validationSignupSchema = Yup.object().shape({
  username: Yup.string().required("Le pseudo est obligatoire"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire")
    .min(8, "Le mot de passe doit avoir 8 caractères"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe doivent correspondre")
    .required("La confirmation de mot de passe est obligatoire"),
  email: Yup.string()
    .required("L'adresse email est obligatoire")
    .email("Veuillez renseigner une adresse email valide"),
  avatar: Yup.mixed(),
});

export const initialSignupValues: IUserSignup = {
  username: "",
  password: "",
  passwordConfirmation: "",
  email: "",
  avatar: "",
};
