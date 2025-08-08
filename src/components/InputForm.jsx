import { Box, Grid } from '@mui/material'
import React from 'react'
import CustomTextField from './CustomTextField'
import CustomLayout from './CustomLayout'

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
          { name: "firstName", label: "STUDENT'S NAME:", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "firstName", label: "FIRST NAME", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "middleName", label: "MIDDLE NAME", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "lastName", label: "LAST NAME", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
        ]}
      />

      <CustomLayout
        itemsPerRow={4}
        direction="row"
        fields={[
          { name: "firstName", label: " IN CAPITAL LETTER:", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "firstName", label: "STUDENT'S NAME", type: "text", wantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "middleName", label: "MIDDLE NAME", type: "text", wantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "lastName", label: "LAST NAME", type: "text", wantTypoORCustomField: "FIELD", textAlign: "center" },
        ]}
      />

      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          { name: "firstName", label: "IN HINDI", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "firstNameHindi", label: "STUDENT'S NAME", type: "text", wantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "middleNameHindi", label: "MIDDLE NAME", type: "text", wantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "lastNameHindi", label: "LAST NAME", type: "text", wantTypoORCustomField: "FIELD", textAlign: "center" },
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
            wantTypoORCustomField: "TYPO",
            flex: {
              xs: "0 0 100%",
              sm: "0 0 30%",
              md: "0 0 10%",
            },
          },
          {
            name: "DOB",
            type: "date",
            wantTypoORCustomField: "FIELD",
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
          { name: "DOB", label: "DATE OF BIRTH IN WORDS", type: "text", wantTypoORCustomField: "TYPO", flex: "0 0 20%" },
          {
            name: "DOB", type: "text", wantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 95%",
              sm: "0 0 50%",
              md: "0 0 100%"
            }
          },

        ]}
      />

      <CustomLayout
        itemsPerRow={8}
        direction='row'
        fields={[
          {
            name: "religion", label: "RELIGION", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: 'religion', label: 'RELIGION', type: 'text', wantTypoORCustomField: 'FIELD', TextLabel: 'RELIGION', flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            }
          },
          {
            name: 'caste', label: 'CASTE', type: 'text', wantTypoORCustomField: 'TYPO', flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "caste", label: "CASTE", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "CASTE", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 15%"
            }
          },
          {
            name: "subcaste", label: "SUB CASTE", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "subcaste", label: "SUB CASTE", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "SUB CASTE", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 10%"
            }
          },
          {
            name: "email", label: "EMAIL", type: "email", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "email", label: "EMAIL", type: "email", wantTypoORCustomField: "FIELD", TextLabel: "EMAIL", flex: {
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
            name: "PER. COMPLETE ADDRESS", label: "PER. COMPLETE ADDRESS", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "PER. COMPLETE ADDRESS", label: "PER. COMPLETE ADDRESS", type: "text", wantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 80%"
            }

          },
          {
            name: "PER. COMPLETE ADDRESS", label: "PER. COMPLETE ADDRESS", type: "text", wantTypoORCustomField: "FIELD", flex: "0 0 100%"
          }
        ]}
      />

      {/* CURRENT ADDRESS */}
      <CustomLayout
        itemsPerRow={2}
        direction='row'
        fields={[
          {
            name: "CURRENT ADDRESS", label: "CURRENT ADDRESS", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "CURRENT ADDRESS", label: "CURRENT ADDRESS", type: "text", wantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 80%"
            }

          },
          {
            name: "CURRENT ADDRESS", label: "CURRENT ADDRESS", type: "text", wantTypoORCustomField: "FIELD", flex: "0 0 100%"
          }
        ]}
      />

      {/* AADHAR CARD & BLOOD GROUP */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "AADHAR CARD", label: "AADHAR CARD", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "AADHAR CARD", label: "AADHAR CARD", type: "text", wantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 40%"
            }

          },
          {
            name: "BLOOD GROUP", label: "BLOOD GROUP", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "BLOOD GROUP", label: "BLOOD GROUP", type: "text", wantTypoORCustomField: "FIELD", flex: {
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
            name: "STUDENT'S BANK ACCOUNT NO.", label: "STUDENT'S BANK ACCOUNT NO.", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "STUDENT'S BANK ACCOUNT NO.", label: "STUDENT'S BANK ACCOUNT NO.", type: "text", wantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 31%"
            }

          },
          {
            name: "BANK NAME WITH IFSC CODE", label: "BANK NAME WITH IFSC CODE", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "BANK NAME WITH IFSC CODE", label: "BANK NAME WITH IFSC CODE", type: "text", wantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 25%"
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
            name: "SSSM ID NUMBER", label: "SSSM ID NUMBER", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "SSSM ID NUMBER", label: "SSSM ID NUMBER", type: "text", wantTypoORCustomField: "FIELD", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 34%"
            }

          },
          {
            name: "FAMILY SSSM ID NUMBER", label: "FAMILY SSSM ID NUMBER", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "FAMILY SSSM ID NUMBER", label: "FAMILY SSSM ID NUMBER", type: "text", wantTypoORCustomField: "FIELD", flex: {
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
          { name: "fullName", label: "", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "fatherName", label: "FATHER", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "middleName", label: "MOTHER", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "lastName", label: " GUARDIAN(if any)", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
        ]}
      />

      <CustomLayout
        itemsPerRow={4}
        direction="row"
        fields={[
          { name: "firstName", label: "FULL NAME:", type: "text", wantTypoORCustomField: "TYPO", textAlign: "center" },
          { name: "firstName", label: "FATHER", type: "text", wantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "middleName", label: "MOTHER", type: "text", wantTypoORCustomField: "FIELD", textAlign: "center" },
          { name: "lastName", label: "GUARDIAN", type: "text", wantTypoORCustomField: "FIELD", textAlign: "center" },
        ]}
      />

      {/* QUALIFICATION */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "QUALIFICATION", label: "QUALIFICATION", type: "text", wantTypoORCustomField: "TYPO"
          },
          {
            name: "QUALIFICATION", label: "FATHER QUALIFICATION", type: "text", wantTypoORCustomField: "FIELD"

          },
          {
            name: "QUALIFICATION", label: "MOTHER QUALIFICATION", type: "text", wantTypoORCustomField: "FIELD"

          },
          {
            name: "QUALIFICATION", label: "GUARDIAN QUALIFICATION", type: "text", wantTypoORCustomField: "FIELD"

          },
        ]}
      />

      {/* OCCUPATION */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "OCCUPATION", label: "OCCUPATION", type: "text", wantTypoORCustomField: "TYPO"
          },
          {
            name: "OCCUPATION", label: "FATHER OCCUPATION", type: "text", wantTypoORCustomField: "FIELD"

          },
          {
            name: "OCCUPATION", label: "MOTHER OCCUPATION", type: "text", wantTypoORCustomField: "FIELD"

          },
          {
            name: "OCCUPATION", label: "GUARDIAN OCCUPATION", type: "text", wantTypoORCustomField: "FIELD"

          },
        ]}
      />

      {/* DESIGNATION */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "DESIGNATION", label: "DESIGNATION", type: "text", wantTypoORCustomField: "TYPO"
          },
          {
            name: "DESIGNATION", label: "FATHER DESIGNATION", type: "text", wantTypoORCustomField: "FIELD"

          },
          {
            name: "DESIGNATION", label: "MOTHER DESIGNATION", type: "text", wantTypoORCustomField: "FIELD"

          },
          {
            name: "DESIGNATION", label: "GUARDIAN DESIGNATION", type: "text", wantTypoORCustomField: "FIELD"

          },
        ]}
      />

      {/* DEPARTMENT */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "DEPARTMENT", label: "DEPARTMENT", type: "text", wantTypoORCustomField: "TYPO"
          },
          {
            name: "DEPARTMENT", label: "FATHER DEPARTMENT", type: "text", wantTypoORCustomField: "FIELD"

          },
          {
            name: "DEPARTMENT", label: "MOTHER DEPARTMENT", type: "text", wantTypoORCustomField: "FIELD"
          },
          {
            name: "DEPARTMENT", label: "GUARDIAN DEPARTMENT", type: "text", wantTypoORCustomField: "FIELD"
          },
        ]}
      />

      {/*  ANNUAL INCOME */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "ANNUAL INCOME", label: "ANNUAL INCOME", type: "text", wantTypoORCustomField: "TYPO"
          },
          {
            name: "ANNUAL INCOME", label: "FATHER ANNUAL INCOME", type: "text", wantTypoORCustomField: "FIELD"

          },
          {
            name: "ANNUAL INCOME", label: "MOTHER ANNUAL INCOME", type: "text", wantTypoORCustomField: "FIELD"
          },
          {
            name: "ANNUAL INCOME", label: "GUARDIAN ANNUAL INCOME", type: "text", wantTypoORCustomField: "FIELD"
          },

        ]}
      />

      {/*  CONTACT NUMBER */}
      <CustomLayout
        itemsPerRow={4}
        direction='row'
        fields={[
          {
            name: "CONTACT NUMBER", label: "CONTACT NUMBER", type: "text", wantTypoORCustomField: "TYPO"
          },
          {
            name: "CONTACT NUMBER", label: "FATHER CONTACT NUMBER", type: "text", wantTypoORCustomField: "FIELD"

          },
          {
            name: "CONTACT NUMBER", label: "MOTHER CONTACT NUMBER", type: "text", wantTypoORCustomField: "FIELD"
          },
          {
            name: "CONTACT NUMBER", label: "GUARDIAN CONTACT NUMBER", type: "text", wantTypoORCustomField: "FIELD"
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
            wantTypoORCustomField: "TYPO",
            sx: { alignItems: "center", justifyContent: "flex-start" },
          },
          {
            name: "fatherPhoto",
            type: "photo",
            wantTypoORCustomField: "TYPO",
            placeholderText: "AFFIX LATEST PASSPORT SIZE PHOTO OF FATHER",
            sx: { alignItems: "center", justifyContent: "center" },
            
          },
          {
            name: "motherPhoto",
            type: "photo",
            wantTypoORCustomField: "TYPO",
            placeholderText: "AFFIX LATEST PASSPORT SIZE PHOTO OF MOTHER",
            sx: { alignItems: "center", justifyContent: "center" },
          },
          {
            name: "guardianPhoto",
            type: "photo",
            wantTypoORCustomField: "TYPO",
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
            wantTypoORCustomField: "TYPO",
            flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            },
          },
          {
            name: "NAME OF PREVIOUS SCHOOL",
            label: "NAME OF PREVIOUS SCHOOL",
            type: "text",
            wantTypoORCustomField: "FIELD",
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
            name: "PLACE", label: "PLACE", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: 'PLACE', label: 'PLACE', type: 'text', wantTypoORCustomField: 'FIELD', TextLabel: 'PLACE', flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            }
          },
          {
            name: 'LAST CLASS', label: 'LAST CLASS', type: 'text', wantTypoORCustomField: 'TYPO', flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "LAST CLASS", label: "LAST CLASS", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "CASTE", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 15%"
            }
          },
          {
            name: "RESULT", label: "RESULT", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "RESULT", label: "RESULT", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "RESULT", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 10%"
            }
          },
          {
            name: "SESSION", label: "SESSION", type: "email", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          },
          {
            name: "SESSION", label: "SESSION", type: "email", wantTypoORCustomField: "FIELD", TextLabel: "EMAIL", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
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
            name: "CBSE REGISTRATION NO.", label: "CBSE REGISTRATION NO.", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            }
          },
          {
            name: "CBSE REGISTRATION NO.", label: "CBSE REGISTRATION NO.", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "CBSE REGISTRATION NO.", flex: {
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
            name: "HOSTEL NAME", label: "HOSTEL NAME", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 5%"
            }
          }
          ,
          {
            name: "HOSTEL NAME", label: "HOSTEL NAME", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "HOSTEL NAME", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 30%"
            }
          },
          {
            name: "CONTACT NO.", label: "CONTACT NO (If student living in Hostel)", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 20%"
            }
          },
          {
            name: "CONTACT NO.", label: "CONTACT NO. (If student living in Hostel)", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "CONTACT NO", flex: {
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
            name: "NAME OF BROTHER/SISTER", label: "NAME OF BROTHER/SISTER", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 7%"
            }
          },
          {
            name: "NAME OF BROTHER/SISTER", label: "NAME OF BROTHER/SISTER", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "NAME OF BROTHER/SISTER", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 30%"
            }
          },
          {
            name: "CLASS", label: "CLASS", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 7%"
            }
          },
          {
            name: "CLASS", label: "CLASS", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "CLASS", flex: {
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
            name: "STUDYING IN SSIA", label: "STUDYING IN SSIA", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 7%"
            }
          },
          {
            name: "STUDYING IN SSIA", label: "STUDYING IN SSIA", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "STUDYING IN SSIA", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 33%"
            }
          },
          {
            name: "CLASS", label: "CLASS", type: "text", wantTypoORCustomField: "TYPO", flex: {
              xs: "0 0 100%",
              sm: "0 0 100%",
              md: "0 0 7%"
            }
          },
          {
            name: "CLASS", label: "CLASS", type: "text", wantTypoORCustomField: "FIELD", TextLabel: "CLASS", flex: {
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