import React from "react";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  Paper,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Link,
} from "@mui/material";
import Header from "./Header";
import AdmissionHeader from "./AdmissionHeader";
import InputForm from "./InputForm";
import ParentDeclaration from "./ParentDeclaration";
import OfficeWork from "./OfficeWork";
import Documents from "./Documents";

const AdmissionForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     formNo: "",
  //     penNo: "",
  //     scholarNo: "",
  //     admissionDate: "",
  //     firstName: "",
  //     middleName: "",
  //     lastName: "",
  //     nameHindi: "",
  //     dob: "",
  //     dobWords: "",
  //     gender: "",
  //     religion: "",
  //     caste: "",
  //     subCaste: "",
  //     address: "",
  //     aadhaar: "",
  //     bloodGroup: "",
  //     bankAccNo: "",
  //     ifsc: "",
  //     ssin: "",
  //     familySsn: "",
  //     fatherName: "",
  //     fatherQual: "",
  //     fatherOcc: "",
  //     motherName: "",
  //     motherQual: "",
  //     motherOcc: "",
  //     guardianName: "",
  //     guardianQual: "",
  //     guardianOcc: "",
  //     photo: null,
  //   },
  //   validationSchema: Yup.object({
  //     formNo: Yup.string().required("Required"),
  //     penNo: Yup.string().required("Required"),
  //     firstName: Yup.string().required("Required"),
  //     dob: Yup.string().required("Required"),
  //     gender: Yup.string().required("Required"),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  // const handleFileChange = (e) => {
  //   formik.setFieldValue("photo", e.currentTarget.files[0]);
  // };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 1100, mx: "auto" , border: "2px solid black" }}>
      <Header />

      <AdmissionHeader />

      <InputForm />

      <ParentDeclaration />

      <OfficeWork/>

      <Documents />

    </Paper>
  );
};

export default AdmissionForm;
