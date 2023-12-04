import * as Yup from "yup";

export const validationProfileUpdateSchema = Yup.object().shape({
  username: Yup.string()
    .required("Le pseudo est obligatoire")
    .min(4, "Le pseudo doit faire 4 caractères minimum"),
  email: Yup.string()
    .required("L'adresse email est obligatoire")
    .email("Veuillez renseigner une adresse email valide"),
  avatar: Yup.mixed(),
});
