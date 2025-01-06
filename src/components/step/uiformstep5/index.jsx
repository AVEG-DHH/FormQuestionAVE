import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { IoScaleOutline } from 'react-icons/io5';
import { GiGymBag } from 'react-icons/gi';

import './uiformstep5.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep5 = ({ handleNextStep5 }) => {
    return (
        <>
            <div className="form-step-5">
                <div>What is your fitness goal?</div>
                <FormControl className="form-step-5__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep5}>
                        <FormControlLabel
                            className="form-step-5__label"
                            value="Lose weight"
                            control={<Radio />}
                            label={
                                <p className="form-step-5__content">
                                    <IoScaleOutline className="form-step-5__icon" />
                                    Lose Weight
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-5__label"
                            value="Maintain weight"
                            control={<Radio />}
                            label={
                                <p className="form-step-5__content">
                                    <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    />
                                    Maintain weight
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-5__label"
                            value="Gain muscle"
                            control={<Radio />}
                            label={
                                <p className="form-step-5__content">
                                    <img
                                        src="/icons/arm-muscles-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    />
                                    Gain muscle
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-5__label"
                            value="Improve overall health"
                            control={<Radio />}
                            label={
                                <p className="form-step-5__content">
                                    <img
                                        src="/icons/diet-food-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    />
                                    Improve overall health
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-5__label"
                            value="Other"
                            control={<Radio />}
                            label={
                                <p className="form-step-5__content">
                                    <img
                                        src="/icons/more-options-ellipsis-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    />
                                    Other
                                </p>
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep5;
