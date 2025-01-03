import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
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
                            label="Lose weight"
                        />
                        <FormControlLabel
                            className="form-step-5__label"
                            value="Maintain weight"
                            control={<Radio />}
                            label="Maintain weight"
                        />
                        <FormControlLabel
                            className="form-step-5__label"
                            value="Gain muscle"
                            control={<Radio />}
                            label="Gain muscle"
                        />
                        <FormControlLabel
                            className="form-step-5__label"
                            value="Improve overall health"
                            control={<Radio />}
                            label="Improve overall health"
                        />
                        <FormControlLabel
                            className="form-step-5__label"
                            value="Other"
                            control={<Radio />}
                            label="Other"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep5;
