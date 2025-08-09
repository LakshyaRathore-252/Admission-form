import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormikContext } from "formik";
import { memo } from "react";

const PhotoUploadBox = ({ placeholderText, onChange, border = true, width = 150, height = 150, name }) => {
    const [image, setImage] = useState(null);
    const formik = useFormikContext();
    const usingFormik = !!(formik && name);

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0] || null;
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            if (onChange) onChange(file);
            if (usingFormik) {
                formik.setFieldValue(name, file);
                formik.setFieldTouched(name, true); // ✅ Touched set kiya
            }
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        if (onChange) onChange(null);
        if (usingFormik) {
            formik.setFieldValue(name, null);
            formik.setFieldTouched(name, true); // ✅ Remove pe bhi touched
        }
    };

    const showError = usingFormik && formik.touched[name] && Boolean(formik.errors[name]);
    const errorText = usingFormik && formik.touched[name] ? formik.errors[name] : "";

    return (
        <Box
            sx={{
                width: width,
                height: height,
                border: border ? "1px solid black" : "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                p: 1,
                flexDirection: "column",
                textAlign: "center",
            }}
        >
            {image ? (
                <>
                    <img src={image} alt="Uploaded" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <IconButton size="small" sx={{ position: "absolute", top: 0, right: 0 }} onClick={handleRemoveImage}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </>
            ) : (
                <>
                    <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                        {placeholderText}
                    </Typography>
                    <Button variant="outlined" size="small" component="label" sx={{ mt: 1 }}>
                        Upload
                        <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                    </Button>
                </>
            )}

            {showError && (
                <Box sx={{display:"flex" , justifyContent:"justify-end", alignItems:"center", width:"100%"}}>
                    <Typography textAlign={"end"} variant="caption" color="error" sx={{ mt: 0.5 , width:"100%" }}>
                        {errorText}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default memo(PhotoUploadBox);
