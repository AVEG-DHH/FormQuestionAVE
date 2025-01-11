import './uiformstep4.scss';
import { useEffect, useState } from 'react';
// eslint-disable-next-line react/prop-types
const UIFormStep4 = ({ height, setIsInputValid, handleNextStep4 }) => {
    const [selectedUnit, setSelectedUnit] = useState('kg');
    const [weightValue, setWeightValue] = useState('');
    const [valueBMI, setValueBMI] = useState(0);
    const [percent, setPercent] = useState(0);
    const [checkBMI, setCheckBMI] = useState(0);
    // eslint-disable-next-line react/prop-types
    const heightNew = parseInt(height.split(' ')[0], 10) / 100;

    useEffect(() => {
        const numericValue = parseFloat(weightValue);
        console.log(numericValue);
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
            const weightNew = parseInt(weightValue.split(' ')[0], 10);
            const bmi = weightNew / (heightNew * heightNew);
            setValueBMI(bmi);
        }else {
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
                console.log('You are within the normal weight range.');
                setCheckBMI(2);
            } else if (valueBMI > 24.9) {
                const percent = ((valueBMI - 24.9) / 24.9) * 100;
                setPercent(percent);
                setCheckBMI(3);
            }
            console.log(valueBMI);
        }
    }, [valueBMI]);
    return (
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
                        <p style={{ color: 'red' }}>
                            You are underweight by {percent.toFixed(2)}% compared to the normal range.
                        </p>
                    )}
                    {checkBMI == 2 && <p>You are within the normal weight range.</p>}
                    {checkBMI == 3 && (
                        <p style={{ color: 'green' }}>
                            You are overweight by {percent.toFixed(2)}% compared to the normal range.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UIFormStep4;
