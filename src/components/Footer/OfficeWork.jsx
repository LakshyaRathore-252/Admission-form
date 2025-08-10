import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import CustomInput from '../ResuableInput/CustomInput'
import CustomLayout from '../ResuableLayout/CustomLayout'

const OfficeWork = () => {
    return (
        <Box p={{ xs: 2, md: " 0 32px" }} >
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography textAlign={"center"} sx={{ fontWeight: "900" }}>
                    FOR OFFICIAL USE ONLY
                </Typography>
            </Box>

            <Typography textAlign={"start"}>
                PRINCIPAL's REMARK
            </Typography>

            <Box
                mt={4}
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                mb={2}
                ml={2}
                gap={1}
            >
                <CustomInput name="stuName" type="text" WantTypoORCustomField="FIELD" width="150px" />

                <Typography variant="body1" component="span">
                    is admitted in 
                </Typography>

                <CustomInput name="class" type="text" WantTypoORCustomField="FIELD" width="150px" />

                <Typography variant="body1" component="span">
                    class on
                </Typography>

                <CustomInput name="admissionDate" type="text" WantTypoORCustomField="FIELD" width="150px" />

                <Typography variant="body1" component="span">
                    & his/her admission is provisional till required documents are not submitted.
                </Typography>

                <Box width="100%" />

                <Typography variant="body1" component="span" fontWeight="bold">
                    ADMISSION FEE / FIRST INSTALLMENT / PAID ON:
                </Typography>

                <CustomInput name="admissionDate" type="date" WantTypoORCustomField="FIELD" width="150px" />
            </Box>

            <Box>
                <CustomLayout
                    itemsPerRow={4}
                    direction='row'
                    alignItems="center"
                    justifyContent="center"
                    fields={[
                        {
                            name: "signOfAccAuthority",
                            label: " SIGNATURE OF ACCOUNTS AUTHORITY",
                            WantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%",
                                sm: "0 0 100%",
                                md: "0 0 5%"
                            }
                        },
                        {
                            name: "signOfAccAuthority",
                            label: "",
                            type: "photo",
                            WantTypoORCustomField: "TYPO",
                            width: 150,
                            height: 50,
                            border: false,
                            onchange: {},
                            flex: {
                                xs: "0 0 100%",
                                sm: "0 0 100%",
                                md: "0 0 26%"
                            }
                        },
                        {
                            name: "signOfScholAuthority",
                            label: " SIGNATURE OF SCHOOL AUTHORITY",
                            WantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%",
                                sm: "0 0 100%",
                                md: "0 0 5%"
                            }
                        },
                        {
                            name: "signOfScholAuthority",
                            label: "",
                            type: "photo",
                            WantTypoORCustomField: "TYPO",
                            width: 150,
                            height: 50,
                            border: false,
                            onchange: {},
                            flex: {
                                xs: "0 0 100%",
                                sm: "0 0 100%",
                                md: "0 0 15%"
                            }
                        },
                    ]}
                />
            </Box>

            <Divider
                orientation="horizontal"
                variant="middle"
                flexItem
                sx={{
                    borderTopWidth: "2px",   // thickness
                    borderColor: "black",    // color of the line
                    opacity: 1,              // make sure it's fully visible
                    width: "100%",
                    margin: "0 auto"
                }}
            />


        </Box>
    )
}

export default OfficeWork