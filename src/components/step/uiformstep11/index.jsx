import { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardActionArea, Checkbox, Box } from '@mui/material';
import './uiformstep11.scss';

const options = [
    { id: 1, label: 'Sensitive back', image: '/img/age-40-49.png', value: 'Sensitive back' },
    { id: 2, label: 'Age: Sensitive knees', image: '/img/age-50-59.png', value: 'Sensitive knees' },
    { id: 3, label: 'None of the above', image: '/img/age-70+.png', value: 'None of the above' },
];
// eslint-disable-next-line react/prop-types
const UIFormStep11 = ({ handleNextStep11, setIsCheckboxChecked }) => {
    const [selected, setSelected] = useState([]);

    const handleClick = (value) => {
        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    useEffect(() => {
        if (selected.length > 0) {
            setIsCheckboxChecked(true);
            handleNextStep11(selected.toString());
        } else {
            setIsCheckboxChecked(false);
        }
    }, [selected, setIsCheckboxChecked]);

    return (
        <Box className="struggle-container">
            <Typography className="title" variant="h5">
                Do you struggle with any of the following?
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {options.map((option) => (
                    <Grid item key={option.id} xs={12} sm={4}>
                        <Card className={`struggle-card ${selected.includes(option.value) ? 'selected' : ''}`}>
                            <CardActionArea onClick={() => handleClick(option.value)}>
                                <Box className="card-content">
                                    <img src={option.image} alt={option.label} className="card-image" />
                                    <Checkbox checked={selected.includes(option.value)} className="checkbox" />
                                </Box>
                                <Typography className="card-label" variant="subtitle1">
                                    {option.label}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box className="selected-options">
                <Typography variant="h6">Selected Options:</Typography>
                <Typography>{selected.join(', ') || 'None'}</Typography>
            </Box>
        </Box>
    );
};

export default UIFormStep11;
