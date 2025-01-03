import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './UIFormStep11.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep11 = ({ handleNextStep11 }) => {
    return (
        <>
            <div className="form-step-11">
                <div>What is your daily energy level?</div>
                <FormControl className="form-step-11__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep11}>
                        <FormControlLabel
                            className="form-step-11__label"
                            value="High"
                            control={<Radio />}
                            label="High"
                        />
                        <FormControlLabel
                            className="form-step-11__label"
                            value="Medium"
                            control={<Radio />}
                            label="Medium"
                        />
                        <FormControlLabel
                            className="form-step-11__label"
                            value="Low - I often feel tired"
                            control={<Radio />}
                            label="Low - I often feel tired"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep11;
