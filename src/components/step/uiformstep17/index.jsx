import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep17.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep17 = ({ handleNextStep17 }) => {
    return (
        <>
            <div className="form-step-17">
                <div>What&apos;s your main reason to get in shape?</div>
                <FormControl className="form-step-17__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep17}>
                        <FormControlLabel
                            className="form-step-17__label"
                            value="Feel more confident in my body"
                            control={<Radio />}
                            label={
                                <p className="form-step-17__content">
                                    <img
                                        src="/icons/icons-Q17/Confident.webp"
                                        alt="Feel more confident in my body"
                                        className="form-step-17__icon"
                                    />
                                    Feel more confident in my body
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-17__label"
                            value="Feel healthier and more energetic"
                            control={<Radio />}
                            label={
                                <p className="form-step-17__content">
                                    <img
                                        src="/icons/icons-Q17/Healthier.webp"
                                        alt="Feel healthier and more energetic"
                                        className="form-step-17__icon"
                                    />
                                    Feel healthier and more energetic
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-17__label"
                            value="Fit in my clothes better"
                            control={<Radio />}
                            label={
                                <p className="form-step-17__content">
                                    <img
                                        src="/icons/icons-Q17/Fit.webp"
                                        alt="Fit in my clothes better"
                                        className="form-step-17__icon"
                                    />
                                    Fit in my clothes better
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-17__label"
                            value="Get back in shape after giving birth"
                            control={<Radio />}
                            label={
                                <p className="form-step-17__content">
                                    <img
                                        src="/icons/icons-Q17/Back.webp"
                                        alt="Get back in shape after giving birth"
                                        className="form-step-17__icon"
                                    />
                                    Get back in shape after giving birth
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-17__label"
                            value="Other"
                            control={<Radio />}
                            label={
                                <p className="form-step-17__content">
                                    <img src="/icons/icons-Q17/Other.webp" alt="Other" className="form-step-17__icon" />
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

export default UIFormStep17;
