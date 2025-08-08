import React from "react";
import { Box, Typography } from "@mui/material";
import PhotoUploadBox from "./PhotoUploadBox";
const DocumentList = ({ title, documents, columns = 1 }) => {
    return (
        <Box>
            {title && (
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", mb: 1 }}
                >
                    {title}
                </Typography>
            )}
            <Box
                sx={{
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                }}
            >
                {documents?.map((doc, index) => (
                    <Typography key={index} sx={{ maxWidth: 300 , display: "flex", alignItems: "center"}} variant="body2">
                        {index + 1}) {doc}
                        <PhotoUploadBox placeholderText={""} onChange={(file) => console.log(file)} border={false} width={80} height={20} />
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default DocumentList;
