import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep12_1.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep12_1 = ({ handleNextStep12_1 }) => {
    return (
        <>
            <div className="form-step-12-1">
                <div>Do you struggle with sleep?</div>
                <FormControl className="form-step-12-1__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep12_1}>
                        <FormControlLabel
                            className="form-step-12-1__label"
                            value="Yes"
                            control={<Radio />}
                            label={
                                <p className="form-step-12-1__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    Yes
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-12-1__label"
                            value="No"
                            control={<Radio />}
                            label={
                                <p className="form-step-12-1__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    No
                                </p>
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep12_1;
