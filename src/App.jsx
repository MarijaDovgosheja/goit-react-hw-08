import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { Toaster } from "react-hot-toast";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import PrivateRoute from "./components/PrivateRoute";
import RestricteRoute from "./components/RestricteRoute";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) <p>Loading user...</p>;

  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="login"
              element={
                <RestricteRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="register"
              element={
                <RestricteRoute
                  redirectTo="/"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Routes>
        </Suspense>
      </Layout>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
