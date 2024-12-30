import { useEffect, useState } from 'react';
import { Button, Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { db, ref, set } from '../../firebase';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './style.scss';

const FormQuestion = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showButtonNext, setShowButtonNext] = useState(false);
    const [formStep1, setFormStep1] = useState(null);
    const [formStep3, setFormStep3] = useState({ question: 'Yes' });

    const handleNextStep1 = (value) => {
        setFormStep1({ age: value });
        setShowButtonNext(true);
        handleNext();
    };

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
                <div className="form-step-2">
                    <div className="form-step-2__content">
                        <div className="form-step-2__title__color">Over 500,000 women</div>
                        <div className="form-step-2__desc">
                            in their 20s already tried our Wall Pilates Workout Plan
                        </div>
                    </div>
                    <div className="form-step-2__img">
                        <img src="/img/img-step-2.png" alt="img" />
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className="form-step-3">
                    <div>Have you tried Wall Pilates workouts before?</div>
                    <FormControl>
                        <RadioGroup
                            value={formStep3.question}
                            name="radio-buttons-group"
                            onChange={(e) => setFormStep3({ question: e.target.value })}
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
            ),
        },
        {
            id: 4,
            content: (
                <div className="form-step-4">
                    <div className="form-step-4__content">
                        <div className="form-step-4__title__color">{`You're going to crush this!`}</div>
                        <div className="form-step-4__desc">
                            <p>Our Wall Pilates program is easy and effective fitness option for all levels.</p>
                            <p>
                                We help you{' '}
                                <span className="form-step-4__desc__bold">get in shape using zero equipment</span> at
                                home!
                            </p>
                        </div>
                    </div>
                    <div className="form-step-4__img">
                        <img src="/img/img-step-4.png" alt="img" />
                    </div>
                </div>
            ),
        },
        {
            id: 5,
            content: (
                <div className="form-step-5">
                    <div>{`What's your main goal?`}</div>
                    <FormControl>
                        <RadioGroup defaultValue="Lose weight" name="radio-buttons-group">
                            <FormControlLabel
                                value="Lose weight"
                                control={<Radio />}
                                label={
                                    <>
                                        <div className="form-step-5__label">
                                            <div className="form-step-5__img-icon">
                                                <img src="/icons/icons-step-5-1.png" alt="img" />
                                            </div>
                                            Lose weight
                                        </div>
                                    </>
                                }
                            />
                            <FormControlLabel
                                value="Maintain weight and get fit"
                                control={<Radio />}
                                label={
                                    <>
                                        <div className="form-step-5__label">
                                            <div className="form-step-5__img-icon">
                                                <img src="/icons/icons-step-5-2.png" alt="img" />
                                            </div>
                                            Maintain weight and get fit
                                        </div>
                                    </>
                                }
                            />
                        </RadioGroup>
                    </FormControl>
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
        if (currentStep == 0) {
            setShowButtonNext(false);
        }
    }, [currentStep]);

    const handleSubmit = () => {
        console.log('Selected age:', formStep1);
        console.log('Selected age:', formStep3);
        const userId = Date.now(); // Tạo id người dùng tạm thời

        set(ref(db, 'customer-answer/' + userId), {
            Age: formStep1.age,
            Question: formStep3.question,
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
                <Typography variant="h6" className='custom-block-step' sx={{ marginBottom: 3 }}>
                    <div className={`step-content step-${currentStep}`}>{steps[currentStep].content}</div>
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    {currentStep < steps.length - 1 ? (
                        showButtonNext && (
                            <Button className='custom-btn-continue' variant="contained" color="primary" onClick={handleNext}>
                                Continue
                            </Button>
                        )
                    ) : (
                        <Button className='custom-btn-continue' variant="contained" color="success" onClick={handleSubmit}>
                            Finish
                        </Button>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default FormQuestion;
