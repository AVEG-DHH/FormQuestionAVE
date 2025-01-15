import './uiformstep22.scss';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const UIFormStep22 = ({ setIsCheckboxChecked, handleNextStep22 }) => {
    const [ageValue, setAgeValue] = useState('');

    useEffect(() => {
        const numericValue = parseInt(ageValue, 10);

        // Kiểm tra tuổi hợp lệ (18 đến 120)
        if (ageValue.trim() !== '' && numericValue >= 25 && numericValue <= 300) {
            setIsCheckboxChecked(true);
            localStorage.setItem('targetWeight', numericValue);
        } else {
            setIsCheckboxChecked(false);
            localStorage.removeItem('targetWeight');
        }

        // Truyền tuổi hợp lệ về component cha
        handleNextStep22(numericValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ageValue, setIsCheckboxChecked]);

    return (
        <div className="form-step-18-2">
            <h1>Got it! And what{"'"}s your goal weight?</h1>
            <div className="form-step-18-2__container">
                <div className="form-step-18-2__input">
                    <div className="input-wrapper">
                        <input
                            value={ageValue}
                            placeholder="Kg"
                            onChange={(e) => setAgeValue(e.target.value.replace(/[^0-9]/g, ''))}
                        />
                    </div>
                    {ageValue && (
                        <div className="form-step-18-2__info-box">
                            {/* <div className="icon-text">
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
                            </div> */}
                            <p className="additional-info">
                                A study by the University of Utah found that working out just 5 minutes per day can
                                maintain your level of fitness, improve energy levels, and lead to better sleep.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UIFormStep22;
