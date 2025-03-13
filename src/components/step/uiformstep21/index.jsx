import './uiformstep21.scss';
import ButtonContinue from '../../buttoncontinue';
import { useEffect, useState } from 'react';
//eslint-disable-next-line
const UIFormStep21 = ({ handleNextStep21, setIsCheckboxChecked, handleNext, isCheckboxChecked }) => {
    const [nameValue, setNameValue] = useState('');
    useEffect(() => {
        if (nameValue.trim() !== '') {
            setIsCheckboxChecked(true);
        } else {
            setIsCheckboxChecked(false);
        }

        handleNextStep21(nameValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nameValue, setIsCheckboxChecked]);

    return (
        <>
            <div className="form-step-21">
                <h1>What’s your name?</h1>
                <div className="form-step-21__container">
                    <div className="form-step-21__input">
                        <div className="input-wrapper">
                            <input
                                value={nameValue}
                                placeholder="Name"
                                onChange={(e) => {
                                    setNameValue(e.target.value); // Cập nhật state
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ButtonContinue handleNext={handleNext} disabled={!isCheckboxChecked} />
        </>
    );
};

export default UIFormStep21;
