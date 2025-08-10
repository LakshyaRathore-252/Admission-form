// AdmissionForm.jsx
import { Box, Button, Paper } from "@mui/material";
import { Form, Formik } from "formik";
import { initialValues } from "../constant/constant.js";
import { validationSchema } from "../constant/validation";
import Documents from "./Documents/Documents.jsx";
import OfficeWork from "./Footer/OfficeWork.jsx";
import ParentDeclaration from "./Footer/ParentDeclaration.jsx";
import AdmissionHeader from "./Header/AdmissionHeader.jsx";
import Header from "./Header/Header.jsx";
import InputForm from "./InputForm.jsx";




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
