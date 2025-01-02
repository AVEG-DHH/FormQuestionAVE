import React from 'react';
import { useEffect, useState } from 'react';
import {
    Button,
    Box,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Link,
    TextField,
} from '@mui/material';
import { db, ref, set } from '../../firebase';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LockIcon from '@mui/icons-material/Lock';
import { IoIosClose } from 'react-icons/io';

import './style.scss';

const FormQuestion = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showButtonNext, setShowButtonNext] = useState(false);
    const [formStep1, setFormStep1] = useState(null);
    const [formStep3, setFormStep3] = useState({ question: 'Yes' });
    const [selectedUnit, setSelectedUnit] = useState('cm');
    const [cmValue, setCmValue] = React.useState('');
    const [ftValue, setFtValue] = React.useState('');
    const [inValue, setInValue] = React.useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isWarningVisible, setIsWarningVisible] = useState(true);
    const [isInputValid, setIsInputValid] = useState(false);
    const [formStep20, setFormStep20] = useState({ email: '', error: false });

    useEffect(() => {
        if (selectedUnit === 'cm') {
            setIsInputValid(cmValue >= 90 && cmValue <= 243);
        } else if (selectedUnit === 'ft') {
            const isValidFt = ftValue >= 3 && ftValue <= 8;
            const isValidIn = inValue >= 0 && inValue <= 11;
            setIsInputValid(isValidFt && isValidIn);
        }
    }, [selectedUnit, cmValue, ftValue, inValue]);

    const handleNextStep1 = (value) => {
        setFormStep1({ age: value });
        setShowButtonNext(true);
        handleNext();
    };

    const handleCheckboxChange = (e) => {
        setIsCheckboxChecked(e.target.checked);
    };

    const handleCloseWarning = () => {
        setIsWarningVisible(false);
    };

    useEffect(() => {
        if (!isCheckboxChecked && (cmValue || ftValue || inValue)) {
            setIsWarningVisible(true);
        }
    }, [cmValue, ftValue, inValue, isCheckboxChecked]);

    const steps = [
        {
            id: 1,
            content: (
                <div className="form-step-1">
                    <h1>WALL PILATES WORKOUT PLAN</h1>
                    <h2>BASED ON YOUR AGE</h2>
                    <div className="form-step-1__content">
                        <div className="form-step-1__img" onClick={() => handleNextStep1('18-29')}>
                            <img src="/img/age-18-29.png" alt="img" />
                            <div className="form-step-1__btn">
                                Age: 18-29 <ChevronRightIcon />
                            </div>
                        </div>
                        <div className="form-step-1__img" onClick={() => handleNextStep1('30-39')}>
                            <img src="/img/age-30-39.png" alt="img" />
                            <div className="form-step-1__btn">
                                Age: 30-39 <ChevronRightIcon />
                            </div>
                        </div>
                        <div className="form-step-1__img" onClick={() => handleNextStep1('40-49')}>
                            <img src="/img/age-40-49.png" alt="img" />
                            <div className="form-step-1__btn">
                                Age: 40-49 <ChevronRightIcon />
                            </div>
                        </div>
                        <div className="form-step-1__img" onClick={() => handleNextStep1('50+')}>
                            <img src="/img/age-50+.png" alt="img" />
                            <div className="form-step-1__btn">
                                Age: 50+ <ChevronRightIcon />
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },

        {
            id: 2,
            content: (
                <div className="form-step-3">
                    <div>What is your Gender?</div>
                    <FormControl>
                        <RadioGroup
                            name="radio-buttons-group"
                            onChange={(e) => {
                                setFormStep3({ question: e.target.value });
                                setTimeout(() => handleNext(), 300);
                            }}
                        >
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                </div>
            ),
        },

        {
            id: 3,
            content: (
                <div className="form-step-6">
                    <h1>How tall are you?</h1>
                    <div className="form-step-6__container">
                        <div className="form-step-6__height">
                            <div className="form-step-6__toggle">
                                <button
                                    className={`toggle-btn ${selectedUnit === 'ft' ? 'active' : ''}`}
                                    onClick={() => setSelectedUnit('ft')}
                                >
                                    ft
                                </button>
                                <button
                                    className={`toggle-btn ${selectedUnit === 'cm' ? 'active' : ''}`}
                                    onClick={() => setSelectedUnit('cm')}
                                >
                                    cm
                                </button>
                            </div>
                        </div>
                        <div className="form-step-6__input">
                            {selectedUnit === 'cm' ? (
                                <>
                                    <div className="input-wrapper">
                                        <input
                                            value={cmValue}
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/\D/, ''); // Only numeric values
                                                setCmValue(value);
                                            }}
                                            placeholder="Height"
                                        />
                                        <span className="input-unit">cm</span>
                                    </div>
                                    {cmValue === '' || cmValue < 90 || cmValue > 243 ? (
                                        <p>
                                            Please, enter a value from <strong>90 cm</strong> to <strong>243 cm</strong>
                                        </p>
                                    ) : null}
                                </>
                            ) : (
                                <>
                                    <div className="input-wrapper ft-in">
                                        <div className="input-group">
                                            <input
                                                value={ftValue}
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/, '');
                                                    setFtValue(value);
                                                }}
                                                placeholder="Height"
                                            />
                                            <span className="input-unit">ft</span>
                                        </div>
                                        <div className="input-group">
                                            <input
                                                value={inValue}
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/, '');
                                                    setInValue(value);
                                                }}
                                                placeholder="Height"
                                            />
                                            <span className="input-unit">in</span>
                                        </div>
                                    </div>
                                    {ftValue === '' ||
                                    ftValue < 3 ||
                                    ftValue > 8 ||
                                    inValue === '' ||
                                    inValue < 0 ||
                                    inValue > 11 ? (
                                        <p>
                                            Please, enter a value from <strong>3 ft</strong> to{' '}
                                            <strong>8 ft 11 in</strong>
                                        </p>
                                    ) : null}
                                </>
                            )}
                        </div>

                        <div className="form-step-6__checkbox">
                            <input type="checkbox" id="consent" onChange={handleCheckboxChange} />
                            <label htmlFor="consent">
                                I consent to BetterMe processing my health onboarding data to provide services and
                                enhance my user experience.{' '}
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Privacy Policy
                                </a>
                            </label>
                            {/* Conditionally show warning message if checkbox is unchecked and input is entered */}
                            {!isCheckboxChecked && (cmValue || ftValue || inValue) && isWarningVisible && (
                                <div className="error-message-consent">
                                    <span>Consent required to continue</span>
                                    <IoIosClose className="close-btn" onClick={handleCloseWarning}>
                                        &times;
                                    </IoIosClose>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ),
        },

        {
            id: 20,
            content: (
                <div className="form-step-20">
                    <Box className="form-step-20__box">
                        <Typography className="form-step-20__box-h4" variant="h4">
                            Enter your email to get your
                        </Typography>
                        <Typography className="form-step-20__box-h4 form-step-20__box-color" variant="h4">
                            personalized Chair Yoga Plan
                        </Typography>
                        <form style={{ width: '100%' }}>
                            <TextField
                                label="Your email"
                                variant="outlined"
                                fullWidth
                                error={formStep20.error}
                                helperText={formStep20.error ? "This field shouldn't be empty" : ''}
                                value={formStep20.email}
                                onChange={(e) => setFormStep20({ email: e.target.value })}
                                sx={{ mb: 2 }}
                            />
                        </form>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                fontSize: '14px',
                                color: 'gray',
                            }}
                        >
                            <LockIcon fontSize="small" />
                            <Typography variant="body2">
                                We respect your privacy and are committed to protecting your personal data. Your data
                                will be processed in accordance with our{' '}
                                <Link href="#" underline="always" color="inherit">
                                    Privacy Policy
                                </Link>
                                .
                            </Typography>
                        </Box>
                    </Box>
                </div>
            ),
        },
    ];

    const handleNext = () => {
        setShowButtonNext(false); // Disable button during transition

        const currentStepElement = document.querySelector(`.step-${currentStep}`);
        currentStepElement.classList.add('fade-out'); // Add fade-out class

        setTimeout(() => {
            setCurrentStep((prevStep) => prevStep + 1); // Proceed to the next step
            const nextStepElement = document.querySelector(`.step-${currentStep + 1}`);
            nextStepElement.classList.add('fade-in'); // Add fade-in class to next step
            currentStepElement.classList.remove('fade-out'); // Remove fade-out class
        }, 500); // Match the duration of the fade transition

        setShowButtonNext(true); // Re-enable the button after transition
    };

    const handleBack = () => {
        setShowButtonNext(false); // Disable button during transition

        const currentStepElement = document.querySelector(`.step-${currentStep}`);
        currentStepElement.classList.add('fade-out'); // Add fade-out class

        setTimeout(() => {
            setCurrentStep((prevStep) => prevStep - 1); // Go back to the previous step
            const prevStepElement = document.querySelector(`.step-${currentStep - 1}`);
            prevStepElement.classList.add('fade-in'); // Add fade-in class to previous step
            currentStepElement.classList.remove('fade-out'); // Remove fade-out class
        }, 500); // Match the duration of the fade transition

        setShowButtonNext(true); // Re-enable the button after transition
    };

    useEffect(() => {
        if (currentStep == 0 || currentStep == 1) {
            setShowButtonNext(false);
        }
    }, [currentStep]);

    const handleSubmit = () => {
        if (!formStep20.email) {
            setFormStep20({ error: true });
            return;
        } else {
            setFormStep20({ error: false });
        }

        const userId = Date.now(); // Tạo id người dùng tạm thời

        set(ref(db, 'customer-answer/' + userId), {
            Age: formStep1.age,
            Question: formStep3.question,
            EmailCustomer: formStep20.email,
        })
            .then(() => {
                alert('Dữ liệu đã được thêm!');
                window.parent.postMessage('redirect', '*');
            })
            .catch((error) => {
                console.error('Lỗi khi thêm dữ liệu:', error);
            });
    };

    return (
        <>
            <Box className="block-form-question">
                {currentStep > 0 && (
                    <div style={{ width: '100%' }}>
                        <Box className="back-btn-container">
                            <Button variant="contained" color="secondary" onClick={handleBack}>
                                Back
                            </Button>
                        </Box>
                    </div>
                )}
                <Typography variant="h6" className="custom-block-step" sx={{ marginBottom: 3 }}>
                    <div className={`step-content step-${currentStep}`}>{steps[currentStep].content}</div>
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    {currentStep < steps.length - 1 ? (
                        showButtonNext && (
                            <Button
                                className="custom-btn-continue"
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                disabled={!isCheckboxChecked || !isInputValid}
                            >
                                Continue
                            </Button>
                        )
                    ) : (
                        <Button
                            className="custom-btn-continue"
                            variant="contained"
                            color="success"
                            onClick={handleSubmit}
                            disabled={!isCheckboxChecked || !isInputValid}
                        >
                            Finish
                        </Button>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default FormQuestion;
