import Head from "next/head";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginRequest } from "../redux/thunk/auth";
import styles from "../styles/Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    values,
    handleSubmit,
    setFieldValue,
    touched,
    errors,
    setFieldTouched,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("This field is required"),
      password: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      dispatch(loginRequest({ values, router }));
    },
  });
  const formInputs = [
    {
      label: "Email",
      name: "email",
      placeholder: "example@example.com",
    },
    {
      label: "Password",
      name: "password",
      placeholder: "********",
    },
  ];

  return (
    <>
      <Head>
        <title>Users List | Login</title>
        <meta
          name="description"
          content="This page enables the user to login to his account"
        ></meta>
      </Head>
      <div className={styles.login_page}>
        <form onSubmit={handleSubmit} className={styles.login_form} name='login-form'>
          <h2 className="text-center mb-4" data-testid='login-page-header'>Login</h2>
          {formInputs.map(({ label, name, placeholder }, i) => (
            <div className={styles.form_gp} key={i}>
              <label for={name} className={styles.label}>
                {label}
              </label>
              <input
                type={name}
                name={name}
                id={name}
                placeholder={placeholder}
                value={values[name]}
                onChange={(e) => {
                  setFieldTouched(name);
                  setFieldValue(name, e.target.value);
                }}
                className={`${styles.input} ${
                  touched[name] && errors[name] ? styles.input_err_border : ""
                }`}
              />
              {touched[name] && errors[name] ? (
                <p className={styles.err_msg} data-testid={`${name}-err-msg`}>{errors[name]}</p>
              ) : (
                ""
              )}
            </div>
          ))}
          <button
            disabled={!(isValid && dirty)}
            type="submit"
            className={`${styles.login_btn} ${
              !(isValid && dirty) ? styles.disabled_btn : ""
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
