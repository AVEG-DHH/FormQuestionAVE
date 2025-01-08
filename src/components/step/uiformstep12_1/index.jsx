import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep12_1.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep12_1 = ({ handleNextStep12 }) => {
    return (
        <>
            <div className="form-step-12-1">
                <div>Do you struggle with sleep?</div>
                <FormControl className="form-step-12-1__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep12}>
                        <FormControlLabel
                            className="form-step-12-1__label"
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                        />
                        <FormControlLabel className="form-step-12-1__label" value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep12_1;
