import * as Yup from "yup";
import type { IUserLogin } from "../types/user";

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("L'adresse email est obligatoire")
    .email("Veuillez renseigner une adresse email valide"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire")
    .min(4, "Le mot de passe doit avoir 4 caractères"),
});

export const initialLoginValues: IUserLogin = {
  email: "",
  password: "",
};