import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { registration } from "../schemas/registration";



const initialValues = {
  userName: "",
  DOB: "",
  Mobile: "",
  Email: "",
  Password: "",
  Confirm_Password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema:registration,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });

 

  // const [data, setData] = useState({
  //   userName: "",
  //   DOB: "",
  //   Mobile: "",
  //   Email: "",
  //   Password: "",
  //   Confirm_Password: "",
  // });

  // const [records, setRecord] = useState<any>([]);

  // const submitForm = (e: any) => {
  //   e.preventDefault();

  //   setRecord([...records, data]);

  //   axios
  //     .post("http://127.0.0.1:5173/registration", data)
  //     .then((res) => console.log(res));
  // };

  // const handleChange = (e: any) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setData({ ...data, [name]: value });
  // };

  return (
    <div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label htmlFor="userName">UserName:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={values.userName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.userName && touched.userName && <p>{errors.userName}</p>}
        <br />
        <br />
        <label htmlFor="DOB">DOB:</label>
        <input
          type="date"
          id="DOB"
          name="DOB"
          value={values.DOB}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.DOB && touched.DOB && <p>{errors.DOB}</p>}
        <br />
        <br />
        <label htmlFor="Mobile">Mobile:</label>
        <input
          type="number"
          id="Mobile"
          name="Mobile"
          value={values.Mobile}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.Mobile && touched.Mobile && <p>{errors.Mobile}</p>}
        <br />
        <br />
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          id="Email"
          name="Email"
          value={values.Email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.Email && touched.Email && <p>{errors.Email}</p>}
        <br />
        <br />
        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          id="Password"
          name="Password"
          value={values.Password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.Password && touched.Password && <p>{errors.Password}</p>}
        <br />
        <br />
        <label htmlFor="Confirm_Password">Confirm_Password:</label>
        <input
          type="password"
          id="Confirm_Password"
          name="Confirm_Password"
          value={values.Confirm_Password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.Confirm_Password && touched.Confirm_Password && (
          <p>{errors.Confirm_Password}</p>
        )}
        <br />
        <br />
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};

export default Registration;
