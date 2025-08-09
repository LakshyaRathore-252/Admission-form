import React from "react";
import DocumentList from "./DocumentList";
import { Box, Container } from "@mui/material";
import { documentRequired, stScObcDocs } from "../../constant/constant";
import CustomLayout from "../ResuableLayout/CustomLayout";

export default function Documents() {
    return (
        <Box>
            <Container
                sx={{
                    mt: 2,
                    display: "grid",
                    gap: 2,
                    gridTemplateColumns: { sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
                    padding: "0 34px"
                }}
            >
                <DocumentList
                    title="DOCUMENT REQUIRED:"
                    documents={documentRequired.map(doc => doc.label)}
                    nameArray={documentRequired.map(doc => doc.name)}
                    columns={1}
                    name="documentRequired"
                />

                <DocumentList
                    title="Only for ST, SC & OBC"
                    documents={stScObcDocs.map(doc => doc.label)}
                    nameArray={stScObcDocs.map(doc => doc.name)}
                    columns={1}
                    name="stScObcDocs"
                />
            </Container>

            <Box>
                <CustomLayout
                    itemsPerRow={7}
                    direction="row"
                    fields={[
                        {
                            name: "formIssueDate",
                            label: "FORM ISSUED ON:",
                            type: "text",
                            WantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 5%"
                            }
                        },
                        {
                            name: "formIssueDate",
                            type: "date",
                            WantTypoORCustomField: "FIELD",
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 10%"
                            }
                        },
                        {
                            name: "formNo",
                            label: "FORM No:",
                            type: "text",
                            WantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 5%"
                            }
                        },
                        {
                            name: "formNo",
                            label: "FORM No:",
                            type: "text",
                              inputMode: "numericOnly",
                            WantTypoORCustomField: "FIELD",
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 20%"
                            }
                        },
                        {
                            type: "text",
                            name: "authorizedSign",
                            label: "AUTHORISED SIGNATURE:",
                            WantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 10%"
                            },
                            sx: { marginLeft: { xs: 0, md: 'auto' } }
                        },
                        {
                            label: "",
                            name: "authorizedSign",
                            type: "photo",
                            WantTypoORCustomField: "",
                            width: "150px",
                            height: "30px",
                            border: false,
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 5%"
                            }
                        }
                    ]}
                />
            </Box>
        </Box>
    );
}
