import React from "react";
import DocumentList from "./DocumentList";
import { Box, Container } from "@mui/material";
import { documentRequired, stScObcDocs } from "../constant";
import CustomLayout from "./CustomLayout";


export default function Documents() {
    return (
        <Box>
            <Container sx={{ mt: 2, display: "grid", gap: 2, gridTemplateColumns: { sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }, padding: "0 34px" }}>
                <DocumentList
                    title="DOCUMENT REQUIRED:"
                    documents={documentRequired}
                    columns={1}
                />
                <DocumentList
                    title="Only for ST, SC & OBC"
                    documents={stScObcDocs}
                    columns={1}
                />

            </Container>
            <Box>
                <CustomLayout
                    itemsPerRow={7}
                    direction="row"
                    fields={[
                        {
                            name: "firstName",
                            label: "FORM ISSUED ON:",
                            type: "text",
                            wantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 5%"
                            }
                        },
                        {
                            name: "firstName",
                            type: "date",
                            wantTypoORCustomField: "FIELD",
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 10%"
                            }
                        },
                        {
                            name: "firstName",
                            label: "FORM No:",
                            type: "text",
                            wantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 5%"
                            }
                        },
                        {
                            name: "firstName",
                            label: "FORM No:",
                            type: "text",
                            wantTypoORCustomField: "FIELD",
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 20%"
                            }
                        },
                        {
                            type: "text",
                            label: "AUTHORISED SIGNATURE:",
                            wantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 10%"
                            },
                            sx: { marginLeft: { xs: 0, md: 'auto' } }

                        },
                        {
                            laebl: "",
                            type: "photo",
                            wantTypoORCustomField: "",
                            width: "150px",
                            height: "30px",
                            border: false,
                            flex: {
                                xs: "0 0 100%",
                                md: "0 0 5%"
                            },

                        },


                    ]}
                />
            </Box>
        </Box>
    );
}
