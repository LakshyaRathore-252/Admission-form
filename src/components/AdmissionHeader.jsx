import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import CustomTextField from './CustomTextField'
import { Photo } from "@mui/icons-material";
import PhotoUploadBox from "./PhotoUploadBox";
import CustomLayout from './CustomLayout'

const AdmissionHeader = () => {
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(URL.createObjectURL(file));
        }
    };

    return (
        <Box>
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "stretch", md: "start" }}
                sx={{ p: 4, gap: 2 }}
            >
                {/* Left - School Info */}
                <Box width={{ xs: '100%', md: '33%' }}>
                    <Typography variant="body2">
                        <strong>Affiliation No. :</strong> 1030612
                    </Typography>
                    <Typography variant="body2">
                        <strong>School Code No. :</strong> 50683
                    </Typography>
                </Box>

                {/* Middle - Official Use Box */}
                <Box
                    width={{ xs: '90%', md: '35%' }}
                    sx={{
                        border: "1px solid black",
                        borderRadius: 2,
                        px: 1,
                        py: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="body2" fontWeight="bold">
                        FOR OFFICIAL USE
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center",  }}>
                        <CustomLayout
                            itemsPerRow={2}
                            direction="row"
                            fields={[
                                {
                                    wantTypoORCustomField: 'TYPO',
                                    type: 'text',
                                    label: 'Scholar No:',
                                    variant: "body2",
                                    name: 'scholarNo',
                                    sx: { fontWeight: "bold" },
                                    flex: { xs: '0 0 20%', md: '0 0 5%' },

                                },
                                {
                                    wantTypoORCustomField: 'FIELD',
                                    type: 'text',
                                    label: '',
                                    name: 'scholarNo',
                                    TextLabel: "Scholar No.",
                                    variant: "outlined",
                                    fullWidth: true,
                                    sx: { flex: 3 }


                                }
                            ]}
                        />
                    </Box>

                    <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
                        <CustomLayout
                            itemsPerRow={2}
                            direction="row"
                            fields=
                            {[
                                {
                                    wantTypoORCustomField: 'TYPO',
                                    type: 'text',
                                    label: 'Date Of Admission:',
                                    variant: "body2",
                                    name: 'dateOfAdmission',
                                    sx: { fontWeight: "bold" },
                                    flex: { xs: '0 0 20%', md: '0 0 5%' },
                                },
                                {
                                    wantTypoORCustomField: 'FIELD',
                                    type: 'date',
                                    label: '',
                                    name: 'scholarNo',
                                    TextLabel: "Scholar No.",
                                    variant: "outlined",
                                    // fullWidth: true,
                                    flex:{ xs: '0 0 80%', md: '0 0 10%' },
                                }

                            ]}
                        />
                    </Box>
                </Box>

                {/* Right - Photo Box */}
                <Box
                    width={{ xs: '100%', md: '20%' }}
                    height="130px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"

                >
                    <PhotoUploadBox
                        placeholderText={"AFFIX LATEST PASSPORT SIZE PHOTO OF STUDENT"}
                        onChange={handlePhotoChange}
                        width={200}
                        height={100}
                    />
                </Box>
            </Box>

            {/* PEN NO : */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CustomLayout
                    itemsPerRow={2}
                    direction="row"
                    fields={[
                        {
                            wantTypoORCustomField: 'TYPO',
                            type: 'text',
                            label: 'PEN NO:',
                            name: 'penNo',
                            flex: {
                                xs: '0 0 100%',
                                md: '0 0 10%'
                            }
                        },
                        {
                            wantTypoORCustomField: 'FIELD',
                            type: 'text',
                            label: '',
                            name: 'penNo',
                            variant: "outlined",
                            width: '100%',
                            sx: { flex: 1 }
                        }
                    ]}
                />
                {/* </Box> */}
            </Box>

            {/* To, The Principal */}
            <Box sx={{ p: 4 }}>
                <Typography variant="body2" fontWeight="bold">
                    To,
                    <br />
                    The Principal.
                    <br />
                    <Typography variant="body2" fontWeight="normal">
                        Sai Shree International Academy,
                    </Typography>
                    <br />
                    <Box display="flex" alignItems="center" flexWrap="wrap" gap={1}>
                        <Typography variant="body2" component="strong" sx={{ fontWeight: "bold" }}>
                            We apply for the admission of our ward for standard
                        </Typography>

                        <CustomTextField
                            label=""
                            height={30}
                            size="small"
                            width="150px"
                        />

                        <Typography variant="body2" component="span" sx={{ fontWeight: "bold" }}>
                            for the session
                        </Typography>

                        <CustomTextField
                            label=""
                            height={30}
                            size="small"
                            width="150px"
                        />
                    </Box>
                </Typography>
            </Box>
        </Box>

    );
};

export default AdmissionHeader;
