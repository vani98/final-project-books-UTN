import { useFormik } from "formik";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import * as SC from "./Login.styles";
import { loginUser } from "./utils";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    // validate,
    onSubmit: (values) => {
      // console.log(values);
      loginUser(values);
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
        </SC.InputWrapper>
        <SC.InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...formik.getFieldProps("password")}
          ></input>
        </SC.InputWrapper>
        <Button type="submit">Login</Button>
        <p>Forgot password?</p>
      </SC.LoginForm>
    </Layout>
  );
};

export default Login;
