import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bubble from "./asset/bubble edt.jpg";
/*import lapi from "./asset/images-removebg-preview (1).png"*/
import purpl from "./asset/purpl0.jpg.jpg";
import star from "./asset/starpurpl.jpg.jpg";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as yup from "yup";

const Login = () => {
  const defaultValue = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter name"),
    email: yup.string().required().email("please enter email"),
    password: yup.string().required("please enter password"),
  });

  const handleSubmit = (value) => {
    console.log("Value:", value);
  };

  return (
    <>
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div class="hp">
            <h1>welcome</h1>
            <p>
              lorem ipsum dolor sit amet, consectur<br></br>
              adipiscing elit.
            </p>

            <img
              src={"http://www.merciailab.com/image/svg/Futuristic.svg"}
              className="lapi"
            />
          </div>

          <div className="backimg">
            <img src={bubble}></img>
            <h1 className="log">
              {" "}
              <strong>Login</strong>
            </h1>
            <p className="highp">Hello! Please enter your details for login.</p>
            <img src={star} className="star"></img>

            <div className="frmbox">
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
            <div className="frmbox">
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
            <p className="forgot"> Forgot password?</p>

            <button> login</button>
            <hr></hr>
            <p className="footer">I don't have an account on Review & Rate</p>
            <h6 className="footerh">
              <strong>Register Now</strong>
            </h6>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
