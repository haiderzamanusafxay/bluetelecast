import React from "react";
import * as Yup from "yup";
import Map from "../components/Map.jsx";
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
            <h2 className="mb-6 mt-6 text-4xl tracking-tight font-extrabold text-center text-gray-900">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">
              Got a technical issue? want to send us a feedback? Need details
              about our Business plan? Let us know.
            </p>

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
                  className="py-2 px-3 pe-11 block w-full border-2 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
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
                  className="py-2 px-3 pe-11 block w-full border-2 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
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
                  htmlFor="service"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Service Need
                </label>
                <Field
                  as="select"
                  name="service"
                  className="py-2 px-3 pe-11 block w-full border-2 bg-white border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <option value="">Select a Service</option>
                  <option value="service2">Graphic Designing</option>
                  <option value="service1">Web Development</option>
                  <option value="service3">Software Development</option>
                  <option value="service4">Digital Marketing</option>
                </Field>
                <ErrorMessage
                  name="service"
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
                  className="py-2 px-3 pe-11 block w-full border-2 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter your message"
                  rows="4"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
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
      <Map />
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
