import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

export default function LoginForm() {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Невірна адреса").required("Обов'язкове поле"),
    password: Yup.string()
      .min(6, "Мінімум 6 символів")
      .required("Обов'язкове поле"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: "0 auto" }}>
      <Typography variant="h5" mb={2} align="center">
        Вхід до Phonebook
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Box>
            <Box mb={2}>
              <Field
                name="password"
                as={TextField}
                label="Пароль"
                type="password"
                fullWidth
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Button type="submit" variant="contained" fullWidth>
              Увійти
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}
