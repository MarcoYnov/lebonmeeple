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
} from "@chakra-ui/react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../router/constants";
import { notifySuccess } from "../utils/toaster";
import type { IUserSignup } from "../types/user";
import {
  initialSignupValues,
  validationSignupSchema,
} from "../services/signup";
import { convertToBase64 } from "../services/convertToBase64";
import { apiClient } from "../api/apiClient";

const Signup = () => {
  const navigate = useNavigate();
  const { LOGIN } = PATHS;

  const onSubmit = (values: IUserSignup) => {
    apiClient
      .post("/auth/signup", values)
      .then(() => notifySuccess("Inscription réussie !"))
      .then(() => navigate(LOGIN));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      const base = await convertToBase64(file);
      return base;
    }
  };

  return (
    <Flex justifyContent="center">
      <Box w={{ base: "100%", md: "40%" }}>
        <Center>
          <Heading>Inscription</Heading>
        </Center>
        <Formik
          initialValues={initialSignupValues}
          onSubmit={(values) => {
            onSubmit(values);
          }}
          validationSchema={validationSignupSchema}
        >
          {({
            handleSubmit,
            errors,
            touched,
            isValid,
            dirty,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing="4">
                <FormControl isInvalid={!!errors.username && touched.username}>
                  <FormLabel htmlFor="username">Pseudo</FormLabel>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </FormControl>
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
                <FormControl isInvalid={!!errors.password && touched.password}>
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
                <FormControl
                  isInvalid={
                    !!errors.passwordConfirmation &&
                    touched.passwordConfirmation
                  }
                  mb="30px"
                >
                  <FormLabel htmlFor="passwordConfirmation">
                    Confirmer Mot de passe
                  </FormLabel>
                  <Field
                    as={Input}
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    type="password"
                    variant="filled"
                  />
                  <FormErrorMessage>
                    {errors.passwordConfirmation}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={!!errors.avatar && touched.avatar}
                  mb="30px"
                >
                  <FormLabel htmlFor="avatar">Avatar</FormLabel>

                  <Field name="avatar">
                    {() => (
                      <input
                        type="file"
                        onChange={async (
                          e: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          setFieldValue("avatar", await handleFileUpload(e));
                        }}
                      />
                    )}
                  </Field>
                  <FormErrorMessage>{errors.avatar}</FormErrorMessage>
                </FormControl>

                <Button
                  disabled={!(isValid && dirty)}
                  type="submit"
                  width="100%"
                  color="pink"
                >
                  M'inscrire
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default Signup;
