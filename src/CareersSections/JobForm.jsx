import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProvider,
  useFormik,
} from "formik";
const JobForm = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      terms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z\s]*$/, "Name must contain only letters and spaces")
        .min(5, "Must be 5 characters or more")
        .max(50, "Must be 50 characters or less"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Must contain only numbers")
        .required("Required"),
      message: Yup.string()
        .required("Required")
        .min(100, "Must be 10 characters or more"),
      terms: Yup.bool().oneOf([true], "Required").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <FormikProvider value={formik}>
        <div className="flex justify-center items-center bg-gray-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-8">
          <div className="bg-gradient-to-r from-cyan-100 to-blue-400 rounded-xl shadow-xl p-4 sm:p-7 max-w-screen-lg">
            <form>
              <div className="grid sm:grid-cols-12  gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200     ">
                <div className="sm:col-span-12">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Submit your application
                  </h2>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-submit-application-email"
                    className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                  >
                    First Name
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <Field
                    type="text"
                    name="firstName"
                    className="py-2 px-3 pe-11 block w-full border-2 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error text-red-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-submit-application-email"
                    className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                  >
                    Last Name
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <Field
                    type="text"
                    name="lastName"
                    className="py-2 px-3 pe-11 block w-full border-2 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error text-red-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-submit-application-email"
                    className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                  >
                    Email
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <Field
                    type="email"
                    name="email"
                    className="py-2 px-3 pe-11 block w-full border-2 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error text-red-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <div className="inline-block">
                    <label
                      htmlFor="af-submit-application-phone"
                      className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                    >
                      Phone
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-9">
                  <Field
                    type="tel"
                    name="phone"
                    className="py-2 px-3 pe-11 block w-full border-2 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error text-red-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="af-submit-application-resume-cv"
                    className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                  >
                    Resume/CV
                  </label>
                </div>

                <div className="sm:col-span-9">
                  <label
                    htmlFor="af-submit-application-resume-cv"
                    className="sr-only"
                  >
                    Choose file
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    name="af-submit-application-resume-cv"
                    id="af-submit-application-resume-cv"
                    className="block w-full border-2 border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none        
            file:bg-transparent file:border-0
            file:bg-gray-100 file:me-4
            file:py-2 file:px-3"
                  />
                </div>

                <div className="sm:col-span-3">
                  <div className="inline-block">
                    <label
                      htmlFor="af-submit-application-bio"
                      className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                    >
                      Personal summary
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-9">
                  <Field
                    id="af-submit-application-bio"
                    name="message"
                    as="textarea"
                    className="py-2 px-3 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    rows="6"
                    placeholder="Add a cover letter or anything else you want to share."
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error text-red-500"
                  />
                  {/* <textarea
                    required
                    id="af-submit-application-bio"
                    className="py-2 px-3 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none        "
                    rows="6"
                    placeholder="Add a cover letter or anything else you want to share."
                  ></textarea> */}
                </div>
              </div>

              <div className="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200     ">
                <h2 className="text-lg font-semibold text-gray-800   ">
                  Submit application
                </h2>
                <p className="mt-3 text-sm text-gray-600   ">
                  In order to contact you with future jobs that you may be
                  interested in, we need to store your personal data.
                </p>
                <p className="mt-2 text-sm text-gray-600   ">
                  If you are happy for us to do so please click the checkbox
                  below.
                </p>
                <div className="my-2.5 block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-blue-primary dark:border-neutral-600 dark:checked:border-gray-400 dark:checked:bg-blue-700 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    id="checkboxDefault"
                    name="terms"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer text-gray-600"
                    htmlFor="checkboxDefault"
                  >
                    Accept terms and conditions.
                  </label>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="error text-red-500"
                  />
                </div>
              </div>

              <>
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit application
                </button>
              </>
            </form>
          </div>
        </div>
      </FormikProvider>
    </>
  );
};

export default JobForm;
