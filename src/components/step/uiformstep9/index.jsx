import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import './uiformstep9.scss';

// eslint-disable-next-line react/prop-types
const UIFormStep9 = ({ setIsCheckboxChecked, handleNextStep9 }) => {
    const [selectedValues, setSelectedValues] = useState([]);

    const handleNextStep9Child = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedValues((prev) => [...prev, value]);
        } else {
            setSelectedValues((prev) => prev.filter((item) => item !== value));
        }
    };

    useEffect(() => {
        console.log(selectedValues);
        const newValue = selectedValues.toString();
        console.log(newValue);
        if (newValue === '') {
            setIsCheckboxChecked(false);
            return;
        }
        handleNextStep9(newValue);
        setIsCheckboxChecked(true);
    }, [selectedValues]);

    return (
        <>
            <div className="form-step-9">
                <div>What are your target zones?</div>
                <FormControl className="form-step-9__checkbox">
                    <FormGroup onChange={handleNextStep9Child}>
                        <FormControlLabel
                            className={`form-step-9__label ${selectedValues.includes('Belly') ? 'checked' : ''}`}
                            control={<Checkbox value="Belly" className="target-icons" />}
                            label={<p className="form-step-9__content">Belly</p>}
                        />
                        <FormControlLabel
                            className={`form-step-9__label ${selectedValues.includes('Butt') ? 'checked' : ''}`}
                            control={<Checkbox value="Butt" className="target-icons" />}
                            label={<p className="form-step-9__content">Butt</p>}
                        />
                        <FormControlLabel
                            className={`form-step-9__label ${selectedValues.includes('Legs') ? 'checked' : ''}`}
                            control={<Checkbox value="Legs" className="target-icons" />}
                            label={<p className="form-step-9__content">Legs</p>}
                        />
                        <FormControlLabel
                            className={`form-step-9__label ${selectedValues.includes('Chest') ? 'checked' : ''}`}
                            control={<Checkbox value="Chest" className="target-icons" />}
                            label={<p className="form-step-9__content">Chest</p>}
                        />
                    </FormGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep9;
