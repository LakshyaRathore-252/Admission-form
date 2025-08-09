import React, { useMemo } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import CustomInput from '../ResuableInput/CustomInput';
import PhotoUploadBox from '../ResuablePhotoUploader/PhotoUploadBox';

const CustomLayout = React.memo(({
    fields = [],
    itemsPerRow = 4,
    direction = 'column',
    WantTypoORCustomField = 'BOTH',
    sx = {},
    cssSX = {},

}) => {
    const theme = useTheme();

    // ✅ Hooks order safe
    const isXS = useMediaQuery(theme.breakpoints.down('sm'));
    const isSM = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMD = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    const screenSize = isXS ? 'xs' : isSM ? 'sm' : isMD ? 'md' : 'lg';

    // ✅ Dependency array stable
    const responsiveItemsPerRow = useMemo(() => {
        switch (screenSize) {
            case 'xs': return 1;
            case 'sm': return 2;
            case 'md': return 3;
            default: return itemsPerRow;
        }
    }, [screenSize, itemsPerRow]);

    // ✅ Original rendering logic restored
    const renderFields = useMemo(() => {
        return fields.map((field, index) => {
            const currentType = field.WantTypoORCustomField ?? WantTypoORCustomField;

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
                    {/* Photo field */}
                    {field.type === "photo" && (
                        <PhotoUploadBox
                            name={field.name}
                            placeholderText={field.placeholderText}
                            onChange={field.onChange}
                            width={field.width}
                            height={field.height}
                            border={field.border}
                        />
                    )}

                    {(currentType === 'BOTH' || currentType === 'TYPO') && (
                        <Typography
                            variant='body2'
                            sx={{ fontSize: 14, whiteSpace: 'nowrap', ...field.sx }}
                        >
                            {field.label}
                        </Typography>
                    )}

                    {(currentType === 'BOTH' || currentType === 'FIELD') && (
                        <CustomInput
                            type={field.type}
                            name={field.name}
                            TextLabel={field.label}
                            width={field?.width}
                            options={field.options || []}
                            fontSize={field.fontSize}
                            fontWeight={field.fontWeight}
                            required={field.required}
                            inputMode={field.inputMode}
                            //  {...field} // yeh jaroori hai
                        />
                    )}
                </Box>
            );
        });
    }, [fields, WantTypoORCustomField, responsiveItemsPerRow, direction, cssSX]);

    return (
        <Box sx={{ p: 2, ...sx }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {renderFields}
            </Box>
        </Box>
    );
});

export default CustomLayout;
