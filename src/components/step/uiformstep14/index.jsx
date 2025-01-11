import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep14.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep14 = ({ handleNextStep14 }) => {
    return (
        <>
            <div className="form-step-14">
                <div>Where do you prefer to work out?</div>
                <FormControl className="form-step-14__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep14}>
                        <FormControlLabel
                            className="form-step-14__label"
                            value="At home"
                            control={<Radio />}
                            label={
                                <p className="form-step-14__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    At home
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-14__label"
                            value="Outdoors"
                            control={<Radio />}
                            label={
                                <p className="form-step-14__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    Outdoors
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-14__label"
                            value="In a gym"
                            control={<Radio />}
                            label={
                                <p className="form-step-14__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    In a gym
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-14__label"
                            value="No preference"
                            control={<Radio />}
                            label={
                                <p className="form-step-14__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    No preference
                                </p>
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep14;
