import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import CustomTextField from './CustomTextField';
import PhotoUploadBox from './PhotoUploadBox';
import SignatureUploader from './SignatureUploader';

const CustomLayout = ({
    fields = [],
    itemsPerRow = 4, // default
    direction = 'column',
    wantTypoORCustomField = 'BOTH',
    sx = {},
    cssSX = {},
}) => {
    const theme = useTheme();

    // Breakpoints (you can adjust as needed)
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));   // mobile
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // tablets
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // small laptop
    const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));   // large screen

    // Adjust itemsPerRow based on screen
    let responsiveItemsPerRow = itemsPerRow;
    if (isXs) responsiveItemsPerRow = 1;
    else if (isSm) responsiveItemsPerRow = 2;
    else if (isMd) responsiveItemsPerRow = 3;
    else if (isLgUp) responsiveItemsPerRow = itemsPerRow; // default

    return (
        <Box sx={{ p: 2, ...sx }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {fields.map((field, index) => {
                    const currentType = field.wantTypoORCustomField ?? wantTypoORCustomField;

                    return (
                        <Box
                            key={index}
                            sx={{
                                ...(field.flex
                                    ? { flex: field.flex }
                                    : { flex: `0 0 calc(${100 / responsiveItemsPerRow}% - 16px)` }),
                                display: 'flex',
                                flexDirection: direction,
                                gap: 1,
                                alignItems: direction === 'row' ? 'center' : 'flex-start',
                                ...cssSX,
                                ...field.sx
                            }}
                        >

                            {/* Photo Field */}
                            {field.type === "photo" && (
                                <PhotoUploadBox
                                    placeholderText={field.placeholderText}
                                    onChange={field.onChange}
                                    width={field.width}
                                    height={field.height}
                                    border={field.border}

                                />
                            )}


                            {(currentType === 'BOTH' || currentType === 'TYPO') && (
                                <Typography variant='body2' sx={{ fontSize: 14, whiteSpace: 'nowrap', ...field.sx }}>
                                    {field.label}
                                </Typography>
                            )}




                            {(currentType === 'BOTH' || currentType === 'FIELD') && (
                                <CustomTextField
                                    type={field.type}
                                    name={field.name}
                                    TextLabel={field.label}
                                    width={field?.width}
                                    options={field.options || []}
                                    fontSize={field.fontSize}
                                    fontWeight={field.fontWeight}
                                />
                            )}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default CustomLayout;
