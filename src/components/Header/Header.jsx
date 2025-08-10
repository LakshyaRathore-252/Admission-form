import { Box, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import CustomInput from '../ResuableInput/CustomInput';

const Header = () => {
    return (
        <header style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: 1100, margin: "auto" }}>
            {/* Top Row: Logo + Title */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    px: 2,
                    py: 1,
                }}
            >
                {/* School Logo */}
                <Box
                    sx={{
                        flex: { xs: "0 0 auto", md: 1 },
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-start" },
                        mb: { xs: 1, md: 0 }
                    }}
                >
                    <img
                        src="https://infohubinnovations.com/resources/assets/images/logo/infohub_logo.png"
                        alt="Logo"
                        height="70px"
                        style={{ cursor: "pointer" }}
                    />
                </Box>

                {/* School Name and Contacts */}
                <Box
                    sx={{
                        flex: 4,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        width: "100%"
                    }}
                >
                    {/* School Name */}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{
                            textTransform: "uppercase",
                            textDecoration: "underline",
                            letterSpacing: 2,
                            fontSize: { xs: "1.5em", sm: "2em", md: "2.2em" },
                        }}
                    >
                        SAI SHREE INTERNATIONAL ACADEMY
                    </Typography>

                    {/* Contact Info */}
                    <Box
                        sx={{
                            flex: 2,
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "space-between",
                            alignItems: { xs: "center", sm: "center" },
                            fontSize: { xs: "0.9em", sm: "0.7em", md: "0.9em", lg: "0.9em" },
                            mt: { md: 2, sm: 3, xs: 3 },
                            width: "100%",
                            px: { xs: 1, md: 3 },
                            gap: { xs: 1, sm: 0, md: "4px" },

                        }}
                    >
                        <Typography variant="body2" fontWeight="bold" sx={{
                            textTransform: "uppercase", fontSize: { xs: "0.9em", sm: "0.9em", md: "0.8em", lg: "0.9em" },
                        }}>
                            Mob:
                            <Link href="tel:9691270729" sx={{ textDecoration: "none", color: "black" }}> 9691270729</Link>,
                            <Link href="tel:9425103500" sx={{ textDecoration: "none", color: "black" }}> 9425103500</Link>
                        </Typography>

                        <Typography variant="body2" fontWeight="bold" sx={{ color: "black", fontSize: { xs: "0.9em", sm: "0.9em", md: "0.8em", lg: "0.9em" }, }}>
                            Website:
                            <Link href="https://www.saishreeinternational.in/" sx={{ textDecoration: "none", color: "black" }}> www.Saishreeinternational.in</Link>
                        </Typography>

                        <Typography variant="body2" fontWeight="bold" sx={{ color: "black", fontSize: { xs: "0.9em", sm: "0.9em", md: "0.8em", lg: "0.9em" }, }} >
                            Email:
                            <Link
                                href="mailto:admin@saishreeinternational.in"
                                sx={{ textDecoration: "underline", color: "black", fontWeight: "bold" }}
                            >
                                admin@saishreeinternational.in
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Bottom Row: Admission Form Title + Form No Input */}
            <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                sx={{ py: 1, width: "100%", gap: { xs: 2, sm: 0 } }}
            >
                {/* Empty left space for layout balance */}
                <Box sx={{ width: { xs: "100%", sm: "23%" } }} />

                {/* Center - Admission Form Text */}
                <Box sx={{ width: { xs: "100%", sm: "43%" }, textAlign: "center" }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '1.2em', sm: '1.5em' },
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                            textTransform: 'uppercase'
                        }}
                    >
                        Admission Form
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={{
                            fontSize: { xs: '0.8em', sm: '0.9em' },
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                            mt: 1
                        }}
                    >
                        CLASS 1st to 10th
                    </Typography>
                </Box>

                {/* Right - Form Number Input */}
                <Box sx={{ width: { xs: "83%", sm: "33%", md: "23%" }, textAlign: "right", mt: { xs: 2 } }}>
                    <CustomInput
                        label=""
                        TextLabel='Form No.'
                        size="small"
                        type='text'
                        variant="outlined"
                        name="formNo"
                        inputMode="numericOnly"


                    />
                </Box>
            </Box>
        </header >
    );
};

export default Header;
