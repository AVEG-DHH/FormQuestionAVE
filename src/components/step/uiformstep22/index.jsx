import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import './uiformstep22.scss';

// eslint-disable-next-line react/prop-types
const UIFormStep22 = ({ setIsCheckboxChecked, handleNextStep22, handleNext, isCheckboxChecked }) => {
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
        <>
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
                                <p className="additional-info">
                                    A study by the University of Utah found that working out just 5 minutes per day can
                                    maintain your level of fitness, improve energy levels, and lead to better sleep.
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

export default UIFormStep22;
