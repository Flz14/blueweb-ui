import React from "react";
import { Formik, Form } from "formik";
import FormGroup from "../FormGroup";
import * as Yup from "yup";

const CreateClient = ({ registerClient }) => {
  return (
    <Formik

      initialValues={{
        firstName: "",
        secondName: "",
        lastName: "",
        secondLastName: "",
        email: "",
        phone: "",
        city:"",
        municipality:"",
        state:""
      }}

      validationSchema={Yup.object({
        dni: Yup.string().required("Este campo es necesario"),
        firstName: Yup.string().required("Este campo es necesario"),
        secondName: Yup.string().required("Este campo es necesario"),
        lastName: Yup.string().required("Este campo es necesario"),
        secondLastName: Yup.string().required("Este campo es necesario"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.string().required("Este campo es necesario"),
        address: Yup.string().required("La dirección es necesaria"),
        city: Yup.string().required("Este campo es necesario"),
        municipality: Yup.string().required("Este campo es necesario"),
        state: Yup.string().required("Este campo es necesario")
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await registerClient(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup label="Cedula" name="dni" type="text"></FormGroup>
            </div>
            <div className="col-10 col-lg-5">
              <FormGroup label="Estado" name="state" type="text"></FormGroup>
            </div>
          </div>
          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup label="Ciudad" name="city" type="text"></FormGroup>
            </div>
            <div className="col-10 col-lg-5">
              <FormGroup label="Municipio" name="municipality" type="text"></FormGroup>
            </div>
   
          </div>

          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup
                label="Primer Nombre"
                name="firstName"
                type="text"
              ></FormGroup>
            </div>

            <div className="col-10 col-lg-5">
              <FormGroup
                label="Segundo Nombre"
                name="secondName"
                type="text"
              ></FormGroup>
            </div>
          </div>
          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup
                label="Apellido"
                name="lastName"
                type="text"
              ></FormGroup>
            </div>
            <div className="col-10 col-lg-5">
              <FormGroup
                label="Segundo Apellido"
                name="secondLastName"
                type="text"
              ></FormGroup>
            </div>
          </div>
          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup
                label="Direccion de correo"
                name="email"
                type="email"
              ></FormGroup>
            </div>
            <div className="col-10 col-lg-5">
              <FormGroup label="Teléfono" name="phone" type="text"></FormGroup>
            </div>
          </div>
          <div className="row offset-2">
            <div className="col-10 col-lg-5">
              <FormGroup
                label="Dirección"
                name="address"
                type="textarea"
              ></FormGroup>
            </div>
          
          </div>
          <div className="row offset-2 text-center">
            <div className="form-group">
              <button
                type="submit"
                className=" btn-primary btn "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Por favor espere" : "Enviar"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateClient;