import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import './uiformstep4.scss';

const convertToMeters = (feet, inches = 0) => {
    const meters = feet * 0.3048 + inches * 0.0254;
    return parseFloat(meters.toFixed(2));
};

const UIFormStep4 = ({ height, setIsInputValid, handleNextStep4, handleNext, isInputValid }) => {
    const [selectedUnit, setSelectedUnit] = useState('kg');
    const [weightValue, setWeightValue] = useState('');
    const [valueBMI, setValueBMI] = useState(0);
    const [percent, setPercent] = useState(0);
    const [checkBMI, setCheckBMI] = useState(0);

    let heightNew = 0;
    if (height.includes('cm')) {
        heightNew = parseInt(height.split(' ')[0], 10) / 100;
    } else {
        const partsHeight = height.split(' ');
        const feet = parseInt(partsHeight[0]);
        const inches = parseInt(partsHeight[2]);

        heightNew = convertToMeters(feet, inches);
    }

    useEffect(() => {
        const numericValue = parseFloat(weightValue);
        if (
            weightValue.trim() !== '' &&
            ((selectedUnit === 'kg' && numericValue >= 25 && numericValue <= 300) ||
                (selectedUnit === 'lbs' && numericValue >= 55 && numericValue <= 662))
        ) {
            setIsInputValid(true);
        } else {
            setIsInputValid(false);
        }
        handleNextStep4(selectedUnit === 'kg' ? `${weightValue} kg` : `${weightValue} lbs`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weightValue, selectedUnit, setIsInputValid]);

    useEffect(() => {
        setWeightValue('');
    }, [selectedUnit]);

    useEffect(() => {
        if (weightValue !== '') {
            let weightNew = 0;
            if (selectedUnit === 'kg') {
                weightNew = parseFloat(weightValue.split(' ')[0], 10);
            } else {
                weightNew = parseFloat(weightValue.split(' ')[0], 10) * 0.45359237;
            }
            const bmi = weightNew / (heightNew * heightNew);
            setValueBMI(bmi);
        } else {
            setCheckBMI(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weightValue]);

    useEffect(() => {
        if (valueBMI > 0) {
            if (valueBMI < 18.5) {
                const percent = ((18.5 - valueBMI) / 18.5) * 100;
                setPercent(percent);
                setCheckBMI(1);
            } else if (valueBMI >= 18.5 && valueBMI <= 24.9) {
                setCheckBMI(2);
            } else if (valueBMI > 24.9) {
                const percent = ((valueBMI - 24.9) / 24.9) * 100;
                setPercent(percent);
                setCheckBMI(3);
            }
        }
    }, [valueBMI]);
    return (
        <>
            <div className="form-step-4">
                <h1>What’s your current weight?</h1>
                <div className="form-step-4__container">
                    <div className="form-step-4__weight">
                        <div className="form-step-4__toggle">
                            <button
                                className={`toggle-btn ${selectedUnit === 'lbs' ? 'active' : ''}`}
                                onClick={() => setSelectedUnit('lbs')}
                            >
                                lbs
                            </button>
                            <button
                                className={`toggle-btn ${selectedUnit === 'kg' ? 'active' : ''}`}
                                onClick={() => setSelectedUnit('kg')}
                            >
                                kg
                            </button>
                        </div>
                    </div>
                    <div className="form-step-4__input">
                        <div className="input-wrapper">
                            <input
                                value={weightValue}
                                placeholder="Weight"
                                onChange={(e) => setWeightValue(e.target.value.replace(/[^0-9.]/g, ''))}
                            />
                            <span className="input-unit">{selectedUnit}</span>
                        </div>
                        <p style={{ paddingBottom: '12px' }}>
                            Please, enter a value from{' '}
                            <strong>
                                {selectedUnit === 'kg' ? '25' : '55'} {selectedUnit}
                            </strong>{' '}
                            to{' '}
                            <strong>
                                {selectedUnit === 'kg' ? '300' : '662'} {selectedUnit}
                            </strong>
                        </p>
                        {checkBMI == 1 && (
                            <p className="under-weight-noti">
                                You are underweight by {percent.toFixed(2)}% compared to the normal range.
                            </p>
                        )}
                        {checkBMI == 2 && <p className="normal-weight-noti">You are within the normal weight range.</p>}
                        {checkBMI == 3 && (
                            <p className="over-weight-noti">
                                You are overweight by {percent.toFixed(2)}% compared to the normal range.
                            </p>
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
                    disabled={!isInputValid}
                    style={{ margin: '40px 0' }}
                >
                    Continue
                </Button>
            </div>
        </>
    );
};

UIFormStep4.propTypes = {
    handleNextStep4: PropTypes.func.isRequired,
    setIsInputValid: PropTypes.bool.isRequired,
    height: PropTypes.string.isRequired,
};

export default UIFormStep4;
