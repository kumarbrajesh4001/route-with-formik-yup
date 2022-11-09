import React from "react";
import { useFormik } from "formik";
import { login } from "../schemas/login";


const initialValues = {
  Email: "",
  Password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema:login,

      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login try</h1>
        <h3>Email:</h3>
        <input
          type="text"
          name="Email"
          value={values.Email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.Email && touched.Email && <p>{errors.Email}</p>}
        <h3>Password:</h3>
        <input
          type="password"
          name="Password"
          value={values.Password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.Password && touched.Password && <p>{errors.Password}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
