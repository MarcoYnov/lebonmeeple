import { Field, Formik } from "formik";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { login } from "../app/userSlice";
import { PATHS } from "../router/constants";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySuccess } from "../utils/toaster";
import type { IUserLogin } from "../types/user";
import { initialLoginValues, validationLoginSchema } from "../services/login";
import { apiClient } from "../api/apiClient";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { BLOG } = PATHS;

  const onSubmit = (values: IUserLogin) => {
    apiClient
      .post("/auth/signin", values)
      .then((response) => {
        dispatch(login(response.data));
      })
      .then(() => notifySuccess("Connexion réussie !"))
      .then(() => navigate(BLOG))
      .catch(() => notifyError("Les identifiants ne sont pas corrects"));
  };

  return (
    <Flex justifyContent="center">
      <Box w={{base:"100%", md:"40%"}}>
        <Center>
          <Heading>Connexion</Heading>
        </Center>
        <Formik
          initialValues={initialLoginValues}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={validationLoginSchema}
        >
          {({ handleSubmit, errors, touched, isValid, dirty }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing="4">
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.password && touched.password}
                  mb="30px"
                >
                  <FormLabel htmlFor="password">Mot de passe</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button
                  disabled={!(isValid && dirty)}
                  type="submit"
                  width="100%"
                  color="pink"
                >
                  Se connecter
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
        <Text color={"gray.700"} textAlign={"center"} paddingTop={8}>
          Pas encore de compte ? &nbsp;
          <Link to="/signup">
            <Text as="u">Créer votre compte</Text>
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;
