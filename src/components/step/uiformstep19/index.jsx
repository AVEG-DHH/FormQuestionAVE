import { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Card, CardContent, Rating, Stack } from '@mui/material';
import './uiformstep19.scss';

const UIFormStep19 = ({ setIsCheckboxChecked }) => {
    const [progress, setProgress] = useState(0);
    const totalTime = 6000; // Tổng thời gian: 5 giây (5000ms)
    const intervalTime = 100; // Mỗi lần cập nhật: 100ms

    useEffect(() => {
        const step = (100 / totalTime) * intervalTime;
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + step;
            });
        }, intervalTime);

        setTimeout(() => {
            setIsCheckboxChecked(true);
        }, 12000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Box className="chair-yoga-container">
            <Stack spacing={2} direction="row">
                <Box position="relative" display="inline-flex">
                    <CircularProgress variant="determinate" value={progress} className="block-Circular" />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="caption" component="div" color="textSecondary" className="text-percent">
                            {`${Math.round(progress)}%`}
                        </Typography>
                    </Box>
                </Box>
            </Stack>

            {/* 150 Million People Section */}
            <Typography variant="h4" gutterBottom>
                150 million people
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                have chosen BetterMe
            </Typography>

            {/* Testimonial Section */}
            <Card className="testimonial-card">
                <CardContent>
                    <Rating value={5} readOnly className="testimonial-rating" />
                    <Typography variant="h6" gutterBottom>
                        I have never felt better
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        When I turned 70 I realized I was losing balance and strength to do everyday things. I started
                        with the routines for the elderly and chair exercises. Now within two years I have never felt
                        better.
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="testimonial-author">
                        - Rosanna M.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UIFormStep19;
