import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep13.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep13 = ({ handleNextStep13 }) => {
    return (
        <>
            <div className="form-step-13">
                <div>How much time do you usually spend on a workout?</div>
                <FormControl className="form-step-13__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep13}>
                        <FormControlLabel
                            className="form-step-13__label"
                            value="Less than 15 minutes"
                            control={<Radio />}
                            label={
                                <p className="form-step-13__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    Less than 15 minutes
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-13__label"
                            value="15-30 minutes"
                            control={<Radio />}
                            label={
                                <p className="form-step-13__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    15-30 minutes
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-13__label"
                            value="More than 60 minutes"
                            control={<Radio />}
                            label={
                                <p className="form-step-13__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    More than 60 minutes
                                </p>
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep13;
