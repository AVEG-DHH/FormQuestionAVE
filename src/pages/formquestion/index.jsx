import { useEffect, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { db, ref, set } from '../../firebase';
import UIFormStep1 from '../../components/step/uiformstep1';
import UIFormStep1_1 from '../../components/step/uiformstep1_1';
import UIFormStep2 from '../../components/step/uiformstep2';
import UIFormStep2_1 from '../../components/step/uiformstep2_1';
import UIFormStep18 from '../../components/step/uiformstep18';
import UIFormStep18_1 from '../../components/step/uiformstep18_1';
import UIFormStep5 from '../../components/step/uiformstep5';
import UIFormStep6 from '../../components/step/uiformstep6';
import UIFormStep7 from '../../components/step/uiformstep7';
import UIFormStep8 from '../../components/step/uiformstep8';
import UIFormStep9 from '../../components/step/uiformstep9';
import UIFormStep10 from '../../components/step/uiformstep10';
import UIFormStep11 from '../../components/step/uiformstep11';
import UIFormStep12 from '../../components/step/uiformstep12';
import UIFormStep13 from '../../components/step/uiformstep13';
import UIFormStep14 from '../../components/step/uiformstep14';
import UIFormStep15 from '../../components/step/uiformstep15';
import UIFormStep19 from '../../components/step/uiformstep19';
import UIFormStep20 from '../../components/step/uiformstep20';
import UIFormStep21 from '../../components/step/uiformstep21';
import Loading from '../../components/loading';
import Header from '../../components/header';
import './style.scss';

const FormQuestion = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showButtonNext, setShowButtonNext] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // state - Step 2
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);

    const [formStep1, setFormStep1] = useState({ age: '' });
    const [formStep2, setFormStep2] = useState({ questionHomeEx: '' });
    const [formStep3, setFormStep3] = useState({ height: '' });
    const [formStep4, setFormStep4] = useState({ weight: '' });
    const [formStep5, setFormStep5] = useState({ questionGoal: '' });
    const [formStep6, setFormStep6] = useState({ questionExercise: '' });
    const [formStep7, setFormStep7] = useState({ questionHealthIssuse: '' });
    const [formStep8, setFormStep8] = useState({ questionPOP: '' });
    const [formStep9, setFormStep9] = useState({ questionFoods: '' });
    const [formStep10, setFormStep10] = useState({ questionInjuries: '' });
    const [formStep11, setFormStep11] = useState({ questionDailyEnergy: '' });
    const [formStep12, setFormStep12] = useState({ questionTypeExercise: '' });
    const [formStep13, setFormStep13] = useState({ questionWorkoutPD: '' });
    const [formStep14, setFormStep14] = useState({ questionWorkoutPref: '' });
    const [formStep15, setFormStep15] = useState({ questionEquipment: '' });
    const [formStep20, setFormStep20] = useState({ email: '', error: false });
    const [formStep21, setFormStep21] = useState({ questionName: '' });

    // Function Step 1:
    const handleNextStep1 = (value) => {
        setFormStep1({ age: value });
        setShowButtonNext(true);
        handleNext();
    };

    // Function Step 2:
    const handleNextStep2 = (value) => {
        setFormStep2({ questionHomeEx: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 3:
    const handleNextStep3 = (value) => {
        setFormStep3({ height: value });
    };
    // Function Step 4:
    const handleNextStep4 = (value) => {
        setFormStep4({ weight: value });
    };

    // Function Step 5:
    const handleNextStep5 = (value) => {
        setFormStep5({ questionGoal: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 6:
    const handleNextStep6 = (value) => {
        setFormStep6({ questionExercise: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 7:
    const handleNextStep7 = (value) => {
        setFormStep7({ questionHealthIssuse: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 8:
    const handleNextStep8 = (value) => {
        setFormStep8({ questionPOP: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 9:
    const handleNextStep9 = (value) => {
        setFormStep9({ questionFoods: value });
    };

    // Function Step 10:
    const handleNextStep10 = (value) => {
        setFormStep10({ questionInjuries: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 11:
    const handleNextStep11 = (value) => {
        setFormStep11({ questionDailyEnergy: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 12:
    const handleNextStep12 = (value) => {
        setFormStep12({ questionTypeExercise: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 13:
    const handleNextStep13 = (value) => {
        setFormStep13({ questionWorkoutPD: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 13:
    const handleNextStep14 = (value) => {
        setFormStep14({ questionWorkoutPD: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    const handleNextStep15 = (value) => {
        setFormStep15({ questionEquipment: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    const handleNextStep21 = (value) => {
        setFormStep21({ questionName: value });
        setTimeout(() => handleNext(), 300);
    };

    const steps = [
        {
            id: 1,
            content: <UIFormStep1 handleNextStep1={handleNextStep1} />,
        },

        {
            id: 2,
            content: <UIFormStep1_1 setIsCheckboxChecked={setIsCheckboxChecked} age={formStep1.age} />,
        },
        {
            id: 3,
            content: <UIFormStep2 handleNextStep2={handleNextStep2} />,
        },
        {
            id: 4,
            content: <UIFormStep2_1 setIsCheckboxChecked={setIsCheckboxChecked} />,
        },
        {
            id: 5,
            content: <UIFormStep5 handleNextStep5={handleNextStep5} />,
        },
        {
            id: 6,
            content: <UIFormStep6 handleNextStep6={handleNextStep6} />,
        },

        // {
        //     id: 7,
        //     content: <UIFormStep7 handleNextStep7={handleNextStep7} />,
        // },

        // {
        //     id: 8,
        //     content: <UIFormStep8 handleNextStep8={handleNextStep8} />,
        // },

        // {
        //     id: 9,
        //     content: <UIFormStep9 handleNextStep9={handleNextStep9} setIsCheckboxChecked={setIsCheckboxChecked} />,
        // },

        // {
        //     id: 10,
        //     content: <UIFormStep10 handleNextStep10={handleNextStep10} />,
        // },

        // {
        //     id: 11,
        //     content: <UIFormStep11 handleNextStep11={handleNextStep11} />,
        // },

        // {
        //     id: 12,
        //     content: <UIFormStep12 handleNextStep12={handleNextStep12} />,
        // },

        // {
        //     id: 13,
        //     content: <UIFormStep13 handleNextStep13={handleNextStep13} />,
        // },

        // {
        //     id: 14,
        //     content: <UIFormStep14 handleNextStep14={handleNextStep14} />,
        // },

        // {
        //     id: 15,
        //     content: <UIFormStep15 handleNextStep15={handleNextStep15} />,
        // },
        // {
        //     id: 16,
        //     content: (
        //         <UIFormStep18
        //             handleNextStep3={handleNextStep3}
        //             isCheckboxChecked={isCheckboxChecked}
        //             setIsCheckboxChecked={setIsCheckboxChecked}
        //         />
        //     ),
        // },

        {
            id: 15,
            content: <UIFormStep15 handleNextStep15={handleNextStep15} />,
        },
        {
            id: 16,
            content: (
                <UIFormStep18
                    handleNextStep3={handleNextStep3}
                    isCheckboxChecked={isCheckboxChecked}
                    setIsCheckboxChecked={setIsCheckboxChecked}
                />
            ),
        },

        {
            id: 17,
            content: <UIFormStep18_1 setIsInputValid={setIsInputValid} handleNextStep4={handleNextStep4} />,
        },
        {
            id: 19,
            content: <UIFormStep19 setIsCheckboxChecked={setIsCheckboxChecked} />,
        },
        {
            id: 20,
            content: <UIFormStep20 formStep20={formStep20} setFormStep20={setFormStep20} />,
        },
        {
            id: 21,
            content: <UIFormStep21 setIsInputValid={setIsInputValid} handleNextStep4={handleNextStep4} />,
        },
    ];

    const handleNext = () => {
        setIsLoading(true);
        setIsCheckboxChecked(false);
        setIsInputValid(false);
        setShowButtonNext(false);

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
        if (
            currentStep == 0 ||
            currentStep == 2 ||
            // currentStep == 3 ||
            currentStep == 4 ||
            currentStep == 5 ||
            currentStep == 6 ||
            currentStep == 7 ||
            currentStep == 9 ||
            currentStep == 10 ||
            currentStep == 11 ||
            currentStep == 12 ||
            currentStep == 13 ||
            currentStep == 14
        ) {
            setShowButtonNext(false);
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [currentStep]);

    console.log(formStep21);

    const handleSubmit = () => {
        if (!formStep20.email) {
            setFormStep20({ error: true });
            return;
        } else {
            setFormStep20({ error: false });
        }

        const userId = Date.now();
        const customerData = {
            Age: formStep1.age || null,
            questionGender: formStep2.questionGender || null,
            height: formStep3.height || null,
            weight: formStep4.weight || null,
            questionGoal: formStep5.questionGoal || null,
            questionExercise: formStep6.questionExercise || null,
            questionHealthIssues: formStep7.questionHealthIssuse || null,
            questionPOP: formStep8.questionPOP || null,
            questionFoods: formStep9.questionFoods || null,
            questionInjuries: formStep10.questionInjuries || null,
            questionDailyEnergy: formStep11.questionDailyEnergy || null,
            questionTypeExercise: formStep12.questionTypeExercise || null,
            questionWorkoutPD: formStep13.questionWorkoutPD || null,
            questionWorkoutPref: formStep14.questionWorkoutPref || null,
            questionEquipment: formStep15.questionEquipment || null,
            EmailCustomer: formStep20.email || null,
        };

        set(ref(db, `customer-answer/${userId}`), customerData)
            .then(() => {
                alert('Dữ liệu đã được thêm thành công!');
                window.parent.postMessage('redirect', '*');
            })
            .catch((error) => {
                console.error('Lỗi khi thêm dữ liệu lên Firebase:', error);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    console.log(formStep5);

    return (
        <>
            {isLoading && <Loading />}
            <Header currentStep={currentStep} handleBack={handleBack} />
            <Box className="block-form-question">
                <Typography variant="h6" className="custom-block-step">
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
