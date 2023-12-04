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
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { initialBlogValues, validationBlogSchema } from "../../services/blog";
import Button from "../../components/Button/Button";
import { IBlogCreate } from "../../types/post";
import { notifySuccess } from "../../utils/toaster";
import { useNavigate } from "react-router-dom";
import { convertToBase64 } from "../../services/convertToBase64";
import { useCreatePostMutation } from "../../api/postSlice";
import { useAppSelector } from "../../app/hooks";

const PostCreate = () => {
  const navigate = useNavigate();
  const [createPost] = useCreatePostMutation();
  const jwtToken = useAppSelector((state) => state.user.jwtToken);

  const onSubmit = async (body: IBlogCreate) => {
    await createPost({ body, jwtToken });
    navigate("/blog");
    notifySuccess("Article créé !");
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
      <Box w={{ base: "100%", md: "45%" }}>
        <Center>
          <Heading>Connexion</Heading>
        </Center>
        <Formik
          initialValues={initialBlogValues}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={validationBlogSchema}
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
                <FormControl isInvalid={!!errors.title && touched.title}>
                  <FormLabel htmlFor="title">Titre</FormLabel>
                  <Field
                    as={Input}
                    id="title"
                    name="title"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.title}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.image && touched.image}
                  mb="30px"
                >
                  <FormLabel htmlFor="image">Image</FormLabel>

                  <Field name="image">
                    {() => (
                      <input
                        type="file"
                        onChange={async (
                          e: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          setFieldValue("image", await handleFileUpload(e));
                        }}
                      />
                    )}
                  </Field>
                  <FormErrorMessage>{errors.image}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.body && touched.body}
                  mb="30px"
                >
                  <FormLabel htmlFor="body">Contenu</FormLabel>
                  <Field
                    as={Textarea}
                    id="body"
                    name="body"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.body}</FormErrorMessage>
                </FormControl>
                <Button
                  disabled={!(isValid && dirty)}
                  type="submit"
                  width="100%"
                  color="pink"
                >
                  Créer article
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default PostCreate;
