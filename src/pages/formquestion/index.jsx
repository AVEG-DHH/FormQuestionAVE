import { IoScaleOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { db, ref, set } from '../../firebase';

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
import UIFormStep12 from '../../components/step/uiformstep12';
import UIFormStep12_1 from '../../components/step/uiformstep12_1';
import UIFormStep12_2 from '../../components/step/uiformstep12_2';
import UIFormStep13 from '../../components/step/uiformstep13';
import UIFormStep14 from '../../components/step/uiformstep14';
import UIFormStep15 from '../../components/step/uiformstep15';
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
        console.log(value);
        setFormStep1({ age: value });
        setShowButtonNext(true);
        handleNext();
    };

    // Function Step 2:
    const handleNextStep2 = (value) => {
        console.log(value.target.value);
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
        console.log(value);
        setFormStep3({ height: value });
    };
    // Function Step 4:
    const handleNextStep4 = (value) => {
        console.log(value);
        setFormStep4({ weight: value });
    };

    // Function Step 5:
    const handleNextStep5 = (value) => {
        console.log(value.target.value);
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
        console.log(value.target.value);
        setFormStep6({ questionExercise: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 7:
    const handleNextStep7 = (value) => {
        console.log(value.target.value);
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
        console.log(value);
        setFormStep7_1({ questionYourBuild: value });
        // setShowButtonNext(true);
        setTimeout(() => handleNext(), 1000);
    };

    // Function Step 7_2:
    const handleNextStep7_2 = (value) => {
        console.log(value);
        setFormStep7_2({ questionDreambody: value });
        // setShowButtonNext(true);
        setTimeout(() => handleNext(), 1000);
    };

    // Function Step 9:
    const handleNextStep9 = (value) => {
        console.log(value);
        setFormStep9({ questionTarget: value });
    };

    // Function Step 10:
    const handleNextStep10 = (value) => {
        console.log(value.target.value);
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
        console.log(value);
        setFormStep11({ questionStruggle: value });
    };

    // Function Step 11_2:
    const handleNextStep11_2 = (value) => {
        console.log(value.target.value);
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
        console.log(value.target.value);
        setFormStep12({ questionTypeExercise: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 12_1:
    const handleNextStep12_1 = (value) => {
        console.log(value.target.value);
        setFormStep12_1({ questionStruggleSleep: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 12_2:
    const handleNextStep12_2 = (value) => {
        console.log(value.target.value);
        setformStep12_2({ questionSleep: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 13:
    const handleNextStep13 = (value) => {
        setFormStep13({ questionWorkoutPD: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 14:
    const handleNextStep14 = (value) => {
        setFormStep14({ questionWorkoutPD: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 15:
    const handleNextStep15 = (value) => {
        setFormStep15({ questionEquipment: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 16:
    const handleNextStep16 = (value) => {
        console.log(value.target.value);
        setFormStep16({ questionDiet: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 17:
    const handleNextStep17 = (value) => {
        console.log(value.target.value);
        setFormStep17({ questionMainReason: value.target.value });
        setTimeout(() => handleNext(), 300);
    };

    // Function Step 18_2:
    const handleNextStep18_2 = (value) => {
        console.log(value);
        setFormStep18_2({ questionAge: value });
    };

    // Function Step 21:
    const handleNextStep21 = (value) => {
        console.log(value);
        setFormStep21({ questionName: value });
    };

    // Function Step 22:
    const handleNextStep22 = (value) => {
        console.log(value);
        setFormStep22({ questionTargetWeight: value });
    };

    const handleNext = () => {
        setIsLoading(true);
        setIsCheckboxChecked(false);
        setIsInputValid(false);
        setShowButtonNext(false);

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

        setShowButtonNext(true);
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
            content: <UIFormStep1_1 setIsCheckboxChecked={setIsCheckboxChecked} age={formStep1.age} />,
        },

        // Q3: HAVE YOU TRIED PRACTICING THESE EXERCISES AT HOME BEFORE?
        {
            id: 3,
            content: <StepNew propsFormStep={propsFormStep2} />,
        },

        // Q4: NATURAL CLEANSING IS THE PERFECT CHOICE
        {
            id: 4,
            content: <UIFormStep2_1 setIsCheckboxChecked={setIsCheckboxChecked} />,
        },

        // Q5: WHAT IS YOUR FITNESS GOAL?
        {
            id: 5,
            content: <StepNew propsFormStep={propsFormStep5} />,
        },

        // Q6: HOW MANY DAYS A WEEK DO YOU WANT TO EXERCISE?
        {
            id: 6,
            content: <UIFormStep6 handleNextStep6={handleNextStep6} />,
        },

        // Q7: WE'VE GOT THE SOLUTION!
        {
            id: 7,
            content: (
                <UIFormStep6_1
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    age={formStep1.age}
                    questionGoal={formStep5.questionGoal}
                />
            ),
        },

        // Q8: DO YOU HAVE ANY HEALTH ISSUES?
        {
            id: 8,
            content: <StepNew propsFormStep={propsFormStep7} />,
        },

        // Q9: HOW WOULD YOU DESCRIBE YOUR BUILD?
        {
            id: 9,
            content: <UIFormStep7_1 handleNextStep7_1={handleNextStep7_1} />,
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

        // Q12: HOW OFTEN DO YOU EXERCISE?
        {
            id: 12,
            content: <StepNew propsFormStep={propsFormStep10} />,
        },

        // Q13: DO YOU STRUGGLE WITH ANY OF THE FOLLOWING?
        {
            id: 13,
            content: (
                <UIFormStep11
                    handleNext={handleNext}
                    handleNextStep11={handleNextStep11}
                    isCheckboxChecked={isCheckboxChecked}
                    setIsCheckboxChecked={setIsCheckboxChecked}
                />
            ),
        },

        // Q14: WE GOT YOU!
        {
            id: 14,
            content: (
                <UIFormStep11_1
                    target={formStep9.questionTarget}
                    goal={formStep5.questionGoal}
                    setIsCheckboxChecked={setIsCheckboxChecked}
                />
            ),
        },

        //  Q15: HOW ARE YOUR ENERGY LEVELS DURING THE DAY?
        {
            id: 15,
            content: <StepNew propsFormStep={propsFormStep11_2} />,
        },

        // Q16: NO PROBLEM!
        {
            id: 16,
            content: <UIFormStep11_3 setIsCheckboxChecked={setIsCheckboxChecked} />,
        },

        // Q17: WHAT TYPE OF EXERCISE DO YOU ENJOY?
        {
            id: 17,
            content: <UIFormStep12 handleNextStep12={handleNextStep12} />,
        },

        // Q18: DO YOU STRUGGLE TO SLEEP?
        {
            id: 18,
            content: <UIFormStep12_1 handleNextStep12_1={handleNextStep12_1} />,
        },

        // Q19: HOW MUCH SLEEP DO YOU USUALLY GET?
        {
            id: 19,
            content: <UIFormStep12_2 handleNextStep12_2={handleNextStep12_2} />,
        },

        // Q20: HOW MUCH TIME DO YOU USUALLY SPEND ON A WORKOUT?
        {
            id: 20,
            content: <UIFormStep13 handleNextStep13={handleNextStep13} />,
        },

        // Q21: WHERE DO YOU PREFER TO WORK OUT?
        {
            id: 21,
            content: <UIFormStep14 handleNextStep14={handleNextStep14} />,
        },

        // Q22: WHAT EQUIPMENT DO YOU HAVE ACCESS TO?
        {
            id: 22,
            content: <UIFormStep15 handleNextStep15={handleNextStep15} />,
        },

        // Q23: WHAT TYPE OF DIET DO YOU PREFER?
        {
            id: 23,
            content: <UIFormStep16 handleNextStep16={handleNextStep16} />,
        },

        // Q24: WHAT IS YOUR MAIN REASON TO GET IN SHAPE?
        {
            id: 24,
            content: <UIFormStep17 handleNextStep17={handleNextStep17} />,
        },

        // Q25: HOW TALL ARE YOU?
        {
            id: 25,
            content: (
                <UIFormStep18
                    handleNextStep3={handleNextStep3}
                    isCheckboxChecked={isCheckboxChecked}
                    setIsCheckboxChecked={setIsCheckboxChecked}
                />
            ),
        },

        // Q26: WHAT'S YOUR CURRENT WEIGHT?
        {
            id: 26,
            content: (
                <UIFormStep18_1
                    height={formStep3.height}
                    setIsInputValid={setIsInputValid}
                    handleNextStep4={handleNextStep4}
                />
            ),
        },

        // Q27: WHAT'S TARGET WEIGHT?
        {
            id: 27,
            content: <UIFormStep22 setIsCheckboxChecked={setIsCheckboxChecked} handleNextStep22={handleNextStep22} />,
        },

        // Q27: WHAT'S YOUR AGE?
        {
            id: 28,
            content: (
                <UIFormStep18_2 setIsCheckboxChecked={setIsCheckboxChecked} handleNextStep18_2={handleNextStep18_2} />
            ),
        },

        // Q28: WHAT'S YOUR AGE?
        {
            id: 29,
            content: (
                <UIFormStep18_3
                    height={formStep3.height}
                    weight={formStep4.weight}
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    yourBuild={formStep7_1.questionYourBuild}
                    questionOftenEx={formStep10.questionOftenEx}
                    questionWorkoutPD={formStep13.questionWorkoutPD}
                    goal={formStep5.questionGoal}
                    handleNext={handleNext}
                    isCheckboxChecked={isCheckboxChecked}
                />
            ),
        },

        // Q29: CALCULATING PROGRESS
        {
            id: 30,
            content: (
                <UIFormStep19
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    handleNext={handleNext}
                    isCheckboxChecked={isCheckboxChecked}
                />
            ),
        },

        // Q30: WHAT'S YOUR EMAIL?
        {
            id: 31,
            content: (
                <UIFormStep20
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    formStep20={formStep20}
                    setFormStep20={setFormStep20}
                />
            ),
        },

        // Q31: WHAT'S YOUR NAME?
        {
            id: 32,
            content: <UIFormStep21 setIsCheckboxChecked={setIsCheckboxChecked} handleNextStep21={handleNextStep21} />,
        },
    ];

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
            // currentStep == 0 ||
            currentStep == 2 ||
            currentStep == 4 ||
            currentStep == 5 ||
            currentStep == 7 ||
            currentStep == 8 ||
            currentStep == 9 ||
            currentStep == 10 ||
            currentStep == 11 ||
            currentStep == 12 ||
            currentStep == 14 ||
            currentStep == 16 ||
            currentStep == 17 ||
            currentStep == 18 ||
            currentStep == 19 ||
            currentStep == 20 ||
            currentStep == 21 ||
            currentStep == 22 ||
            currentStep == 23 ||
            currentStep == 28 ||
            currentStep == 29
        ) {
            setShowButtonNext(false);
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [currentStep]);

    const handleSubmit = () => {
        setIsLoading(true);

        const userId = Date.now();
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
        };

        set(ref(db, `customer-answer/${userId}`), customerData)
            .then(() => {
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
