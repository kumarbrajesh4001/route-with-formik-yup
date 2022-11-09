import * as Yup from "yup";

export const login = Yup.object({
  Email: Yup.string().email().required("please enter email"),
  Password: Yup.string().min(6).required("please enter password"),
});
