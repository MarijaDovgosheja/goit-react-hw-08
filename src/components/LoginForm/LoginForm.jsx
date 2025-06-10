import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const loginSchema = Yup.object({
    email: Yup.string().email("Невірний формат").required("Обов’язково"),
    password: Yup.string().min(6, "Мінімум 6 символів").required("Обов’язково"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values) => dispatch(logIn(values))}
    >
      <Form>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Пароль
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Увійти</button>
      </Form>
    </Formik>
  );
}
