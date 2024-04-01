import React from "react";
import * as Yup from "yup";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProvider,
  useFormik,
} from "formik";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(5, "Must be 5 characters or more")
        .matches(/^[a-zA-Z\s]*$/, "Name must contain only letters and spaces"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string()
        .required("Required")
        .matches(
          /^[a-zA-Z\s]*$/,
          "Subject must contain only letters and spaces"
        )
        .min(5, "Must be 5 characters or more"),
      message: Yup.string()
        .required("Required")
        .min(100, "Must be 10 characters or more"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <FormikProvider value={formik}>
        <div className="flex items-center justify-center py-20 bg-gray-100">
          <div className="mx-auto w-full max-w-[550px]">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full rounded-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error text-red-500"
                />
              </div>
              <div className="mb-5">
                <label
                  for="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full rounded-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error text-red-500"
                />
              </div>
              <div className="mb-5">
                <label
                  for="subject"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Subject
                </label>
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="error text-red-500"
                />
              </div>
              <div className="mb-5">
                <label
                  for="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="w-full resize rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="Enter your message"
                  rows="4"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
                {/* <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea> */}
              </div>
              <div>
                <button className="hover:shadow-form rounded-full bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </FormikProvider>
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};
