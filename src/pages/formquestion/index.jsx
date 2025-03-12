import { IoScaleOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

import UIFormStep1 from '../../components/step/uiformstep1';
import UIFormStep1_1 from '../../components/step/uiformstep1_1';
import Uiformstep4_1 from '../../components/step/uiformstep4_1';
import UIFormStep6 from '../../components/step/uiformstep6';
import UIFormStep6_1 from '../../components/step/uiformstep6_1';
import UIFormStep7_2 from '../../components/step/uiformstep7_2';
import UIFormStep9 from '../../components/step/uiformstep9';
import UIFormStep11_1 from '../../components/step/uiformstep11_1';
import UIFormStep16 from '../../components/step/uiformstep16';
import UIFormStep17 from '../../components/step/uiformstep17';
import UIFormStep18 from '../../components/step/uiformstep18';
import UIFormStep18_1 from '../../components/step/uiformstep18_1';
import UIFormStep18_2 from '../../components/step/uiformstep18_2';
import UIFormStep18_3 from '../../components/step/uiformstep18_3';
import UIFormStep19 from '../../components/step/uiformstep19';
import UIFormStep20 from '../../components/step/uiformstep20';
import UIFormStep21 from '../../components/step/uiformstep21';
import UIFormStep22 from '../../components/step/uiformstep22';
import StepNew from '../../components/stepnew';
import Loading from '../../components/loading';
import Header from '../../components/header';
import './style.scss';

const FormQuestion = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // state - Step 2
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);

    const [formStep1, setFormStep1] = useState({ age: '' });
    const [formStep3, setFormStep3] = useState({ height: '' });
    const [formStep4, setFormStep4] = useState({ weight: '' });
    const [formStep5, setFormStep5] = useState({ questionGoal: '' });
    const [formStep6, setFormStep6] = useState({ questionExercise: '' });
    const [formStep7, setFormStep7] = useState({ questionHealthIssuse: '' });
    const [formStep7_2, setFormStep7_2] = useState({ questionDreambody: '' });
    const [formStep9, setFormStep9] = useState({ questionTarget: '' });
    const [formStep12, setFormStep12] = useState({ questionTypeExercise: '' });
    const [formStep17, setFormStep17] = useState({ questionMainReason: '' });
    const [formStep16, setFormStep16] = useState({ questionDiet: '' });
    const [formStep18_2, setFormStep18_2] = useState({ questionAge: '' });
    const [formStep20, setFormStep20] = useState({ email: '', error: false });
    const [formStep21, setFormStep21] = useState({ questionName: '' });
    const [formStep22, setFormStep22] = useState({ questionTargetWeight: '' });

    // Function Step 1:
    const handleNextStep1 = (value) => {
        setFormStep1({ age: value });
        localStorage.setItem('ageAround', value);
        handleNext();
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
        localStorage.setItem('goal', value.target.value);
        setTimeout(() => handleNext(), 300);
    };
    const propsFormStep5 = {
        title: <>What is your fitness goal?</>,
        handleStep: handleNextStep5,
        arrQuestion: [
            { icon: <IoScaleOutline className="block-step-new__body__radio__content__icon" />, value: 'Lose Weight' },
            {
                icon: (
                    <img
                        src="/icons/women-weight-decrease-icon.png"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon"
                    />
                ),
                value: 'Maintain Weight',
            },
            {
                icon: (
                    <img
                        src="/icons/arm-muscles-icon.png"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon"
                    />
                ),
                value: 'Gain Muscle',
            },
            {
                icon: (
                    <img
                        src="/icons/diet-food-icon.png"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon"
                    />
                ),
                value: 'Improve Overall Health',
            },
            {
                icon: (
                    <img
                        src="/icons/more-options-ellipsis-icon.png"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon"
                    />
                ),
                value: 'Other',
            },
        ],
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

    const propsFormStep7 = {
        title: <>Do you have any health issues?</>,
        handleStep: handleNextStep7,
        arrQuestion: [
            { icon: <MdClose className="block-step-new__body__radio__content__icon" />, value: 'None' },
            {
                icon: (
                    <img
                        src="/icons/back-pain-icon.png"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon"
                    />
                ),
                value: 'Back pain',
            },
            {
                icon: (
                    <img
                        src="/icons/knee-joint-pain-icon.png"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon"
                    />
                ),
                value: 'Joint pain',
            },
            {
                icon: (
                    <img
                        src="/icons/blood-pressure-icon.png"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon"
                    />
                ),
                value: 'High/low blood pressure',
            },
            {
                icon: (
                    <img
                        src="/icons/diabetes.png"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon"
                    />
                ),
                value: 'Diabetes',
            },
            {
                icon: (
                    <img
                        src="/icons/more-options-ellipsis-icon.png"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon"
                    />
                ),
                value: 'Other',
            },
        ],
    };

    // Function Step 7_2:
    const handleNextStep7_2 = (value) => {
        setFormStep7_2({ questionDreambody: value });
        setTimeout(() => handleNext(), 1000);
    };

    // Function Step 9:
    const handleNextStep9 = (value) => {
        setFormStep9({ questionTarget: value });
    };

    // Function Step 12:
    const handleNextStep12 = (value) => {
        setFormStep12({ questionTypeExercise: value.target.value });
        setTimeout(() => handleNext(), 300);
    };
    const propsFormStep12 = {
        title: <>What type of exercises do you enjoy?</>,
        handleStep: handleNextStep12,
        arrQuestion: [
            { icon: '', value: 'Cardio (running, jumping rope)' },
            { icon: '', value: 'Strength (weights, planks)' },
            { icon: '', value: 'Flexibility/Balance exercises' },
            { icon: '', value: 'Not sure yet' },
        ],
    };

    // Function Step 16:
    const handleNextStep16 = (value) => {
        setFormStep16({ questionDiet: value });
    };

    // Function Step 17:
    const handleNextStep17 = (value) => {
        setFormStep17({ questionMainReason: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 18_2:
    const handleNextStep18_2 = (value) => {
        setFormStep18_2({ questionAge: value });
    };

    // Function Step 21:
    const handleNextStep21 = (value) => {
        setFormStep21({ questionName: value });
    };

    // Function Step 22:
    const handleNextStep22 = (value) => {
        setFormStep22({ questionTargetWeight: value });
    };

    const handleNext = () => {
        setIsLoading(true);
        setIsCheckboxChecked(false);
        setIsInputValid(false);

        const currentStepElement = document.querySelector(`.step-${currentStep}`);
        if (currentStepElement) {
            currentStepElement.classList.add('fade-out');
        }

        setTimeout(() => {
            setCurrentStep((prevStep) => prevStep + 1);
            const nextStepElement = document.querySelector(`.step-${currentStep + 1}`);

            if (nextStepElement) {
                nextStepElement.classList.add('fade-in');
            }

            if (currentStepElement) {
                currentStepElement.classList.remove('fade-out');
            }
        }, 500);
    };

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            await saveDataToLarkBase();
        } catch (error) {
            console.error('Lỗi khi lưu dữ liệu:', error);
        }
    };

    const steps = [
        // Q1: BASE ON YOUR  AGE
        {
            id: 1,
            content: <UIFormStep1 handleNextStep1={handleNextStep1} />,
        },

        //Q2: OVER 1 MILLION WOMEN
        {
            id: 2,
            content: (
                <UIFormStep1_1
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    age={formStep1.age}
                    handleNext={handleNext}
                />
            ),
        },

        // Q31: WHAT'S YOUR NAME?
        {
            id: 3,
            content: (
                <UIFormStep21
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    handleNextStep21={handleNextStep21}
                    handleNext={handleNext}
                    isCheckboxChecked={isCheckboxChecked}
                />
            ),
        },

        // Q30: WHAT'S YOUR EMAIL?
        {
            id: 4,
            content: (
                <UIFormStep20
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    formStep20={formStep20}
                    setFormStep20={setFormStep20}
                    handleNext={handleNext}
                    isCheckboxChecked={isCheckboxChecked}
                />
            ),
        },

        // Q7: keep going!
        {
            id: 5,
            content: <Uiformstep4_1 name={formStep21.questionName} handleNext={handleNext} />,
        },

        // Q5: WHAT IS YOUR FITNESS GOAL?
        {
            id: 6,
            content: <StepNew propsFormStep={propsFormStep5} />,
        },

        // Q6: HOW MANY DAYS A WEEK DO YOU WANT TO EXERCISE?
        {
            id: 7,
            content: <UIFormStep6 handleNextStep6={handleNextStep6} />,
        },

        // Q7: WE'VE GOT THE SOLUTION!
        {
            id: 8,
            content: (
                <UIFormStep6_1 age={formStep1.age} questionGoal={formStep5.questionGoal} handleNext={handleNext} />
            ),
        },

        // Q8: DO YOU HAVE ANY HEALTH ISSUES?
        {
            id: 9,
            content: <StepNew propsFormStep={propsFormStep7} />,
        },

        // Q10: WHAT'S YOUR DREAM BODY?
        {
            id: 10,
            content: <UIFormStep7_2 handleNextStep7_2={handleNextStep7_2} />,
        },

        // Q11: WHAT ARE YOUR TARGET ZONES?
        {
            id: 11,
            content: (
                <UIFormStep9
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    handleNextStep9={handleNextStep9}
                    handleNext={handleNext}
                    isCheckboxChecked={isCheckboxChecked}
                />
            ),
        },

        // Q14: WE GOT YOU!
        {
            id: 12,
            content: (
                <UIFormStep11_1
                    target={formStep9.questionTarget}
                    goal={formStep5.questionGoal}
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    handleNext={handleNext}
                />
            ),
        },

        // Q17: WHAT TYPE OF EXERCISE DO YOU ENJOY?
        {
            id: 13,
            content: <StepNew propsFormStep={propsFormStep12} />,
        },

        // Q23: WHAT TYPE OF DIET DO YOU PREFER?
        {
            id: 14,
            content: <UIFormStep16 handleNextStep16={handleNextStep16} handleNext={handleNext} />,
        },

        // Q24: WHAT IS YOUR MAIN REASON TO GET IN SHAPE?
        {
            id: 15,
            content: <UIFormStep17 handleNextStep17={handleNextStep17} />,
        },

        // Q25: HOW TALL ARE YOU?
        {
            id: 16,
            content: (
                <UIFormStep18
                    handleNextStep3={handleNextStep3}
                    isCheckboxChecked={isCheckboxChecked}
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    handleNext={handleNext}
                />
            ),
        },

        // Q26: WHAT'S YOUR CURRENT WEIGHT?
        {
            id: 17,
            content: (
                <UIFormStep18_1
                    height={formStep3.height}
                    setIsInputValid={setIsInputValid}
                    handleNextStep4={handleNextStep4}
                    handleNext={handleNext}
                    isInputValid={isInputValid}
                />
            ),
        },

        // Q27: WHAT'S TARGET WEIGHT?
        {
            id: 18,
            content: (
                <UIFormStep22
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    handleNextStep22={handleNextStep22}
                    handleNext={handleNext}
                    isCheckboxChecked={isCheckboxChecked}
                />
            ),
        },

        // Q27: WHAT'S YOUR AGE?
        {
            id: 19,
            content: (
                <UIFormStep18_2
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    handleNextStep18_2={handleNextStep18_2}
                    handleNext={handleNext}
                    isCheckboxChecked={isCheckboxChecked}
                />
            ),
        },

        // Here's your wellness profile
        {
            id: 20,
            content: (
                <UIFormStep18_3
                    height={formStep3.height}
                    weight={formStep4.weight}
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    questionExercise={formStep6.questionExercise}
                    goal={formStep5.questionGoal}
                    handleNext={handleNext}
                    isCheckboxChecked={isCheckboxChecked}
                />
            ),
        },

        // Q29: CALCULATING PROGRESS
        {
            id: 21,
            content: (
                <UIFormStep19
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    handleSubmit={handleSubmit}
                    isCheckboxChecked={isCheckboxChecked}
                />
            ),
        },
    ];

    const handleBack = () => {
        const currentStepElement = document.querySelector(`.step-${currentStep}`);
        currentStepElement.classList.add('fade-out'); // Add fade-out class

        setTimeout(() => {
            setCurrentStep((prevStep) => prevStep - 1); // Go back to the previous step
            const prevStepElement = document.querySelector(`.step-${currentStep - 1}`);
            prevStepElement.classList.add('fade-in'); // Add fade-in class to previous step
            currentStepElement.classList.remove('fade-out'); // Remove fade-out class
        }, 500); // Match the duration of the fade transition
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [currentStep]);

    const saveDataToLarkBase = async () => {
        try {
            const customerData = {
                Age: formStep1.age || '',
                QuestionGoal: formStep5.questionGoal || '',
                QuestionExercise: formStep6.questionExercise || '',
                QuestionHealthIssues: formStep7.questionHealthIssuse || '',
                QuestionDreambody: formStep7_2.questionDreambody || '',
                QuestionTarget: formStep9.questionTarget || '',
                QuestionTypeExercise: formStep12.questionTypeExercise || '',
                QuestionMainReason: formStep17.questionMainReason || '',
                QuestionDiet: formStep16.questionDiet || '',
                Height: formStep3.height || '',
                Weight: formStep4.weight || '',
                QuestionTargetWeight: formStep22.questionTargetWeight.toString() || '',
                QuestionAge: formStep18_2.questionAge.toString() || '',
                EmailCustomer: formStep20.email || '',
                QuestionName: formStep21.questionName || '',
            };

            const url = `https://form-question-ave-be.vercel.app/api/lark-data`;

            await axios.post(url, {
                fields: customerData,
            });
            window.parent.postMessage('redirect', '*');
        } catch (error) {
            console.error('Lỗi khi thêm dữ liệu lên Firestore:', error);
            Swal.fire({
                icon: 'error',
                title: '',
                text: 'An error occurred! Please try again.',
                footer: '',
            });
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (formStep1.age === '') return;

        if (formStep21.questionName !== '') return;

        const handleBeforeUnload = async (event) => {
            // if (document.visibilityState == "hidden") return;

            const customerData = {
                Age: formStep1.age || '',
                QuestionGoal: formStep5.questionGoal || '',
                QuestionExercise: formStep6.questionExercise || '',
                QuestionHealthIssues: formStep7.questionHealthIssuse || '',
                QuestionDreambody: formStep7_2.questionDreambody || '',
                QuestionTarget: formStep9.questionTarget || '',
                QuestionTypeExercise: formStep12.questionTypeExercise || '',
                QuestionMainReason: formStep17.questionMainReason || '',
                QuestionDiet: formStep16.questionDiet || '',
                Height: formStep3.height || '',
                Weight: formStep4.weight || '',
                QuestionTargetWeight: formStep22.questionTargetWeight.toString() || '',
                QuestionAge: formStep18_2.questionAge.toString() || '',
                EmailCustomer: formStep20.email || '',
                QuestionName: formStep21.questionName,
            };
            const url = 'https://form-question-ave-be.vercel.app/api/lark-data-not-complete';
            const data = new Blob([JSON.stringify({ fields: customerData })], {
                type: 'application/json',
            });
            const success = navigator.sendBeacon(url, data);
            if (!success) {
                console.error('sendBeacon failed, trying fetch...');
                fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: data,
                    keepalive: true, // Dự phòng khi sendBeacon thất bại
                });
            }
            // event.returnValue = "Are you sure to close this tab?";
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [
        formStep1,
        formStep3,
        formStep4,
        formStep5,
        formStep6,
        formStep7,
        formStep7_2,
        formStep9,
        formStep12,
        formStep16,
        formStep17,
        formStep18_2,
        formStep20,
        formStep21,
        formStep22,
    ]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {isLoading && <Loading />}
            <Header currentStep={currentStep} handleBack={handleBack} />
            <Box className="block-form-question">
                <Typography variant="h6" className="custom-block-step">
                    <div className={`step-content step-${currentStep}`}>{steps[currentStep].content}</div>
                </Typography>
            </Box>
        </>
    );
};

export default FormQuestion;
