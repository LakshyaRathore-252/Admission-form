// AdmissionForm.jsx
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Paper, Button } from "@mui/material";
import Header from "./Header/Header.jsx";
import AdmissionHeader from "./Header/AdmissionHeader.jsx";
import InputForm from "./InputForm.jsx";
import ParentDeclaration from "./Footer/ParentDeclaration.jsx";
import OfficeWork from "./Footer/OfficeWork.jsx";
import Documents from "./Documents/Documents.jsx";
import { validationSchema } from "../constant/validation";
import { initialValues } from "../constant/constant.js";




const AdmissionForm = () => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 4, maxWidth: 1100, mx: "auto", border: "2px solid black" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("FORM SUBMIT", values);
          alert("Form submitted — check console.");
          setSubmitting(false);
        }}
      >
        {/* Yeh Formik context banata hai jise useFormikContext() access karega */}
        <Form noValidate>
          <Header />
          <AdmissionHeader />
          <InputForm />
          <ParentDeclaration />
          <OfficeWork />
          <Documents />

          <Box mt={3} display="flex" justifyContent="center" gap={2}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Button
              variant="outlined"
              type="reset"
            >
              Reset
            </Button>
          </Box>
        </Form>
      </Formik>
    </Paper >
  );
};

export default AdmissionForm;
