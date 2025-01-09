import { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardActionArea, Checkbox, Box } from '@mui/material';
import './uiformstep11.scss';

const options = [
    { id: 1, label: 'Sensitive back', image: '/img/age-40-49.png', value: 'Sensitive back' },
    { id: 2, label: 'Sensitive knees', image: '/img/age-50-59.png', value: 'Sensitive knees' },
    { id: 3, label: 'None of the above', image: '/img/age-70+.png', value: 'None of the above' },
];
// eslint-disable-next-line react/prop-types
const UIFormStep11 = ({ handleNextStep11, setIsCheckboxChecked }) => {
    const [selected, setSelected] = useState([]);

    const handleClick = (label) => {
        if (label === 'None of the above') {
            // Nếu chọn "None of the above", chỉ giữ lại label này và xóa hết mục khác
            setSelected((prev) => (prev.includes(label) ? [] : [label]));
        } else {
            // Nếu chọn mục khác, bỏ chọn "None of the above"
            setSelected((prev) => {
                const newSelection = prev.includes(label)
                    ? prev.filter((item) => item !== label) // Bỏ chọn mục hiện tại
                    : [...prev.filter((item) => item !== 'None of the above'), label]; // Bỏ "None of the above" nếu nó đang được chọn
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
            {/* <Box className="selected-options">
                <Typography variant="h6">Selected Options:</Typography>
                <Typography>{selected.join(', ') || 'None'}</Typography>
            </Box> */}
        </Box>
    );
};

export default UIFormStep11;
