import './UIFormStep21.scss';
import {
    // useEffect,
    useState,
} from 'react';

const UIFormStep21 = () =>
    // { setIsInputValid, handleNextStep4 }
    {
        // const [selectedUnit, setSelectedUnit] = useState('kg');
        const [weightValue, setWeightValue] = useState('');

        // useEffect(() => {
        //     const numericValue = parseFloat(weightValue);
        //     console.log(numericValue);
        //     if (
        //         weightValue.trim() !== '' &&
        //         ((selectedUnit === 'kg' && numericValue >= 25 && numericValue <= 300) ||
        //             (selectedUnit === 'lbs' && numericValue >= 55 && numericValue <= 662))
        //     ) {
        //         setIsInputValid(true);
        //     } else {
        //         setIsInputValid(false);
        //     }
        //     handleNextStep4(selectedUnit === 'kg' ? `${weightValue} kg` : `${weightValue} lbs`);
        // }, [weightValue, selectedUnit, setIsInputValid]);

        // useEffect(() => {
        //     setWeightValue('');
        // }, [selectedUnit]);

        return (
            <div className="form-step-21">
                <h1>What’s your name?</h1>
                <div className="form-step-21__container">
                    <div className="form-step-21__input">
                        <div className="input-wrapper">
                            <input
                                value={weightValue}
                                placeholder="Name"
                                onChange={(e) => setWeightValue(e.target.value.replace(/[^0-9.]/g, ''))}
                            />
                            <span className="input-unit">
                                {
                                    // selectedUnit
                                }
                            </span>
                        </div>
                        {/* <p>
                            We ask your age to personalize your plan <br />
                            Older people are found to have a higher body fat percentage than younger people with the
                            same BMI.
                            <strong>
                            {selectedUnit === 'kg' ? '25' : '55'} {selectedUnit}
                        </strong>{' '}
                        to{' '}
                        <strong>
                            {selectedUnit === 'kg' ? '300' : '662'} {selectedUnit}
                        </strong>
                        </p> */}
                    </div>
                </div>
            </div>
        );
    };

export default UIFormStep21;
