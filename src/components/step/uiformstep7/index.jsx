import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
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
                            label="None"
                        />
                        <FormControlLabel
                            className="form-step-7__label"
                            value="Back pain"
                            control={<Radio />}
                            label="Back pain"
                        />
                        <FormControlLabel
                            className="form-step-7__label"
                            value="Joint pain"
                            control={<Radio />}
                            label="Joint pain"
                        />
                        <FormControlLabel
                            className="form-step-7__label"
                            value="High/low blood pressure"
                            control={<Radio />}
                            label="High/low blood pressure"
                        />

                        <FormControlLabel
                            className="form-step-7__label"
                            value="Diabetes"
                            control={<Radio />}
                            label="Diabetes"
                        />
                        <FormControlLabel
                            className="form-step-7__label"
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

export default UIFormStep7;
