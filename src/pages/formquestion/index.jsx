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
import LockIcon from '@mui/icons-material/Lock';
import UIFormStep1 from '../../components/step/uiformstep1';
import UIFormStep2 from '../../components/step/uiformstep2';
import './style.scss';
import UIFormStep3 from '../../components/step/uiformstep3';

const FormQuestion = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showButtonNext, setShowButtonNext] = useState(false);

    // state - Step 2
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);

    const [formStep1, setFormStep1] = useState(null);
    const [formStep2, setFormStep2] = useState({ questionGender: '' });
    const [formStep3, setFormStep3] = useState({ question: 'Yes' });
    const [formStep20, setFormStep20] = useState({ email: '', error: false });

    // Function Step 1:
    const handleNextStep1 = (value) => {
        setFormStep1({ age: value });
        setShowButtonNext(true);
        handleNext();
    };

    // Function Step 2:
    const handleNextStep2 = (value) => {
        setFormStep2({ questionGender: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    const steps = [
        {
            id: 1,
            content: <UIFormStep1 handleNextStep1={handleNextStep1} />,
        },
        {
            id: 2,
            content: <UIFormStep2 handleNextStep2={handleNextStep2} />,
        },

        {
            id: 3,
            content: <UIFormStep3 isCheckboxChecked={isCheckboxChecked} setIsCheckboxChecked={setIsCheckboxChecked} />,
        },

        {
            id: 4,
            content: <div className="form-step-6"></div>,
        },
        {
            id: 5,
            content: (
                <div className="form-step-5">
                    <h1>What is your fitness goal?</h1>
                    <FormControl>
                        <RadioGroup
                            name="fitness-goal"
                            // onChange={(e) => setFormStep5({ goal: e.target.value })}
                        >
                            <FormControlLabel value="Lose weight" control={<Radio />} label="Lose weight" />
                            <FormControlLabel value="Maintain weight" control={<Radio />} label="Maintain weight" />
                            <FormControlLabel value="Gain muscle" control={<Radio />} label="Gain muscle" />
                            <FormControlLabel
                                value="Improve overall health"
                                control={<Radio />}
                                label="Improve overall health"
                            />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>
            ),
        },
        {
            id: 6,
            content: (
                <div className="form-step-6">
                    <h1>How many days a week do you want to exercise?</h1>
                    <FormControl>
                        <RadioGroup
                            name="exercise-frequency"
                            // onChange={(e) => setFormStep6({ frequency: e.target.value })}
                        >
                            <FormControlLabel value="2 days" control={<Radio />} label="2 days" />
                            <FormControlLabel value="3 days" control={<Radio />} label="3 days" />
                            <FormControlLabel value="4 days" control={<Radio />} label="4 days" />
                            <FormControlLabel value="5 or more days" control={<Radio />} label="5 or more days" />
                        </RadioGroup>
                    </FormControl>
                </div>
            ),
        },
        {
            id: 7,
            content: (
                <div className="form-step-7">
                    <h1>Do you have any health issues?</h1>
                    <FormControl>
                        <RadioGroup
                            name="health-issues"
                            // onChange={(e) => setFormStep7({ issue: e.target.value })}
                        >
                            <FormControlLabel value="None" control={<Radio />} label="None" />
                            <FormControlLabel value="Back pain" control={<Radio />} label="Back pain" />
                            <FormControlLabel value="Joint pain" control={<Radio />} label="Joint pain" />
                            <FormControlLabel
                                value="High/low blood pressure"
                                control={<Radio />}
                                label="High/low blood pressure"
                            />
                            <FormControlLabel value="Diabetes" control={<Radio />} label="Diabetes" />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>
            ),
        },
        {
            id: 8,
            content: (
                <div className="form-step-8">
                    <h1>Are you pregnant or postpartum?</h1>
                    <FormControl>
                        <RadioGroup
                            name="pregnancy-status"
                            // onChange={(e) => setFormStep8({ status: e.target.value })}
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not applicable" control={<Radio />} label="Not applicable" />
                        </RadioGroup>
                    </FormControl>
                </div>
            ),
        },
        {
            id: 9,
            content: (
                <div className="form-step-9">
                    <h1>Do you have any food allergies or follow a special diet?</h1>
                    <div className="form-step-9__input">
                        <input type="text" placeholder="Example: Dairy-free, Vegan, Gluten-free, None" />
                    </div>
                </div>
            ),
        },
        {
            id: 10,
            content: (
                <div className="form-step-10">
                    <h1>Have you experienced any injuries or mobility issues?</h1>
                    <FormControl>
                        <RadioGroup
                            name="injury-history"
                            // onChange={(e) => setFormStep10({ injury: e.target.value })}
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                        {/* {formStep10.injury === 'Yes' && (
                            <textarea
                                placeholder="Please provide details"
                                // onChange={(e) => setFormStep10({ injuryDetails: e.target.value })}
                            ></textarea>
                        )} */}
                    </FormControl>
                </div>
            ),
        },
        {
            id: 11,
            content: (
                <div className="form-step-11">
                    <h1>What is your daily energy level?</h1>
                    <FormControl>
                        <RadioGroup
                            name="energy-level"
                            // onChange={(e) => setFormStep11({ energy: e.target.value })}
                        >
                            <FormControlLabel value="High" control={<Radio />} label="High" />
                            <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                            <FormControlLabel
                                value="Low - I often feel tired"
                                control={<Radio />}
                                label="Low - I often feel tired"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            ),
        },
        {
            id: 12,
            content: (
                <div className="form-step-12">
                    <h1>What type of exercises do you enjoy?</h1>
                    <FormControl>
                        <RadioGroup
                            name="exercise-preference"
                            // onChange={(e) => setFormStep12({ preference: e.target.value })}
                        >
                            <FormControlLabel
                                value="Cardio (running, jumping rope)"
                                control={<Radio />}
                                label="Cardio (running, jumping rope)"
                            />
                            <FormControlLabel
                                value="Strength (weights, planks)"
                                control={<Radio />}
                                label="Strength (weights, planks)"
                            />
                            <FormControlLabel value="Yoga/Pilates" control={<Radio />} label="Yoga/Pilates" />
                            <FormControlLabel
                                value="Flexibility/Balance exercises"
                                control={<Radio />}
                                label="Flexibility/Balance exercises"
                            />
                            <FormControlLabel value="Not sure yet" control={<Radio />} label="Not sure yet" />
                        </RadioGroup>
                    </FormControl>
                </div>
            ),
        },
        {
            id: 13,
            content: (
                <div className="form-step-13">
                    <h1>How much time do you usually spend on a workout?</h1>
                    <FormControl>
                        <RadioGroup
                            name="workout-duration"
                            // onChange={(e) => setFormStep13({ duration: e.target.value })}
                        >
                            <FormControlLabel
                                value="Less than 15 minutes"
                                control={<Radio />}
                                label="Less than 15 minutes"
                            />
                            <FormControlLabel value="15-30 minutes" control={<Radio />} label="15-30 minutes" />
                            <FormControlLabel value="30-60 minutes" control={<Radio />} label="30-60 minutes" />
                            <FormControlLabel
                                value="More than 60 minutes"
                                control={<Radio />}
                                label="More than 60 minutes"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            ),
        },
        {
            id: 14,
            content: (
                <div className="form-step-14">
                    <h1>Where do you prefer to work out?</h1>
                    <FormControl>
                        <RadioGroup
                            name="workout-location"
                            // onChange={(e) => setFormStep14({ location: e.target.value })}
                        >
                            <FormControlLabel value="At home" control={<Radio />} label="At home" />
                            <FormControlLabel value="Outdoors" control={<Radio />} label="Outdoors" />
                            <FormControlLabel value="In a gym" control={<Radio />} label="In a gym" />
                            <FormControlLabel value="No preference" control={<Radio />} label="No preference" />
                        </RadioGroup>
                    </FormControl>
                </div>
            ),
        },
        {
            id: 15,
            content: (
                <div className="form-step-15">
                    <h1>What equipment do you have access to?</h1>
                    <FormControl>
                        <RadioGroup
                            name="workout-equipment"
                            // onChange={(e) => setFormStep15({ equipment: e.target.value })}
                        >
                            <FormControlLabel value="None" control={<Radio />} label="None" />
                            <FormControlLabel value="Chair/mat" control={<Radio />} label="Chair/mat" />
                            <FormControlLabel value="Dumbbells" control={<Radio />} label="Dumbbells" />
                            <FormControlLabel value="Resistance bands" control={<Radio />} label="Resistance bands" />
                            <FormControlLabel
                                value="Other advanced equipment"
                                control={<Radio />}
                                label="Other advanced equipment"
                            />
                        </RadioGroup>
                    </FormControl>
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
        setIsCheckboxChecked(false);
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
    console.log(formStep1);
    console.log(formStep2);
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
                        showButtonNext &&
                        (isCheckboxChecked ? (
                            <Button
                                className="custom-btn-continue"
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                disabled={!isCheckboxChecked}
                            >
                                Continue
                            </Button>
                        ) : (
                            <Button
                                className="custom-btn-continue"
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                disabled={!isInputValid}
                            >
                                Continue
                            </Button>
                        ))
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
