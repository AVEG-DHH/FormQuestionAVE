import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { MdClose } from 'react-icons/md';
import './uiformstep7.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep7 = ({ handleNextStep7 }) => {
    return (
        <>
            <div className="form-step-7">
                <div>Do you have any health issues?</div>
                <FormControl className="form-step-7__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep7}>
                        <FormControlLabel
                            className="form-step-7__label"
                            value="None"
                            control={<Radio />}
                            label={
                                <p className="form-step-7__content">
                                    <MdClose className="form-step-7__icon" />
                                    None
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-7__label"
                            value="Back pain"
                            control={<Radio />}
                            label={
                                <p className="form-step-7__content">
                                    <img
                                        src="/icons/back-pain-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-7__icon"
                                    />
                                    Back pain
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-7__label"
                            value="Joint pain"
                            control={<Radio />}
                            label={
                                <p className="form-step-7__content">
                                    <img
                                        src="/icons/knee-joint-pain-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-7__icon"
                                    />
                                    Joint pain
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-7__label"
                            value="High/low blood pressure"
                            control={<Radio />}
                            label={
                                <p className="form-step-7__content">
                                    <img
                                        src="/icons/blood-pressure-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-7__icon"
                                    />
                                    High/low blood pressure
                                </p>
                            }
                        />

                        <FormControlLabel
                            className="form-step-7__label"
                            value="Diabetes"
                            control={<Radio />}
                            label={
                                <p className="form-step-7__content">
                                    <img
                                        src="/icons/diabetes.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-7__icon"
                                    />
                                    Diabetes
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-7__label"
                            value="Other"
                            control={<Radio />}
                            label={
                                <p className="form-step-7__content">
                                    <img
                                        src="/icons/more-options-ellipsis-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-7__icon"
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

export default UIFormStep7;
