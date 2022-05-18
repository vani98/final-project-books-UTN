import { useFormik } from "formik";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import * as SC from "./Login.styles";
import { loginUser } from "./utils";

const validate = (values) => {
  const errors = {};
  if (!values.user) {
    errors.user = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      loginUser(values);
      window.location.href = "/";
    },
  });
  return (
    <Layout>
      <SC.Title>LOGIN</SC.Title>
      <SC.LoginForm onSubmit={formik.handleSubmit}>
        <SC.InputWrapper>
          <label htmlFor="user">User</label>
          <input
            type="text"
            id="user"
            placeholder="Enter your user"
            {...formik.getFieldProps("user")}
          ></input>
          {formik.touched.user && formik.errors.user && (
            <SC.Error>{formik.errors.user}</SC.Error>
          )}
        </SC.InputWrapper>
        <SC.InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...formik.getFieldProps("password")}
          ></input>
          {formik.touched.password && formik.errors.password && (
            <SC.Error>{formik.errors.password}</SC.Error>
          )}
        </SC.InputWrapper>
        <Button type="submit">Login</Button>
        <SC.Forgotten>Forgot password?</SC.Forgotten>
      </SC.LoginForm>
    </Layout>
  );
};

export default Login;
