import { Checkbox, FormControl, FormControlLabel, FormGroup, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import './uiformstep9.scss';

// eslint-disable-next-line react/prop-types
const UIFormStep9 = ({ setIsCheckboxChecked, handleNextStep9, handleNext, isCheckboxChecked }) => {
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
        const newValue = selectedValues.toString();
        if (newValue === '') {
            setIsCheckboxChecked(false);
            return;
        }
        handleNextStep9(newValue);
        setIsCheckboxChecked(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedValues]);

    return (
        <>
            <div className="form-step-9">
                <div className="form-step-9__header">What are your target zones?</div>
                <FormControl className="form-step-9__checkbox">
                    <FormGroup onChange={handleNextStep9Child}>
                        <FormControlLabel
                            className={`form-step-9__label ${selectedValues.includes('Belly') ? 'checked' : ''}`}
                            classes={{
                                label: 'form-step-9__label-span',
                            }}
                            control={<Checkbox value="Belly" className="target-icons" />}
                            label={
                                <div className="form-step-9__content">
                                    <p>Belly</p>
                                    <div className="form-step-9__content-img">
                                        <img src="/img/ave-11.png" alt="" />
                                    </div>
                                </div>
                            }
                        />
                        <FormControlLabel
                            className={`form-step-9__label ${selectedValues.includes('Butt') ? 'checked' : ''}`}
                            classes={{
                                label: 'form-step-9__label-span',
                            }}
                            control={<Checkbox value="Butt" className="target-icons" />}
                            label={
                                <div className="form-step-9__content">
                                    <p>Butt</p>
                                    <div className="form-step-9__content-img">
                                        <img src="/img/ave-12.png" alt="" />
                                    </div>
                                </div>
                            }
                        />
                        <FormControlLabel
                            className={`form-step-9__label ${selectedValues.includes('Legs') ? 'checked' : ''}`}
                            classes={{
                                label: 'form-step-9__label-span',
                            }}
                            control={<Checkbox value="Legs" className="target-icons" />}
                            label={
                                <div className="form-step-9__content">
                                    <p>Legs</p>
                                    <div className="form-step-9__content-img">
                                        <img src="/img/ave-13.png" alt="" />
                                    </div>
                                </div>
                            }
                        />
                        <FormControlLabel
                            className={`form-step-9__label ${selectedValues.includes('Chest') ? 'checked' : ''}`}
                            classes={{
                                label: 'form-step-9__label-span',
                            }}
                            control={<Checkbox value="Chest" className="target-icons" />}
                            label={
                                <div className="form-step-9__content">
                                    <p>Chest</p>
                                    <div className="form-step-9__content-img">
                                        <img src="/img/ave-14.png" alt="" />
                                    </div>
                                </div>
                            }
                        />
                    </FormGroup>
                </FormControl>

            </div>
            <Button
                className="custom-btn-continue"
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={!isCheckboxChecked}
            >
                Continue
            </Button>
        </>
    );
};

export default UIFormStep9;
