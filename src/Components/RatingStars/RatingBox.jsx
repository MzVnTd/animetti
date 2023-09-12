import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const RatingBox = ({ value, onRatingChange }) => {
    return (
        <Box>
            <Typography component="legend">Your Rating</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    if (newValue > 0) {
                        onRatingChange(newValue); // Call the callback to update the rating in AnimeDetail
                    }
                }}
            />
        </Box>
    );
};

export default RatingBox;

