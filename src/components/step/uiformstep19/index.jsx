import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, CircularProgress, Modal, Rating, Stack, Button } from '@mui/material';
import './uiformstep19.scss';

const UIFormStep19 = ({ setIsCheckboxChecked, handleSubmit, isCheckboxChecked }) => {
    const [progress, setProgress] = useState(0);
    const totalTime = 6000; // Tổng thời gian: 6 giây (6000ms)
    const intervalTime = 100; // Mỗi lần cập nhật: 100ms

    const data = [
        {
            name: 'Improve Overall Health',
            description:
                'My name is Linda and I am 61 years old. Lately I have been feeling tired and my blood circulation seems to be not as good as before.',
            image: 'https://i.postimg.cc/KYPG5YD5/profile1.jpg',
            auth: 'Linda',
        },
        {
            name: 'Lose weight',
            description:
                'I wanted to slim down so that I could fit into the dress my daughter gave me for my birthday. However, at my middle age, it was difficult for me to maintain a daily exercise routine.',
            image: 'https://i.postimg.cc/mg0qgNMd/profile2.jpg',
            auth: 'Jennifer',
        },
        {
            name: 'Gain muscle',
            description:
                "I'm Lily, an office worker at the age of 52. I want to have a method to gain muscle but I don't like go to the gym. I wanted another solution.",
            image: 'https://i.postimg.cc/mg0qgNMd/profile2.jpg',
            auth: 'Lily',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false); // Trạng thái hiệu ứng
    const [openModal, setOpenModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Hàm tự động chuyển slide
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 3000); // 3 giây

        return () => clearInterval(interval); // Xóa interval khi unmount

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    // Hàm chuyển sang slide tiếp theo
    const handleNextSlide = () => {
        setIsSliding(true); // Bắt đầu hiệu ứng
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Thay đổi slide
            setIsSliding(false); // Kết thúc hiệu ứng
        }, 500); // Thời gian khớp với hiệu ứng CSS (0.5s)
    };

    const currentItem = data[currentIndex]; // Object hiện tại

    useEffect(() => {
        const step = (100 / totalTime) * intervalTime;
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setIsCheckboxChecked(true);
                    return 100;
                }
                return prev + step;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [setIsCheckboxChecked]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedImage(null);
    };

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

            <Typography variant="h4" gutterBottom>
                1.8 million followers
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                have chosen Natural Cleansing
            </Typography>

            <div className="slider">
                <div className={`slider-content ${isSliding ? 'sliding' : ''}`}>
                    <div className="card">
                        <div className="card-image">
                            <Rating value={5} readOnly className="testimonial-rating" />
                        </div>
                        <h2 className="name">{currentItem.name}</h2>
                        <p className="description">{currentItem.description}</p>
                        <p className="description" style={{ fontWeight: 700 }}>
                            {currentItem.auth}
                        </p>
                    </div>
                </div>
            </div>

            {/* Page Image */}
            <img
                src="/img/NC_page.jpg"
                alt="Profile"
                className="page-image"
                onClick={() => handleImageClick('/img/NC_page.jpg')}
            />

            {/* Modal to display image when clicked */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    className="modal-content"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <img src={selectedImage} alt="Enlarged" style={{ maxWidth: '80%', maxHeight: '80%' }} />
                </Box>
            </Modal>
            <div className="btn-continue" style={{ textAlign: 'center' }}>
                <Button
                    className="custom-btn-continue"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={!isCheckboxChecked}
                    style={{ marginTop: '20px' }}
                >
                    Finish
                </Button>
            </div>
        </Box>
    );
};

UIFormStep19.propTypes = {
    setIsCheckboxChecked: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isCheckboxChecked: PropTypes.bool.isRequired,
};

export default UIFormStep19;
