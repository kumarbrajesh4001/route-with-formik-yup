import * as Yup from "yup";

export const registration = Yup.object({
  userName: Yup.string().min(2).max(12).required("please enter userName"),
  DOB: Yup.string().required("please enter dob"),
  Mobile: Yup.string().min(10).max(15).required("please enter mobile"),
  Email: Yup.string().email().required("please enter email"),
  Password: Yup.string().min(6).required("please enter password"),
  Confirm_Password: Yup.string()
    .required("please enter confirm password")
    .oneOf([Yup.ref("Password"), null], "password must match"),
});
