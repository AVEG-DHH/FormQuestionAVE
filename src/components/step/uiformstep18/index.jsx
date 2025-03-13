import { useEffect, useState, useRef, useCallback } from 'react';
import { IoIosClose } from 'react-icons/io';
import { Checkbox, FormControlLabel, Button } from '@mui/material';
import PropTypes from 'prop-types';
import './uiformstep3.scss';

const UIFormStep3 = ({ handleNextStep3, isCheckboxChecked, setIsCheckboxChecked, handleNext }) => {
    const [selectedUnit, setSelectedUnit] = useState('cm');
    const [cmValue, setCmValue] = useState('');
    const [ftValue, setFtValue] = useState('');
    const [inValue, setInValue] = useState('');
    const [isWarningVisible, setIsWarningVisible] = useState(true);
    const [hasClosedWarning, setHasClosedWarning] = useState(false);

    const errorMessageRef = useRef(null);

    const isCmValid = (cmValue) => cmValue !== '' && cmValue >= 90 && cmValue <= 243;
    const isFtInValid = (ftValue, inValue) =>
        ftValue !== '' && ftValue >= 3 && ftValue <= 8 && inValue !== '' && inValue >= 0 && inValue <= 11;

    const checkWarningVisibility = useCallback(() => {
        if (hasClosedWarning || isCheckboxChecked) return false;
        if (selectedUnit === 'cm' && !isCmValid(cmValue)) return true;
        if (selectedUnit === 'ft' && !isFtInValid(ftValue, inValue)) return true;
        if (cmValue || ftValue || inValue) return true;
        return false;
    }, [hasClosedWarning, isCheckboxChecked, cmValue, ftValue, inValue, selectedUnit]);

    useEffect(() => {
        const warningVisible = checkWarningVisibility();
        setIsWarningVisible(warningVisible);

        handleNextStep3(selectedUnit === 'cm' ? `${cmValue} cm` : `${ftValue} ft ${inValue} in`);

        if (warningVisible && errorMessageRef.current) {
            errorMessageRef.current.classList.add('horizontal-shaking');
        } else if (errorMessageRef.current) {
            errorMessageRef.current.classList.remove('horizontal-shaking');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cmValue, ftValue, inValue, isCheckboxChecked, selectedUnit, hasClosedWarning, checkWarningVisibility]);

    useEffect(() => {
        if (selectedUnit === 'cm') {
            setFtValue('');
            setInValue('');
        } else {
            setCmValue('');
        }
        setIsCheckboxChecked(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedUnit]);

    useEffect(() => {
        if ((cmValue !== '' || ftValue !== '' || inValue !== '') && hasClosedWarning) {
            setHasClosedWarning(false);
            setIsWarningVisible(true);
        }
    }, [cmValue, ftValue, inValue, hasClosedWarning]);

    const handleCloseWarning = () => {
        setIsWarningVisible(false);
        setHasClosedWarning(true);
    };

    const handleCheckPolicy = (e) => {
        if (cmValue == '' && (ftValue == '' || inValue == '')) {
            alert('Please enter information');
            setIsCheckboxChecked(false);

            return;
        }

        setIsCheckboxChecked(e.target.checked);
    };

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
                                        onChange={(e) => setCmValue(e.target.value.replace(/\D/, ''))}
                                        placeholder="Height"
                                    />
                                    <span className="input-unit">cm</span>
                                </div>
                                {!isCmValid(cmValue) && cmValue !== '' && (
                                    <p>
                                        Please, enter a value from <strong>90 cm</strong> to <strong>243 cm</strong>
                                    </p>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="input-wrapper ft-in">
                                    <div className="input-group">
                                        <input
                                            value={ftValue}
                                            onChange={(e) => setFtValue(e.target.value.replace(/\D/, ''))}
                                            placeholder="Height"
                                        />
                                        <span className="input-unit">ft</span>
                                    </div>
                                    <div className="input-group">
                                        <input
                                            value={inValue}
                                            onChange={(e) => setInValue(e.target.value.replace(/\D/, ''))}
                                            placeholder="Height"
                                        />
                                        <span className="input-unit">in</span>
                                    </div>
                                </div>
                                {!isFtInValid(ftValue, inValue) && (ftValue !== '' || inValue !== '') && (
                                    <p>
                                        Please, enter a value from <strong>3 ft</strong> to <strong>8 ft 11 in</strong>
                                    </p>
                                )}
                            </>
                        )}
                    </div>

                    <div className="form-step-3__checkbox">
                        <div className="checkbox-container">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isCheckboxChecked}
                                        // onChange={handleCheckProci() (e) => setIsCheckboxChecked(e.target.checked)}
                                        onChange={(e) => handleCheckPolicy(e)}
                                        color="primary"
                                    />
                                }
                                label={
                                    <>
                                        I consent to Natural Cleansing processing my health onboarding to provide
                                        services and enhance my user experience.{' '}
                                        <a
                                            href="https://naturalcleansingae.com/policies/privacy-policy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Privacy Policy
                                        </a>
                                    </>
                                }
                            />
                        </div>
                        {!isCheckboxChecked &&
                            (cmValue !== '' || ftValue !== '' || inValue !== '') &&
                            isWarningVisible && (
                                <div
                                    className={`error-message-consent ${isWarningVisible ? 'horizontal-shaking' : ''}`}
                                >
                                    <span>Consent required to continue</span>
                                    <IoIosClose className="close-btn" onClick={handleCloseWarning} />
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

UIFormStep3.propTypes = {
    handleNextStep3: PropTypes.func.isRequired,
    isCheckboxChecked: PropTypes.bool.isRequired,
    setIsCheckboxChecked: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
};

export default UIFormStep3;
