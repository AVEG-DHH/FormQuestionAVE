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
                            label="Feel more confident in my body"
                        />
                        <FormControlLabel
                            className="form-step-17__label"
                            value="Feel healthier and more energetic"
                            control={<Radio />}
                            label="Feel healthier and more energetic"
                        />
                        <FormControlLabel
                            className="form-step-17__label"
                            value="Fit in my clothes better"
                            control={<Radio />}
                            label="Fit in my clothes better"
                        />
                        <FormControlLabel
                            className="form-step-17__label"
                            value="Get back in shape after giving birth"
                            control={<Radio />}
                            label="Get back in shape after giving birth"
                        />
                        <FormControlLabel
                            className="form-step-17__label"
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

export default UIFormStep17;
