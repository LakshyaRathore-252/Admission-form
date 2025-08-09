import { Box, Grid } from '@mui/material'
import React from 'react'
import CustomInput from './ResuableInput/CustomInput'
import CustomLayout from './ResuableLayout/CustomLayout'

const InputForm = () => {
  return (
    <Box
      p={{ lg: 2, sm: 1, xs: 1 }}

    >
      <CustomLayout
        itemsPerRow={4}
        direction="row"
        cssSX={{ display: { xs: 'none', md: 'flex' } }}

        fields={[
          { name: "studentName", label: "STUDENT'S NAME:", type: "text", WantTypoORCustomField: "TYPO" },
          { name: "firstName", label: "FIRST NAME", type: "text", WantTypoORCustomField: "TYPO" },
          { name: "middleName", label: "MIDDLE NAME", type: "text", WantTypoORCustomField: "TYPO" },
          { name: "lastName", label: "LAST NAME", type: "text", WantTypoORCustomField: "TYPO" },
        ]}
      />

      <CustomLayout
        itemsPerRow={4}
        direction="row"
        fields={[
          { name: "studentNameTypo", label: " IN CAPITAL LETTER:", type: "text", WantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "firstName", label: "STUDENT'S NAME", type: "text", WantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "middleName", label: "MIDDLE NAME", type: "text", WantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "lastName", label: "LAST NAME", type: "text", WantTypoORCustomField: "FIELD", textAlign: "center" },
        ]}
      />

      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          { name: "firstNameTYPO", label: "IN HINDI", type: "text", WantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "firstNameHindi", label: "STUDENT'S NAME", type: "text", WantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "middleNameHindi", label: "MIDDLE NAME", type: "text", WantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "lastNameHindi", label: "LAST NAME", type: "text", WantTypoORCustomField: "FIELD", textAlign: "center" },
        ]}
      />

      <CustomLayout
        itemsPerRow={3}
        direction="row"
        fields={[
          {
            name: "DOB",
            label: "DATE OF BIRTH",
            type: "date",
            WantTypoORCustomField: "TYPO",
            flex: {
              xs: "0 0 100%",
              sm: "0 0 30%",
              md: "0 0 10%",
            },
          },
          {
            name: "DOB",
            type: "date",
            WantTypoORCustomField: "FIELD",
            flex: {
              xs: "0 0 95%",
              sm: "0 0 60%",
              md: "0 0 45%",
            },
          },
          {
            name: "gender",
            label: "GENDER",
            type: "radio",
            textAlign: "center",
            options: ["MALE", "FEMALE"],
            flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 40%",
            },
          },
        ]}
      />


      <CustomLayout
        itemsPerRow={2}
        direction='row'
        fields={[
          { name: "dobWords", label: "DATE OF BIRTH IN WORDS", type: "text", WantTypoORCustomField: "TYPO", flex: "0 0 20%" },
          {
            name: "dobWords", type: "text", inputMode: "alphaOnly", WantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 95%",
              sm: "0 0 50%",
              md: "0 0 75%"
            }
          },

        ]}
      />

      <CustomLayout
        itemsPerRow={8}
        direction='row'
        fields={[
          {
            name: "religion", label: "RELIGION", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: 'religion', label: 'RELIGION', inputMode: "alphaOnly", type: 'text', WantTypoORCustomField: 'FIELD', TextLabel: 'RELIGION', flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            }
          },
          {
            name: 'caste', label: 'CASTE', type: 'text', WantTypoORCustomField: 'TYPO', flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "caste", label: "CASTE", type: "text", inputMode: "alphaOnly", WantTypoORCustomField: "FIELD", TextLabel: "CASTE", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 10%"
            }
          },
          {
            name: "subCaste", label: "SUB CASTE", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "subCaste", label: "SUB CASTE", type: "text", inputMode: "alphaOnly", WantTypoORCustomField: "FIELD", TextLabel: "SUB CASTE", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 10%"
            }
          },
          {
            name: "email", label: "EMAIL", type: "email", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "email", label: "EMAIL", type: "email", WantTypoORCustomField: "FIELD", TextLabel: "EMAIL", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            }
          },

        ]}
      />

      {/* PER. COMPLETE ADDRESS */}
      <CustomLayout
        itemsPerRow={2}
        direction='row'
        fields={[
          {
            name: "perAddress", label: "PER. COMPLETE ADDRESS", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "perAddress", label: "PER. COMPLETE ADDRESS", type: "text", WantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 50%"
            }

          },
          // {
          //   name: "PER. COMPLETE ADDRESS", label: "PER. COMPLETE ADDRESS", type: "text", WantTypoORCustomField: "FIELD", flex: "0 0 100%"
          // }
        ]}
      />

      {/* CURRENT ADDRESS */}
      <CustomLayout
        itemsPerRow={2}
        direction='row'
        fields={[
          {
            name: "currentAddress", label: "CURRENT ADDRESS", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "currentAddress", label: "CURRENT ADDRESS", type: "text", WantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 80%"
            }

          },

        ]}
      />

      {/* AADHAR CARD & BLOOD GROUP */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "aadhaar", label: "AADHAR CARD", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "aadhaar",   inputMode: "numericOnly", label: "AADHAR CARD", type: "text", WantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 40%"
            }

          },
          {
            name: "bloodGroup", label: "BLOOD GROUP", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "bloodGroup", inputMode: "alphaOnly", label: "BLOOD GROUP", type: "text", WantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 30%"
            }

          },
        ]}
      />

      {/* STUDENT"S BANK ACCOUNT NO. &&  BANK NAME WITH IFSC CODE */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "stuBankAccNo", label: "STUDENT'S BANK ACCOUNT NO.", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "stuBankAccNo", inputMode: "numericOnly", label: "STUDENT'S BANK ACCOUNT NO.", type: "text", WantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 30%"
            }

          },
          {
            name: "ifsc", label: "BANK NAME WITH IFSC CODE", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "ifsc", label: "BANK NAME WITH IFSC CODE", type: "text", WantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 22%"
            }

          },
        ]}
      />

      {/* SSSM ID NUMBER &&  FAMILY SSSM ID NUMBER    */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "ssin", label: "SSSM ID NUMBER", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "ssin", label: "SSSM ID NUMBER", inputMode: "numericOnly", type: "text", WantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 30%"
            }

          },
          {
            name: "familySsn", label: "FAMILY SSSM ID NUMBER", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "familySsn", label: "FAMILY SSSM ID NUMBER", inputMode: "numericOnly", type: "text", WantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 34%"
            }

          },
        ]}
      />

      {/* FATHER && MOTHER && GUARDIAN'S NAME */}
      <CustomLayout
        itemsPerRow={4}
        direction="row"
        cssSX={{ display: { xs: 'none', md: 'flex' } }}

        fields={[
          { name: "fullNameTYPO", label: "", type: "text", WantTypoORCustomField: "TYPO" },
          { name: "fatherName", label: "FATHER", type: "text", WantTypoORCustomField: "TYPO" },
          { name: "motherName", label: "MOTHER", type: "text", WantTypoORCustomField: "TYPO", },
          { name: "guardianName", label: " GUARDIAN(if any)", type: "text", WantTypoORCustomField: "TYPO", },
        ]}
      />

      <CustomLayout
        itemsPerRow={4}
        direction="row"
        fields={[
          { name: "fullNameTYPO", label: "FULL NAME:", type: "text", WantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "fatherName", label: "FATHER", type: "text", WantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "motherName", label: "MOTHER", type: "text", WantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "guardianName", label: "GUARDIAN", type: "text", WantTypoORCustomField: "FIELD", textAlign: "center" },
        ]}
      />

      {/* QUALIFICATION */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "QUALIFICATIONTYPO", label: "QUALIFICATION", type: "text", WantTypoORCustomField: "TYPO"
          },
          {
            name: "fatherQual", label: "FATHER QUALIFICATION", type: "text", WantTypoORCustomField: "FIELD"

          },
          {
            name: "motherQual", label: "MOTHER QUALIFICATION", type: "text", WantTypoORCustomField: "FIELD"

          },
          {
            name: "guardianQual", label: "GUARDIAN QUALIFICATION", type: "text", WantTypoORCustomField: "FIELD"

          },
        ]}
      />

      {/* OCCUPATION */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "OCCUPATIONTYPO", label: "OCCUPATION", type: "text", WantTypoORCustomField: "TYPO"
          },
          {
            name: "fatherOcc", label: "FATHER OCCUPATION", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD"

          },
          {
            name: "motherOcc", label: "MOTHER OCCUPATION", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD"

          },
          {
            name: "guardianOcc", label: "GUARDIAN OCCUPATION", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD"

          },
        ]}
      />

      {/* DESIGNATION */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "DESIGNATION", label: "DESIGNATION", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "TYPO"
          },
          {
            name: "fatherDesignation", label: "FATHER DESIGNATION", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD"

          },
          {
            name: "motherDesignation", label: "MOTHER DESIGNATION", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD"

          },
          {
            name: "guardianDesignation", label: "GUARDIAN DESIGNATION", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD"

          },
        ]}
      />

      {/* DEPARTMENT */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "DEPARTMENT", label: "DEPARTMENT", type: "text", WantTypoORCustomField: "TYPO"
          },
          {
            name: "fatherDepartment", label: "FATHER DEPARTMENT", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD"

          },
          {
            name: "motherDepartment", label: "MOTHER DEPARTMENT", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD"
          },
          {
            name: "guardianDepartment", label: "GUARDIAN DEPARTMENT", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD"
          },
        ]}
      />

      {/*  ANNUAL INCOME */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "ANNUAL INCOME", label: "ANNUAL INCOME", type: "text", WantTypoORCustomField: "TYPO"
          },
          {
            name: "fatherAnnualIncome", label: "FATHER ANNUAL INCOME", inputMode: "numericOnly", type: "text", WantTypoORCustomField: "FIELD"

          },
          {
            name: "motherAnnualIncome", label: "MOTHER ANNUAL INCOME", inputMode: "numericOnly", type: "text", WantTypoORCustomField: "FIELD"
          },
          {
            name: "guardianAnnualIncome", label: "GUARDIAN ANNUAL INCOME", inputMode: "numericOnly", type: "text", WantTypoORCustomField: "FIELD"
          },

        ]}
      />

      {/*  CONTACT NUMBER */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "CONTACT NUMBER", label: "CONTACT NUMBER", type: "text", WantTypoORCustomField: "TYPO"
          },
          {
            name: "fatherMobile", label: "FATHER CONTACT NUMBER", inputMode: "numericOnly", type: "text", WantTypoORCustomField: "FIELD"

          },
          {
            name: "motherMobile", label: "MOTHER CONTACT NUMBER", inputMode: "numericOnly", type: "text", WantTypoORCustomField: "FIELD"
          },
          {
            name: "guardianMobile", label: "GUARDIAN CONTACT NUMBER", inputMode: "numericOnly", type: "text", WantTypoORCustomField: "FIELD"
          },
        ]}
      />

      {/* PHOTOs */}
      <CustomLayout
        itemsPerRow={4}
        direction="row"
        fields={[
          {
            name: "photo",
            label: "PHOTO",
            type: "text",
            WantTypoORCustomField: "TYPO",
            sx: { alignItems: "center", justifyContent: "flex-start" },
          },
          {
            name: "fatherPhoto",
            type: "photo",
            WantTypoORCustomField: "TYPO",
            placeholderText: "AFFIX LATEST PASSPORT SIZE PHOTO OF FATHER",
            sx: { alignItems: "center", justifyContent: "center" },

          },
          {
            name: "motherPhoto",
            type: "photo",
            WantTypoORCustomField: "TYPO",
            placeholderText: "AFFIX LATEST PASSPORT SIZE PHOTO OF MOTHER",
            sx: { alignItems: "center", justifyContent: "center" },
          },
          {
            name: "guardianPhoto",
            type: "photo",
            WantTypoORCustomField: "TYPO",
            placeholderText: "AFFIX LATEST PASSPORT SIZE PHOTO OF GUARDIAN (if any)",
            sx: { alignItems: "center", justifyContent: "center" },
          },
        ]}
      />

      {/* NAME OF PREVIOUS SCHOOL */}
      <CustomLayout
        itemsPerRow={2}
        direction="row"
        fields={[
          {
            name: "NAME OF PREVIOUS SCHOOL",
            label: "NAME OF PREVIOUS SCHOOL",
            type: "text",
            WantTypoORCustomField: "TYPO",
            flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            },
          },
          {
            name: "prevSchoolName",
            label: "NAME OF PREVIOUS SCHOOL",
            inputMode: "alphaOnly",
            type: "text",
            WantTypoORCustomField: "FIELD",
            flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 77%"
            },
          },
        ]}
      />

      {/* PLACE && LAST CLASS && RESULT && SESSION */}
      <CustomLayout
        itemsPerRow={8}
        direction='row'
        fields={[
          {
            name: "palce", label: "PLACE", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: 'palce', label: 'PLACE', type: 'text', inputMode: "alphaOnly", WantTypoORCustomField: 'FIELD', TextLabel: 'PLACE', flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            }
          },
          {
            name: 'lastClass', label: 'LAST CLASS', type: 'text', WantTypoORCustomField: 'TYPO', flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "lastClass", label: "LAST CLASS", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD", TextLabel: "CASTE", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 15%"
            }
          },
          {
            name: "result", label: "RESULT", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "result", label: "RESULT", inputMode: "alphaOnly", type: "text", WantTypoORCustomField: "FIELD", TextLabel: "RESULT", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 10%"
            }
          },
          {
            name: "session", label: "SESSION", inputMode: "alphaOnly", type: "email", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "session", label: "SESSION", type: "email", WantTypoORCustomField: "FIELD", TextLabel: "EMAIL", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 17%"
            }
          },

        ]}
      />

      {/* CBSE REGISTRATION NO. */}

      <CustomLayout
        itemsPerRow={2}
        direction='row'
        fields={[
          {
            name: "cbseRegNo", label: "CBSE REGISTRATION NO.", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            }
          },
          {
            name: "cbseRegNo", label: "CBSE REGISTRATION NO.", type: "text", WantTypoORCustomField: "FIELD", TextLabel: "CBSE REGISTRATION NO.", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 77%"
            }
          },
        ]}
      />

      {/* HOSTEL NAME && CONTACT NO. */}
      <CustomLayout
        itemsPerRow={6}
        direction='row'
        fields={[
          {
            name: "hostelName", label: "HOSTEL NAME", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          }
          ,
          {
            name: "hostelName", inputMode: "alphaOnly", label: "HOSTEL NAME", type: "text", WantTypoORCustomField: "FIELD", TextLabel: "HOSTEL NAME", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 30%"
            }
          },
          {
            name: "contactNumber", label: "CONTACT NO (If student living in Hostel)", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            }
          },
          {
            name: "contactNumber", inputMode: "numericOnly", label: "CONTACT NO. (If student living in Hostel)", type: "text", WantTypoORCustomField: "FIELD", TextLabel: "CONTACT NO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 30%"
            }
          },
        ]}
      />

      {/* Name of Brother/Sister && CLASS */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "nameOfBrotherORSister", label: "NAME OF BROTHER/SISTER", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 7%"
            }
          },
          {
            name: "nameOfBrotherORSister", label: "NAME OF BROTHER/SISTER", type: "text", WantTypoORCustomField: "FIELD", TextLabel: "NAME OF BROTHER/SISTER", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 30%"
            }
          },
          {
            name: "classOfBrotherORSister", label: "CLASS", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 7%"
            }
          },
          {
            name: "classOfBrotherORSister", label: "CLASS", type: "text", WantTypoORCustomField: "FIELD", TextLabel: "CLASS", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 30%"
            }
          },
        ]}
      />

      {/* Studying in SSIA, && CLASS */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "studyingINSISAOfBrotherorSister", label: "STUDYING IN SSIA", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 7%"
            }
          },
          {
            name: "studyingINSISAOfBrotherorSister", label: "STUDYING IN SSIA", type: "text", WantTypoORCustomField: "FIELD", TextLabel: "STUDYING IN SSIA", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 33%"
            }
          },
          {
            name: "studyingINSISAOfBrotherorSisterClass", label: "CLASS", type: "text", WantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 7%"
            }
          },
          {
            name: "studyingINSISAOfBrotherorSisterClass", label: "CLASS", type: "text", WantTypoORCustomField: "FIELD", TextLabel: "CLASS", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 33%"
            }
          },
        ]}
      />
    </Box>
  )
}

export default InputForm