import React, { useRef, useState, useCallback, useMemo } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormikContext } from "formik";

const PhotoUpload = ({
    placeholderText,
    onChange,
    border = true,
    width = 150,
    height = 150,
    name,
}) => {
    const { setFieldValue, values, errors, touched } = useFormikContext();
    const [preview, setPreview] = useState(values[name] || null);
    const fileInputRef = useRef(null);

    // Memoize error check
    const hasError = useMemo(
        () => touched[name] && Boolean(errors[name]),
        [touched, errors, name]
    );

    // Handle file change
    const handleFileChange = useCallback(
        (event) => {
            const file = event.target.files[0];
            if (!file) return;

            const fileURL = URL.createObjectURL(file);
            setPreview(fileURL);

            setFieldValue(name, file);
            if (onChange) onChange(file);
        },
        [setFieldValue, name, onChange]
    );

    // Remove file
    const handleRemove = useCallback(() => {
        setPreview(null);
        setFieldValue(name, null);
        if (onChange) onChange(null);
    }, [setFieldValue, name, onChange]);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box
                sx={{
                    width: `${width}px`,
                    height: `${height}px`,
                    border: border
                        ? `2px solid ${hasError ? "#d32f2f" : "black"}`
                        : "none",
                    borderRadius: 2,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    cursor: "pointer",
                    flexDirection: "column",
                }}
            >
                {preview ? (
                    <>
                        <img
                            src={preview}
                            alt="Uploaded preview"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover" // "contain" use karoge to pura image visible rahega
                            }}
                        />

                        <IconButton
                            size="small"
                            sx={{
                                position: "absolute",
                                top: 4,
                                right: 4,
                                background: "rgba(0,0,0,0.5)",
                                color: "#fff",
                                "&:hover": { background: "rgba(0,0,0,0.7)" },
                            }}
                            onClick={handleRemove}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ mb: 1, px: 1, textAlign: "center" }}
                        >
                            {placeholderText}
                        </Typography>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => fileInputRef.current.click()}
                        >
                            Upload
                        </Button>
                    </>
                )}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
            </Box>

            {hasError && (
                <Typography
                    variant="caption"
                    color="error"
                    sx={{ mt: 0.5, textAlign: "center" }}
                >
                    {errors[name]}
                </Typography>
            )}
        </Box>
    );
};

export default React.memo(PhotoUpload);
