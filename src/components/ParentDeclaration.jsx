import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import CustomLayout from "./CustomLayout";

const DeclarationParagraph = ({ text, bold = false, highlight = false }) => {
    return (
        <Typography
            variant="body1"
            component="p"
            textAlign="justify"
            sx={{
                fontWeight: bold ? "bold" : "normal",
                backgroundColor: highlight ? "#dceeff" : "transparent",
                padding: highlight ? "4px 8px" : 0,
                borderRadius: highlight ? "4px" : 0,
                display: "inline-block",
            }}
        >
            {text}
        </Typography>
    );
};

const ParentDeclaration = () => {
    return (
        <Box p={{ md: 4, xs: 2 }}>
            <Box
                variant="body1"
                textAlign="center"
                fontWeight="bold"
                component={"div"}
            >
                PARENT'S DECLARATION
            </Box>

            <DeclarationParagraph
                text={`I/we have gone through all the rules, regulations and instructions and express my willingness to abide by them all. I fully understand that on accepting the registration of my ward the school is not in any way bound to grant admission, as the admission is purely based on availability of seats.`}
            />

            <DeclarationParagraph
                text={`We know, fully well, that fee and other charges once deposited by me are not refundable, even if my ward immediately leaves the institution, for any reason whatsoever.`}
                bold
            />

            <DeclarationParagraph
                text={`Also, the institution has the authority to charge penalty on account of any failure regarding fee payment on due date. As per prescribed rule by CBSE Delhi, the child's attendance must be more than 75%.`}
            />

            <Box mt={2}>
                <DeclarationParagraph
                    text={`We agree on the terms & conditions as given by the school authority & we are agree to pay the entire fees as per fee schedule & we will not demand any relaxation / freeship in this matter. I hereby declare that all the information provided by me is correct on my behalf.`}
                    bold
                />
            </Box>

            <Box mt={2}>
                <DeclarationParagraph
                    text={`विद्यालयीन आचार संहिता से मैं पूरी तरह से सहमत हूँ। मैं विद्यालय की फीस भरने में सक्षम हूँ मेरे द्वारा शुल्क नियमित रूप से भरा जायेगा एवं भविष्य में किसी भी प्रकार की शुल्क मुक्ति के लिए मुझसे आग्रह नहीं किया जायेगा। अगर किसी भी कारण से यदि प्रवेश निरस्त होता है तो जमा की गई फीस वापस नहीं होगी। मेरे द्वारा दी गई सभी जानकारी पूर्ण सही व सत्य है।`}
                    bold
                />
            </Box>

            <Box mt={4}>
                <CustomLayout
                    itemsPerRow={4}
                    direction="row"
                    fields={[
                        {
                            name: "DOB",
                            label: "DATE OF BIRTH",
                            type: "text",
                            wantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%",
                                sm: "0 0 100%",
                                md: "0 0 5%"
                            }
                        },
                        {
                            name: "DOB",
                            label: "",
                            type: "date",
                            wantTypoORCustomField: "FIELD",
                            flex: {
                                xs: "0 0 100%",
                                sm: "0 0 100%",
                                md: "0 0 45%"
                            },
                        },
                        {
                            name: "signature",
                            label: " Signature of Parent/Guardian",
                            type: "text",
                            wantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%",
                                sm: "0 0 100%",
                                md: "0 0 5%"
                            }
                        },
                        {
                            name: "signature",
                            label: "",
                            type: "photo",
                            wantTypoORCustomField: "TYPO",
                            border: false,
                            width: 150,
                            height: 30,
                            onchange: {},
                            flex: {
                                xs: "0 0 100%",
                                sm: "0 0 100%",
                                md: "0 0 20%"
                            }
                        },
                    ]}
                />
            </Box>
            <Box>
                <CustomLayout
                    itemsPerRow={6}
                    direction="row"
                    fields={[
                        {
                            label: "",
                            wantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 0%", // mobile
                                sm: "0 0 0%", // tablet
                                md: "0 0 30%"    // desktop
                            }

                        },
                        {
                            name: "Name",
                            label: "Name:",
                            wantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%", // mobile
                                sm: "0 0 100%", // tablet
                                md: "0 0 5%"    // desktop
                            }
                        },
                        {
                            name: "Name",
                            label: "Name:",
                            type: "text",
                            wantTypoORCustomField: "FIELD",
                            flex: {
                                xs: "0 0 100%", // mobile
                                sm: "0 0 100%", // tablet
                                md: "0 0 25%"    // desktop
                            }
                        },
                        {
                            name: "RELATION",
                            label: "RELATION:",
                            wantTypoORCustomField: "TYPO",
                            flex: {
                                xs: "0 0 100%", // mobile
                                sm: "0 0 100%", // tablet
                                md: "0 0 5%"    // desktop
                            }
                        },
                        {
                            name: "Relation",
                            label: "RELATION",
                            type: "text",
                            wantTypoORCustomField: "FIELD",
                            flex: {
                                xs: "0 0 100%", // mobile
                                sm: "0 0 100%", // tablet
                                md: "0 0 25%"    // desktop
                            }
                        }
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
    );
};

export default ParentDeclaration;
