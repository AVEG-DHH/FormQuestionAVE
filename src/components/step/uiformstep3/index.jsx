import { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import './uiformstep3.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep3 = ({ handleNextStep3, isCheckboxChecked, setIsCheckboxChecked }) => {
    const [selectedUnit, setSelectedUnit] = useState('cm');
    const [cmValue, setCmValue] = useState('');
    const [ftValue, setFtValue] = useState('');
    const [inValue, setInValue] = useState('');
    const [isWarningVisible, setIsWarningVisible] = useState(true);

    useEffect(() => {
        if ((!isCheckboxChecked || cmValue === '' || cmValue < 90 || cmValue > 243) && ftValue === '') {
            setIsWarningVisible(true);
            return;
        }

        if (
            (!isCheckboxChecked ||
                ftValue === '' ||
                ftValue < 3 ||
                ftValue > 8 ||
                inValue === '' ||
                inValue < 0 ||
                inValue > 11) &&
            cmValue === ''
        ) {
            setIsWarningVisible(true);
            return;
        }

        handleNextStep3(selectedUnit === 'cm' ? `${cmValue} cm` : `${ftValue} ft ${inValue} in`);
        setIsWarningVisible(false);
    }, [cmValue, ftValue, inValue, isCheckboxChecked]);

    useEffect(() => {
        if (selectedUnit === 'cm') {
            setFtValue('');
            setInValue('');
        } else {
            setCmValue('');
        }
    }, [selectedUnit]);

    return (
        <>
            <div className="form-step-3">
                <h1>How tall are you?</h1>
                <div className="form-step-3__container">
                    <div className="form-step-3__height">
                        <div className="form-step-3__toggle">
                            <button
                                className={`toggle-btn ${selectedUnit === 'ft' ? 'active' : ''}`}
                                onClick={() => setSelectedUnit('ft')}
                            >
                                ft
                            </button>
                            <button
                                className={`toggle-btn ${selectedUnit === 'cm' ? 'active' : ''}`}
                                onClick={() => setSelectedUnit('cm')}
                            >
                                cm
                            </button>
                        </div>
                    </div>
                    <div className="form-step-3__input">
                        {selectedUnit === 'cm' ? (
                            <>
                                <div className="input-wrapper">
                                    <input
                                        value={cmValue}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/, ''); // Only numeric values
                                            setCmValue(value);
                                        }}
                                        placeholder="Height"
                                    />
                                    <span className="input-unit">cm</span>
                                </div>
                                {cmValue === '' || cmValue < 90 || cmValue > 243 ? (
                                    <p>
                                        Please, enter a value from <strong>90 cm</strong> to <strong>243 cm</strong>
                                    </p>
                                ) : null}
                            </>
                        ) : (
                            <>
                                <div className="input-wrapper ft-in">
                                    <div className="input-group">
                                        <input
                                            value={ftValue}
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/\D/, '');
                                                setFtValue(value);
                                            }}
                                            placeholder=""
                                        />
                                        <span className="input-unit">ft</span>
                                    </div>
                                    <div className="input-group">
                                        <input
                                            value={inValue}
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/\D/, '');
                                                setInValue(value);
                                            }}
                                            placeholder=""
                                        />
                                        <span className="input-unit">in</span>
                                    </div>
                                </div>
                                {ftValue === '' ||
                                ftValue < 3 ||
                                ftValue > 8 ||
                                inValue === '' ||
                                inValue < 0 ||
                                inValue > 11 ? (
                                    <p>
                                        Please, enter a value from <strong>3 ft</strong> to <strong>8 ft 11 in</strong>
                                    </p>
                                ) : null}
                            </>
                        )}
                    </div>

                    <div className="form-step-3__checkbox">
                        <input
                            type="checkbox"
                            value={isCheckboxChecked}
                            id="consent"
                            onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                        />
                        <label htmlFor="consent">
                            I consent to BetterMe processing my health onboarding data to provide services and enhance
                            my user experience.{' '}
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Privacy Policy
                            </a>
                        </label>
                        {/* Conditionally show warning message if checkbox is unchecked and input is entered */}
                        {isWarningVisible && (
                            <div className="error-message-consent">
                                <span>Consent required to continue</span>
                                <IoIosClose className="close-btn" onClick={() => setIsWarningVisible(false)}>
                                    &times;
                                </IoIosClose>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default UIFormStep3;
