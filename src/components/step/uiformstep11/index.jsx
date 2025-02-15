import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardActionArea, Checkbox, Box, Button } from '@mui/material';
import './uiformstep11.scss';

const options = [
    { id: 1, label: 'Neck Shoulder Nape Pain', image: '/img/ave-18.png', value: 'Neck Shoulder Nape Pain' },
    { id: 2, label: 'Sensitive back', image: '/img/ave-16.png', value: 'Sensitive back' },
    { id: 3, label: 'Sensitive knees', image: '/img/ave-15.png', value: 'Sensitive knees' },
    { id: 4, label: 'None of the above', image: '/img/ave-02.png', value: 'None of the above' },
];

const UIFormStep11 = ({ handleNext, handleNextStep11, isCheckboxChecked, setIsCheckboxChecked }) => {
    const [selected, setSelected] = useState([]);
    const [animate, setAnimate] = useState(null);

    const handleClick = (label) => {
        setAnimate(label);
        setTimeout(() => {
            setAnimate(null);
        }, 300);

        if (label === 'None of the above') {
            setSelected((prev) => (prev.includes(label) ? [] : [label]));
        } else {
            setSelected((prev) => {
                const newSelection = prev.includes(label)
                    ? prev.filter((item) => item !== label)
                    : [...prev.filter((item) => item !== 'None of the above'), label];
                return newSelection;
            });
        }
    };

    useEffect(() => {
        if (selected.length > 0) {
            setIsCheckboxChecked(true);
            handleNextStep11(selected.toString());
        } else {
            setIsCheckboxChecked(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected, setIsCheckboxChecked]);

    return (
        <Box className="struggle-container">
            <Typography className="title" variant="h5">
                Do you struggle with any of the following?
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {options.map((option) => (
                    <Grid item key={option.id} xs={12} sm={6} lg={3}>
                        <Card
                            className={`struggle-card ${selected.includes(option.value) ? 'selected' : ''} ${animate === option.value ? 'animate' : ''
                                }`}
                        >
                            <CardActionArea onClick={() => handleClick(option.value)} disableRipple>
                                <Box className="card-content">
                                    <img src={option.image} alt={option.label} className="card-image" />
                                </Box>
                                <Box className="card-footer">
                                    <Typography className="card-label" variant="subtitle1">
                                        {option.label}
                                    </Typography>
                                    <Checkbox
                                        checked={selected.includes(option.value)}
                                        className="checkbox"
                                        disableRipple
                                    />
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div className="btn-continue" style={{ textAlign: 'center' }}>
                <Button
                    className="custom-btn-continue"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={!isCheckboxChecked}
                    style={{ marginTop: '20px' }}
                >
                    Continue
                </Button>
            </div>
        </Box>
    );
};

UIFormStep11.propTypes = {
    handleNextStep11: PropTypes.func.isRequired,
    setIsCheckboxChecked: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    isCheckboxChecked: PropTypes.bool.isRequired,
};

export default UIFormStep11;
