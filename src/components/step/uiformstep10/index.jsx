import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep10.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep10 = ({ handleNextStep10 }) => {
    return (
        <>
            <div className="form-step-10">
                <div>Have you experienced any injuries or mobility issues?</div>
                <FormControl className="form-step-10__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep10}>
                        <FormControlLabel className="form-step-10__label" value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel className="form-step-10__label" value="No" control={<Radio />} label="No" />
                        <FormControlLabel
                            className="form-step-10__label"
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

export default UIFormStep10;
