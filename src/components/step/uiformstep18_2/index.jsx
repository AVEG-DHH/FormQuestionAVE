import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import './uiformstep18_2.scss';


// eslint-disable-next-line react/prop-types
const UIFormStep18_2 = ({ setIsCheckboxChecked, handleNextStep18_2, handleNext, isCheckboxChecked }) => {
    const [ageValue, setAgeValue] = useState('');

    useEffect(() => {
        const numericValue = parseInt(ageValue, 10);

        // Kiểm tra tuổi hợp lệ (18 đến 120)
        if (ageValue.trim() !== '' && numericValue >= 18 && numericValue <= 120) {
            setIsCheckboxChecked(true);
        } else {
            setIsCheckboxChecked(false);
        }

        // Truyền tuổi hợp lệ về component cha
        handleNextStep18_2(numericValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ageValue, setIsCheckboxChecked]);

    return (
        <>
            <div className="form-step-18-2">
                <h1>What’s your age?</h1>
                <div className="form-step-18-2__container">
                    <div className="form-step-18-2__input">
                        <div className="input-wrapper">
                            <input
                                value={ageValue}
                                placeholder="Age"
                                onChange={(e) => setAgeValue(e.target.value.replace(/[^0-9]/g, ''))}
                            />
                        </div>
                        {ageValue && (
                            <div className="form-step-18-2__info-box">
                                <div className="icon-text">
                                    <span className="icon-wrapper">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                            data-icon="DailyPlanIcon"
                                            className="svg-icon"
                                        >
                                            <path
                                                fillOpacity="0.72"
                                                fillRule="evenodd"
                                                d="M2.2 7A4.8 4.8 0 0 1 7 2.2h10A4.8 4.8 0 0 1 21.8 7v10a4.8 4.8 0 0 1-4.8 4.8H7A4.8 4.8 0 0 1 2.2 17V7ZM7 3.8A3.2 3.2 0 0 0 3.8 7v9.2h13.7a.8.8 0 0 1 0 1.6H3.901a3.201 3.201 0 0 0 3.1 2.4h10a3.2 3.2 0 0 0 3.2-3.2V7A3.2 3.2 0 0 0 17 3.8H7Zm2 4a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM5.2 10a3.8 3.8 0 1 1 7.6 0 3.8 3.8 0 0 1-7.6 0Zm8.5-2a.8.8 0 0 1 .8-.8h3a.8.8 0 0 1 0 1.6h-3a.8.8 0 0 1-.8-.8Zm0 4a.8.8 0 0 1 .8-.8h3a.8.8 0 0 1 0 1.6h-3a.8.8 0 0 1-.8-.8Z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                    <strong>We ask your age to personalize your plan.</strong>
                                </div>
                                <p className="additional-info">
                                    Older people are found to have a higher body fat percentage than younger people with the
                                    same BMI.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="btn-continue" style={{ textAlign: 'center' }}>
                <Button
                    className="custom-btn-continue"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={!isCheckboxChecked}
                    style={{ margin: '40px 0' }}
                >
                    Continue
                </Button>
            </div>
        </>
    );
};

export default UIFormStep18_2;
