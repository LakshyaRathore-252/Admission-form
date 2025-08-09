import React from "react";
import { Box, Typography } from "@mui/material";
import PhotoUploadBox from "./PhotoUploadBox";
const DocumentList = ({ title, documents, columns = 1, nameArray }) => {
   
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
                    <Typography
                        key={index}
                        sx={{ maxWidth: 400, display: "flex", alignItems: "center" }}
                        variant="body2"
                    >
                        {index + 1}) {doc}
                        <PhotoUploadBox
                            name={nameArray?.[index] || ""}
                            placeholderText=""
                            onChange={(file) => console.log(file)}
                            border={false}
                            width={200}
                            height={100}
                        />
                    </Typography>
                ))}

            </Box>
        </Box>
    );
};

export default DocumentList;
