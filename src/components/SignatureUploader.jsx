// SignatureUploader.jsx
import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";

const SignatureUploader = ({ label, onChange }) => {
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
            if (onChange) onChange(file); // parent ko file bhej do
        }
    };

    const handleRemove = () => {
        setPreview(null);
        if (onChange) onChange(null);
    };

    return (
        <Box
            sx={{
                border: "2px dashed #ccc",
                borderRadius: 2,
                p: 2,
                textAlign: "center",
                width: "100%",
                maxWidth: 300,
                m: "auto",
            }}
        >
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                {label}
            </Typography>

            {preview ? (
                <Box>
                    <img
                        src={preview}
                        alt="Signature Preview"
                        style={{
                            maxWidth: "100%",
                            maxHeight: 150,
                            objectFit: "contain",
                            borderRadius: 4,
                        }}
                    />
                    <IconButton color="error" onClick={handleRemove} sx={{ mt: 1 }}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ) : (
                <Button
                    variant="outlined"
                    component="label"
                    startIcon={<UploadIcon />}
                >
                    Upload Signature
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleFileChange}
                    />
                </Button>
            )}
        </Box>
    );
};

export default SignatureUploader;
