import { useEffect, useState, useRef, useCallback } from 'react';
import { IoIosClose } from 'react-icons/io';
import './uiformstep3.scss';
import PropTypes from 'prop-types';

const UIFormStep3 = ({ handleNextStep3, isCheckboxChecked, setIsCheckboxChecked }) => {
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
    }, [
        cmValue,
        ftValue,
        inValue,
        isCheckboxChecked,
        selectedUnit,
        hasClosedWarning,
        handleNextStep3,
        checkWarningVisibility,
    ]);

    useEffect(() => {
        if (selectedUnit === 'cm') {
            setFtValue('');
            setInValue('');
        } else {
            setCmValue('');
        }
    }, [selectedUnit]);

    // Đảm bảo chỉ hiển thị lại cảnh báo khi người dùng thay đổi input
    useEffect(() => {
        if ((cmValue !== '' || ftValue !== '' || inValue !== '') && hasClosedWarning) {
            setHasClosedWarning(false); // Reset trạng thái khi có thay đổi giá trị
            setIsWarningVisible(true); // Hiển thị lại cảnh báo
        }
    }, [cmValue, ftValue, inValue, hasClosedWarning]);

    const handleCloseWarning = () => {
        setIsWarningVisible(false);
        setHasClosedWarning(true); // Cập nhật trạng thái để ẩn cảnh báo khi người dùng nhấn đóng
    };

    return (
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
                        <input
                            type="checkbox"
                            checked={isCheckboxChecked}
                            id="consent"
                            onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                        />
                        <label htmlFor="consent">
                            I consent to Natural Cleansing processing my health onboarding <br /> to provide services
                            and enhance my user experience.{' '}
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Privacy Policy
                            </a>
                        </label>
                    </div>
                    {!isCheckboxChecked && (cmValue !== '' || ftValue !== '' || inValue !== '') && isWarningVisible && (
                        <div className={`error-message-consent ${isWarningVisible ? 'horizontal-shaking' : ''}`}>
                            <span>Consent required to continue</span>
                            <IoIosClose className="close-btn" onClick={handleCloseWarning} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

UIFormStep3.propTypes = {
    handleNextStep3: PropTypes.func.isRequired,
    isCheckboxChecked: PropTypes.bool.isRequired,
    setIsCheckboxChecked: PropTypes.func.isRequired,
};

export default UIFormStep3;
