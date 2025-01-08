import './uiformstep18_2.scss';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const UIFormStep18_2 = ({ setIsInputValid, handleNextStep18_2 }) => {
    const [ageValue, setAgeValue] = useState('');

    useEffect(() => {
        const numericValue = parseInt(ageValue, 10);

        // Kiểm tra tuổi hợp lệ (18 đến 120)
        if (ageValue.trim() !== '' && numericValue >= 18 && numericValue <= 120) {
            setIsInputValid(true);
        } else {
            setIsInputValid(false);
        }

        // Truyền tuổi hợp lệ về component cha
        handleNextStep18_2(numericValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ageValue, setIsInputValid]);

    return (
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
                    <p>
                        We ask your age to personalize your plan. <br />
                        Older people are found to have a higher body fat percentage than younger people with the same
                        BMI.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UIFormStep18_2;
