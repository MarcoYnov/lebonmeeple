import {
  Flex,
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import Button from "../../components/Button/Button";
import { validationProfileUpdateSchema } from "../../services/profileUpdate";
import { IUserProfile } from "../../types/user";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { notifySuccess } from "../../utils/toaster";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../router/constants";
import { handleFileUpload } from "../../services/fileUpload";
import { updateUser } from "../../app/userSlice";
// import { updatePost } from "../../app/postsSlice";
import { apiClient } from "../../api/apiClient";

const UpdateProfile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  const { PROFILE } = PATHS;

  const initialProfileUpdateValues: IUserProfile = {
    email: user?.email || "",
    username: user?.username || "",
    avatar: user?.avatar || "",
  };

  const onSubmit = async (values: IUserProfile, userId: number) => {
    const response = await apiClient.patch(`/auth/patch/${userId}`, values)
    dispatch(updateUser(response.data));
    notifySuccess("Modification réussie !");
    navigate(PROFILE);
  };

  return (
    <Flex justifyContent="center">
      <Box w={{ base: "100%", md: "40%" }}>
        <Center>
          <Heading>Inscription</Heading>
        </Center>
        <Formik
          initialValues={initialProfileUpdateValues}
          onSubmit={(values) => {
            onSubmit(values, user?.userId as number);
          }}
          validationSchema={validationProfileUpdateSchema}
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
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.avatar && touched.avatar}
                  mb="30px"
                >
                  <FormLabel htmlFor="avatar">Avatar</FormLabel>
                  <Field name="avatar" as={Input}>
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
                  Modifier le profil
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default UpdateProfile;
