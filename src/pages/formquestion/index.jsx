import { IoScaleOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import axios from 'axios';
import Swal from 'sweetalert2'

import UIFormStep1 from '../../components/step/uiformstep1';
import UIFormStep1_1 from '../../components/step/uiformstep1_1';
import UIFormStep2_1 from '../../components/step/uiformstep2_1';
import UIFormStep6 from '../../components/step/uiformstep6';
import UIFormStep6_1 from '../../components/step/uiformstep6_1';
import UIFormStep7_1 from '../../components/step/uiformstep7_1';
import UIFormStep7_2 from '../../components/step/uiformstep7_2';
import UIFormStep9 from '../../components/step/uiformstep9';
import UIFormStep11 from '../../components/step/uiformstep11';
import UIFormStep11_1 from '../../components/step/uiformstep11_1';
import UIFormStep11_3 from '../../components/step/uiformstep11_3';
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
    const [formStep2, setFormStep2] = useState({ questionHomeEx: '' });
    const [formStep3, setFormStep3] = useState({ height: '' });
    const [formStep4, setFormStep4] = useState({ weight: '' });
    const [formStep5, setFormStep5] = useState({ questionGoal: '' });
    const [formStep6, setFormStep6] = useState({ questionExercise: '' });
    const [formStep7, setFormStep7] = useState({ questionHealthIssuse: '' });
    const [formStep7_1, setFormStep7_1] = useState({ questionYourBuild: '' });
    const [formStep7_2, setFormStep7_2] = useState({ questionDreambody: '' });
    const [formStep9, setFormStep9] = useState({ questionTarget: '' });
    const [formStep10, setFormStep10] = useState({ questionOftenEx: '' });
    const [formStep11, setFormStep11] = useState({ questionStruggle: '' });
    const [formStep11_2, setFormStep11_2] = useState({ questionEnergyLevel: '' });
    const [formStep12, setFormStep12] = useState({ questionTypeExercise: '' });
    const [formStep12_1, setFormStep12_1] = useState({ questionStruggleSleep: '' });
    const [formStep12_2, setformStep12_2] = useState({ questionSleep: '' });
    const [formStep13, setFormStep13] = useState({ questionWorkoutPD: '' });
    const [formStep14, setFormStep14] = useState({ questionWorkoutPref: '' });
    const [formStep15, setFormStep15] = useState({ questionEquipment: '' });
    const [formStep17, setFormStep17] = useState({ questionMainReason: '' });
    const [formStep16, setFormStep16] = useState({ questionDiet: '' });
    const [formStep18_2, setFormStep18_2] = useState({ questionAge: '' });
    const [formStep20, setFormStep20] = useState({ email: '', error: false });
    const [formStep21, setFormStep21] = useState({ questionName: '' });
    const [formStep22, setFormStep22] = useState({ questionTargetWeight: '' });

    // Function Step 1:
    const handleNextStep1 = (value) => {
        setFormStep1({ age: value });
        handleNext();
    };

    // Function Step 2:
    const handleNextStep2 = (value) => {
        setFormStep2({ questionHomeEx: value.target.value });
        setTimeout(() => handleNext(), 300);
    };
    const propsFormStep2 = {
        title: (
            <>
                Have you tried practicing these exercises <br />
                at home before?
            </>
        ),
        handleStep: handleNextStep2,
        arrQuestion: [
            { icon: '', value: 'Yes' },
            { icon: '', value: 'No' },
        ],
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

    // Function Step 7_1:
    const handleNextStep7_1 = (value) => {
        setFormStep7_1({ questionYourBuild: value });
        setTimeout(() => handleNext(), 1000);
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

    // Function Step 10:
    const handleNextStep10 = (value) => {
        setFormStep10({ questionOftenEx: value.target.value });
        setTimeout(() => handleNext(), 300);
    };
    const propsFormStep10 = {
        title: <>How often do you exercise?</>,
        handleStep: handleNextStep10,
        arrQuestion: [
            { icon: '', value: 'Almost every day' },
            { icon: '', value: 'Several times a week' },
            { icon: '', value: 'Several times a month' },
            { icon: '', value: 'Never' },
        ],
    };

    // Function Step 11:
    const handleNextStep11 = (value) => {
        setFormStep11({ questionStruggle: value });
    };

    // Function Step 11_2:
    const handleNextStep11_2 = (value) => {
        setFormStep11_2({ questionEnergyLevel: value.target.value });
        setTimeout(() => handleNext(), 300);
    };
    const propsFormStep11_2 = {
        title: <>How are your energy levels during the day?</>,
        handleStep: handleNextStep11_2,
        arrQuestion: [
            {
                icon: (
                    <img
                        src="/icons/low-energy.webp"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon-2"
                    />
                ),
                value: 'Low, I feel tired throughout the day',
            },
            {
                icon: (
                    <img
                        src="/icons/post-lunch.webp"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon-2"
                    />
                ),
                value: 'Post lunch slump',
            },
            {
                icon: (
                    <img
                        src="/icons/before-meat.webp"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon-2"
                    />
                ),
                value: 'Dragging before meals',
            },
            {
                icon: (
                    <img
                        src="/icons/high.webp"
                        alt="Maintain Weight Icon"
                        className="block-step-new__body__radio__content__icon-2"
                    />
                ),
                value: 'High and steady',
            },
        ],
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

    // Function Step 12_1:
    const handleNextStep12_1 = (value) => {
        setFormStep12_1({ questionStruggleSleep: value.target.value });
        setTimeout(() => handleNext(), 300);
    };
    const propsFormStep12_1 = {
        title: <>Do you struggle with sleep?</>,
        handleStep: handleNextStep12_1,
        arrQuestion: [
            { icon: '', value: 'Yes' },
            { icon: '', value: 'No' },
        ],
    };

    // Function Step 12_2:
    const handleNextStep12_2 = (value) => {
        setformStep12_2({ questionSleep: value.target.value });
        setTimeout(() => handleNext(), 300);
    };
    const propsFormStep12_2 = {
        title: <>How much sleep do you usually get?</>,
        handleStep: handleNextStep12_2,
        arrQuestion: [
            { icon: '', value: 'Less than 5 hours' },
            { icon: '', value: '5-6 hours' },
            { icon: '', value: '7-8 hours' },
            { icon: '', value: 'More than 8 hours' },
        ],
    };

    // Function Step 13:
    const handleNextStep13 = (value) => {
        setFormStep13({ questionWorkoutPD: value.target.value });
        setTimeout(() => handleNext(), 300);
    };
    const propsFormStep13 = {
        title: <>How much time do you usually spend on a workout?</>,
        handleStep: handleNextStep13,
        arrQuestion: [
            { icon: '', value: 'Less than 15 minutes' },
            { icon: '', value: '15-30 minutes' },
            { icon: '', value: 'More than 60 minutes' },
        ],
    };

    // Function Step 14:
    const handleNextStep14 = (value) => {
        setFormStep14({ questionWorkoutPref: value.target.value });
        setTimeout(() => handleNext(), 300);
    };
    const propsFormStep14 = {
        title: <>Where do you prefer to work out?</>,
        handleStep: handleNextStep14,
        arrQuestion: [
            { icon: '', value: 'At home' },
            { icon: '', value: 'Outdoors' },
            { icon: '', value: 'In a gym' },
            { icon: '', value: 'No preference' },
        ],
    };

    // Function Step 15:
    const handleNextStep15 = (value) => {
        setFormStep15({ questionEquipment: value.target.value });
        setTimeout(() => handleNext(), 300);
    };
    const propsFormStep15 = {
        title: <>What equipment do you have access to?</>,
        handleStep: handleNextStep15,
        arrQuestion: [
            { icon: '', value: 'None' },
            { icon: '', value: 'Chair/mat' },
            { icon: '', value: 'Dumbbells' },
            { icon: '', value: 'Resistance bands' },
            { icon: '', value: 'Other advanced equipment' },
        ],
    };

    // Function Step 16:
    const handleNextStep16 = (value) => {
        setFormStep16({ questionDiet: value.target.value });
        setTimeout(() => handleNext(), 300);
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

    const steps = [
        // Q1: BASE ON YOUR  AGE
        {
            id: 1,
            content: <UIFormStep1 handleNextStep1={handleNextStep1} />,
        },

        //Q2: OVER 1 MILLION WOMEN
        // {
        //     id: 2,
        //     content: <UIFormStep1_1 setIsCheckboxChecked={setIsCheckboxChecked} age={formStep1.age} handleNext={handleNext} />,
        // },

        // // Q3: HAVE YOU TRIED PRACTICING THESE EXERCISES AT HOME BEFORE?
        // {
        //     id: 3,
        //     content: <StepNew propsFormStep={propsFormStep2} />,
        // },

        // // Q4: NATURAL CLEANSING IS THE PERFECT CHOICE
        // {
        //     id: 4,
        //     content: <UIFormStep2_1 setIsCheckboxChecked={setIsCheckboxChecked} handleNext={handleNext} />,
        // },

        // // Q5: WHAT IS YOUR FITNESS GOAL?
        // {
        //     id: 5,
        //     content: <StepNew propsFormStep={propsFormStep5} />,
        // },

        // // Q6: HOW MANY DAYS A WEEK DO YOU WANT TO EXERCISE?
        // {
        //     id: 6,
        //     content: <UIFormStep6 handleNextStep6={handleNextStep6} />,
        // },

        // // Q7: WE'VE GOT THE SOLUTION!
        // {
        //     id: 7,
        //     content: (
        //         <UIFormStep6_1
        //             setIsCheckboxChecked={setIsCheckboxChecked}
        //             age={formStep1.age}
        //             questionGoal={formStep5.questionGoal}
        //             handleNext={handleNext}
        //         />
        //     ),
        // },

        // // Q8: DO YOU HAVE ANY HEALTH ISSUES?
        // {
        //     id: 8,
        //     content: <StepNew propsFormStep={propsFormStep7} />,
        // },

        // // Q9: HOW WOULD YOU DESCRIBE YOUR BUILD?
        // {
        //     id: 9,
        //     content: <UIFormStep7_1 handleNextStep7_1={handleNextStep7_1} />,
        // },

        // // Q10: WHAT'S YOUR DREAM BODY?
        // {
        //     id: 10,
        //     content: <UIFormStep7_2 handleNextStep7_2={handleNextStep7_2} />,
        // },

        // // Q11: WHAT ARE YOUR TARGET ZONES?
        // {
        //     id: 11,
        //     content: (
        //         <UIFormStep9
        //             setIsCheckboxChecked={setIsCheckboxChecked}
        //             handleNextStep9={handleNextStep9}
        //             handleNext={handleNext}
        //             isCheckboxChecked={isCheckboxChecked}
        //         />
        //     ),
        // },

        // // Q12: HOW OFTEN DO YOU EXERCISE?
        // {
        //     id: 12,
        //     content: <StepNew propsFormStep={propsFormStep10} />,
        // },

        // // Q13: DO YOU STRUGGLE WITH ANY OF THE FOLLOWING?
        // {
        //     id: 13,
        //     content: (
        //         <UIFormStep11
        //             handleNext={handleNext}
        //             handleNextStep11={handleNextStep11}
        //             isCheckboxChecked={isCheckboxChecked}
        //             setIsCheckboxChecked={setIsCheckboxChecked}
        //         />
        //     ),
        // },

        // // Q14: WE GOT YOU!
        // {
        //     id: 14,
        //     content: (
        //         <UIFormStep11_1
        //             target={formStep9.questionTarget}
        //             goal={formStep5.questionGoal}
        //             setIsCheckboxChecked={setIsCheckboxChecked}
        //             handleNext={handleNext}
        //         />
        //     ),
        // },

        // //  Q15: HOW ARE YOUR ENERGY LEVELS DURING THE DAY?
        // {
        //     id: 15,
        //     content: <StepNew propsFormStep={propsFormStep11_2} />,
        // },

        // // Q16: NO PROBLEM!
        // {
        //     id: 16,
        //     content: <UIFormStep11_3 setIsCheckboxChecked={setIsCheckboxChecked} handleNext={handleNext} />,
        // },

        // // Q17: WHAT TYPE OF EXERCISE DO YOU ENJOY?
        // {
        //     id: 17,
        //     content: <StepNew propsFormStep={propsFormStep12} />,
        // },

        // // Q18: DO YOU STRUGGLE TO SLEEP?
        // {
        //     id: 18,
        //     content: <StepNew propsFormStep={propsFormStep12_1} />,
        // },

        // // Q19: HOW MUCH SLEEP DO YOU USUALLY GET?
        // {
        //     id: 19,
        //     content: <StepNew propsFormStep={propsFormStep12_2} />,
        // },

        // // Q20: HOW MUCH TIME DO YOU USUALLY SPEND ON A WORKOUT?
        // {
        //     id: 20,
        //     content: <StepNew propsFormStep={propsFormStep13} />,
        // },

        // // Q21: WHERE DO YOU PREFER TO WORK OUT?
        // {
        //     id: 21,
        //     content: <StepNew propsFormStep={propsFormStep14} />,
        // },

        // // Q22: WHAT EQUIPMENT DO YOU HAVE ACCESS TO?
        // {
        //     id: 22,
        //     content: <StepNew propsFormStep={propsFormStep15} />,
        // },

        // // Q23: WHAT TYPE OF DIET DO YOU PREFER?
        // {
        //     id: 23,
        //     content: <UIFormStep16 handleNextStep16={handleNextStep16} />,
        // },

        // // Q24: WHAT IS YOUR MAIN REASON TO GET IN SHAPE?
        // {
        //     id: 24,
        //     content: <UIFormStep17 handleNextStep17={handleNextStep17} />,
        // },

        // // Q25: HOW TALL ARE YOU?
        // {
        //     id: 25,
        //     content: (
        //         <UIFormStep18
        //             handleNextStep3={handleNextStep3}
        //             isCheckboxChecked={isCheckboxChecked}
        //             setIsCheckboxChecked={setIsCheckboxChecked}
        //             handleNext={handleNext}
        //         />
        //     ),
        // },

        // // Q26: WHAT'S YOUR CURRENT WEIGHT?
        // {
        //     id: 26,
        //     content: (
        //         <UIFormStep18_1
        //             height={formStep3.height}
        //             setIsInputValid={setIsInputValid}
        //             handleNextStep4={handleNextStep4}
        //             handleNext={handleNext}
        //             isInputValid={isInputValid}
        //         />
        //     ),
        // },

        // // Q27: WHAT'S TARGET WEIGHT?
        // {
        //     id: 27,
        //     content: <UIFormStep22 setIsCheckboxChecked={setIsCheckboxChecked} handleNextStep22={handleNextStep22} handleNext={handleNext} isCheckboxChecked={isCheckboxChecked} />,
        // },

        // // Q27: WHAT'S YOUR AGE?
        // {
        //     id: 28,
        //     content: (
        //         <UIFormStep18_2 setIsCheckboxChecked={setIsCheckboxChecked} handleNextStep18_2={handleNextStep18_2} handleNext={handleNext} isCheckboxChecked={isCheckboxChecked} />
        //     ),
        // },

        // // Q28: WHAT'S YOUR AGE?
        // {
        //     id: 29,
        //     content: (
        //         <UIFormStep18_3
        //             height={formStep3.height}
        //             weight={formStep4.weight}
        //             setIsCheckboxChecked={setIsCheckboxChecked}
        //             yourBuild={formStep7_1.questionYourBuild}
        //             questionOftenEx={formStep10.questionOftenEx}
        //             questionWorkoutPD={formStep13.questionWorkoutPD}
        //             goal={formStep5.questionGoal}
        //             handleNext={handleNext}
        //             isCheckboxChecked={isCheckboxChecked}
        //         />
        //     ),
        // },

        // // Q29: CALCULATING PROGRESS
        // {
        //     id: 30,
        //     content: (
        //         <UIFormStep19
        //             setIsCheckboxChecked={setIsCheckboxChecked}
        //             handleNext={handleNext}
        //             isCheckboxChecked={isCheckboxChecked}
        //         />
        //     ),
        // },

        // // Q30: WHAT'S YOUR EMAIL?
        // {
        //     id: 31,
        //     content: (
        //         <UIFormStep20
        //             setIsCheckboxChecked={setIsCheckboxChecked}
        //             formStep20={formStep20}
        //             setFormStep20={setFormStep20}
        //             handleNext={handleNext}
        //             isCheckboxChecked={isCheckboxChecked}
        //         />
        //     ),
        // },

        // Q31: WHAT'S YOUR NAME?
        {
            id: 32,
            content: <UIFormStep21 setIsCheckboxChecked={setIsCheckboxChecked} handleNextStep21={handleNextStep21} />,
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

    const saveDataToFirestore = async (userId, customerData) => {
        try {
            await setDoc(doc(db, 'customer-answer', userId), customerData);
            window.parent.postMessage('redirect', '*');
        } catch (error) {
            console.error('Lỗi khi thêm dữ liệu lên Firestore:', error);
        }
    };

    const saveDataToLarkBase = async () => {
        try {
            const customerData = {
                Age: formStep1.age || "",
                QuestionHomeEx: formStep2.questionHomeEx || "",
                QuestionGoal: formStep5.questionGoal || "",
                QuestionExercise: formStep6.questionExercise || "",
                QuestionHealthIssues: formStep7.questionHealthIssuse || "",
                QuestionYourBuild: formStep7_1.questionYourBuild || "",
                QuestionDreambody: formStep7_2.questionDreambody || "",
                QuestionTarget: formStep9.questionTarget || "",
                QuestionOftenEx: formStep10.questionOftenEx || "",
                QuestionStruggle: formStep11.questionStruggle || "",
                QuestionEnergyLevel: formStep11_2.questionEnergyLevel || "",
                QuestionTypeExercise: formStep12.questionTypeExercise || "",
                QuestionStruggleSleep: formStep12_1.questionStruggleSleep || "",
                QuestionSleep: formStep12_2.questionSleep || "",
                QuestionWorkoutPD: formStep13.questionWorkoutPD || "",
                QuestionWorkoutPref: formStep14.questionWorkoutPref || "",
                QuestionEquipment: formStep15.questionEquipment || "",
                QuestionMainReason: formStep17.questionMainReason || "",
                QuestionDiet: formStep16.questionDiet || "",
                Height: formStep3.height || "",
                Weight: formStep4.weight || "",
                QuestionTargetWeight: formStep22.questionTargetWeight.toString() || "",
                QuestionAge: formStep18_2.questionAge.toString() || "",
                EmailCustomer: formStep20.email || "",
                QuestionName: formStep21.questionName || ""
            };

            const url = `https://form-question-ave-be.vercel.app/api/lark-data-1`;

            await axios.post(url,
                {
                    fields: customerData
                },
            );
            window.parent.postMessage('redirect', '*');

        } catch (error) {
            console.error('Lỗi khi thêm dữ liệu lên Firestore:', error);
            Swal.fire({
                icon: "error",
                title: "",
                text: "An error occurred! Please try again.",
                footer: ''
            });
        }
        setIsLoading(false);
    };

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            await saveDataToLarkBase()
        } catch (error) {
            console.error('Lỗi khi lưu dữ liệu:', error);
        }
    };

    useEffect(() => {
        if (formStep1.age === "") return;

        if (formStep1.age !== "" && formStep2.questionHomeEx !== "" && formStep3.height !== "" && formStep4.weight !== ""
            && formStep5.questionGoal !== "" && formStep6.questionExercise !== "" && formStep7.questionHealthIssuse !== ""
            && formStep7_1.questionYourBuild !== "" && formStep7_2.questionDreambody !== "" && formStep9.questionTarget !== ""
            && formStep10.questionOftenEx !== "" && formStep11.questionStruggle !== "" && formStep11_2.questionEnergyLevel !== ""
            && formStep12.questionTypeExercise !== "" && formStep12_1.questionStruggleSleep !== "" && formStep12_2.questionSleep !== ""
            && formStep13.questionWorkoutPD !== "" && formStep14.questionWorkoutPref !== "" && formStep15.questionEquipment !== ""
            && formStep16.questionDiet !== "" && formStep17.questionMainReason !== "" && formStep18_2.questionAge !== ""
            && formStep20.email !== "" && formStep21.questionName !== "") return;

        const handleBeforeUnload = async (event) => {
            if (document.visibilityState == "hidden") return;

            const userId = Date.now().toString();
            const customerData = {
                Age: formStep1.age || null,
                questionHomeEx: formStep2.questionHomeEx || null,
                height: formStep3.height || null,
                weight: formStep4.weight || null,
                questionGoal: formStep5.questionGoal || null,
                questionExercise: formStep6.questionExercise || null,
                questionHealthIssues: formStep7.questionHealthIssuse || null,
                questionYourBuild: formStep7_1.questionYourBuild || null,
                questionDreambody: formStep7_2.questionDreambody || null,
                questionTarget: formStep9.questionTarget || null,
                questionOftenEx: formStep10.questionOftenEx || null,
                questionStruggle: formStep11.questionStruggle || null,
                questionEnergyLevel: formStep11_2.questionEnergyLevel || null,
                questionTypeExercise: formStep12.questionTypeExercise || null,
                questionStruggleSleep: formStep12_1.questionStruggleSleep || null,
                questionSleep: formStep12_2.questionSleep || null,
                questionWorkoutPD: formStep13.questionWorkoutPD || null,
                questionWorkoutPref: formStep14.questionWorkoutPref || null,
                questionEquipment: formStep15.questionEquipment || null,
                questionMainReason: formStep17.questionMainReason || null,
                questionDiet: formStep16.questionDiet || null,
                questionTargetWeight: formStep22.questionTargetWeight || null,
                questionAge: formStep18_2.questionAge || null,
                EmailCustomer: formStep20.email || null,
                questionName: formStep21.questionName || null,
                createdAt: new Date().toISOString(),
                timestamp: Date.now(),
            };
            const url = "https://form-question-ave-be.vercel.app/api/save-firestore-not-complete"; // Cập nhật URL API backend của bạn
            const blob = new Blob([JSON.stringify({ userId, customerData })], { type: "application/json" });

            const sent = navigator.sendBeacon(url, blob);

            if (!sent) {
                fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId, customerData }),
                    keepalive: true,
                })
                    .then(res => console.log("Backup fetch success:", res.status))
                    .catch(err => console.error("Backup fetch failed:", err));
            }

            // event.returnValue = "Are you sure to close this tab?";
        };
        window.addEventListener('pagehide', handleBeforeUnload);
        return () => {
            window.removeEventListener('pagehide', handleBeforeUnload);
        };

    }, [formStep1, formStep2, formStep3, formStep4, formStep5, formStep6, formStep7, formStep7_1, formStep7_2, formStep9, formStep10, formStep11, formStep11_2, formStep12, formStep12_1, formStep12_2, formStep13, formStep14, formStep15, formStep16, formStep17, formStep18_2, formStep20, formStep21, formStep22]);

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

                <Box sx={{ display: 'flex', gap: 2 }}>
                    {currentStep < steps.length - 1 ? (
                        <></>
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
