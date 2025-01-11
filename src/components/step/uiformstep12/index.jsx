import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep12.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep12 = ({ handleNextStep12 }) => {
    return (
        <>
            <div className="form-step-12">
                <div>What type of exercises do you enjoy?</div>
                <FormControl className="form-step-12__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep12}>
                        <FormControlLabel
                            className="form-step-12__label"
                            value="Cardio (running, jumping rope)"
                            control={<Radio />}
                            label={
                                <p className="form-step-12__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-12__icon"
                                    /> */}
                                    Cardio (running, jumping rope)
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-12__label"
                            value="Strength (weights, planks)"
                            control={<Radio />}
                            label={
                                <p className="form-step-12__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-12__icon"
                                    /> */}
                                    Strength (weights, planks)
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-12__label"
                            value="Flexibility/Balance exercises"
                            control={<Radio />}
                            label={
                                <p className="form-step-12__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-12__icon"
                                    /> */}
                                    Flexibility/Balance exercises
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-12__label"
                            value="Not sure yet"
                            control={<Radio />}
                            label={
                                <p className="form-step-12__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-12__icon"
                                    /> */}
                                    Not sure yet
                                </p>
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep12;
