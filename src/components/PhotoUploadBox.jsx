import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const PhotoUploadBox = ({ placeholderText, onChange, border = true, width = 150, height = 150 }) => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            if (onChange) onChange(file);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        if (onChange) onChange(null);
    };

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
                    <img
                        src={image}
                        alt="Uploaded"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <IconButton
                        size="small"
                        sx={{ position: "absolute", top: 0, right: 0 }}
                        onClick={handleRemoveImage}
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </>
            ) : (
                <>
                    <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                        {placeholderText}
                    </Typography>
                    <Button
                        variant="outlined"
                        size="small"
                        component="label"
                        sx={{ mt: 1 }}
                    >
                        Upload
                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </Button>
                </>
            )}
            
        </Box>
    );
};

export default PhotoUploadBox;
