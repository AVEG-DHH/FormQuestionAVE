import './uiformstep4.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const UIFormStep4 = ({ setIsInputValid }) => {
    const [selectedUnit, setSelectedUnit] = useState('kg');
    const [weightValue, setWeightValue] = useState('');

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
    }, [weightValue, selectedUnit, setIsInputValid]);

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
                    <p>
                        Please, enter a value from{' '}
                        <strong>
                            {selectedUnit === 'kg' ? '25' : '55'} {selectedUnit}
                        </strong>{' '}
                        to{' '}
                        <strong>
                            {selectedUnit === 'kg' ? '300' : '662'} {selectedUnit}
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

UIFormStep4.propTypes = {
    setIsInputValid: PropTypes.func.isRequired,
};

export default UIFormStep4;
