import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(2, "Мінімум 2 символи").required("Обов'язкове поле"),
    email: Yup.string().email("Невірна адреса").required("Обов'язкове поле"),
    password: Yup.string()
      .min(6, "Мінімум 6 символів")
      .required("Обов'язкове поле"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: "0 auto" }}>
      <Typography variant="h5" mb={2} align="center">
        Реєстрація
      </Typography>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="name"
                as={TextField}
                label="Ім'я користувача"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Box>
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
                type="password"
                label="Пароль"
                fullWidth
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Button type="submit" variant="contained" fullWidth>
              Зареєструватися
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}
