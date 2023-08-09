import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import bubble from "./asset/bubble edt.jpg";
/*import lapi from "./asset/images-removebg-preview (1).png"*/
import purpl from "./asset/purpl0.jpg.jpg";
import star from "./asset/starpurpl.jpg.jpg";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as yup from "yup";

const Signup = () => {
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

          <div className="backimg2">
            <img src={bubble}></img>
            <h1 className="log2">
              
              <strong>Sign up</strong>
            </h1>
            
            <img src={star} className="star2" ></img>
            
            <div className="frmbox2">
              <Field
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div> 

            <div className="frmbox2">
              <Field
                type="email"
                name="email"
                placeholder="Email ID"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
            <div className="frmbox2">
              <Field
                type="text"
                name="phon "
                placeholder="Phone Number"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
            
            <div className="frmbox2">
            
            <select id="city" name="city" placeholder=" &#127984city" className="form-select"> 
            <option value="city" > City </option>
            <option value="city" > Indore </option>
                <option value="city"> Bhopal</option>
                <option value="city">Harda</option></select>
                
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>

            <div className="frmbox2">
            
            <select id="city" name="city" placeholder=" State" className="form-select"> 
            <option value="city" > State</option>
            <option value="city" > MP </option>
                <option value="city"> DELHI</option>
                <option value="city">MUMBAI</option></select>
                
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>

            <button className="button2"> Sign up</button>
            <hr className="hr2"></hr>
            <p className="footer2">I already have an account 
            <b className="bold" > Login</b></p>
            
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Signup;



