import * as yup from "yup";
// const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/
const passwordRules =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("email is required"),
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("firstName is required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("lastName is required"),
  phoneNumber: yup
    .number()
    .integer()
    .required("phoneNumber is required"),
  password: yup
    .string()
    .min(8)
    .max(20)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("password is required"),
});

export const signInSchema = yup.object().shape({
  email: yup
  .string()
  .email("Please enter a valid email")
  .required("email is required"),
  password: yup
  .string()
  .min(8)
  .max(20)
  .matches(passwordRules, { message: "incorrect" })
  .required("password is required"),
})