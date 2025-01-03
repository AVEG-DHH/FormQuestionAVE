import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import './uiformstep9.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep9 = ({ handleNextStep9, setIsCheckboxChecked }) => {
    const [anwser, setAnwser] = useState('');
    const handleOnchange = (value) => {
        setAnwser(value);
        handleNextStep9(value);
    };
    useEffect(() => {
        if (anwser === '') {
            setIsCheckboxChecked(false);
        } else {
            setIsCheckboxChecked(true);
        }
    }, [anwser]);

    return (
        <>
            <div className="form-step-9">
                <h1>Do you have any food</h1>
                <h1>allergies or follow a special diet?</h1>
                <div className="form-step-9__input">
                    <TextField
                        value={anwser}
                        onChange={(e) => handleOnchange(e.target.value)}
                        placeholder="Example: Dairy-free, Vegan, Gluten-free, ..."
                        variant="outlined"
                    />
                </div>
            </div>
        </>
    );
};

export default UIFormStep9;
