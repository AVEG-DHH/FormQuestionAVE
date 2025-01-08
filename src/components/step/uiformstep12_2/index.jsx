import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep12_2.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep12_2 = ({ handleNextStep12_2 }) => {
    return (
        <>
            <div className="form-step-12-2">
                <div>How much sleep do you usually get?</div>
                <FormControl className="form-step-12-2__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep12_2}>
                        <FormControlLabel
                            className="form-step-12-2__label"
                            value="Less than 5 hours"
                            control={<Radio />}
                            label="Less than 5 hours"
                        />
                        <FormControlLabel
                            className="form-step-12-2__label"
                            value="5-6 hours"
                            control={<Radio />}
                            label="5-6 hours"
                        />
                        <FormControlLabel
                            className="form-step-12-2__label"
                            value="7-8 hours"
                            control={<Radio />}
                            label="7-8 hours"
                        />
                        <FormControlLabel
                            className="form-step-12-2__label"
                            value="More than 8 hours"
                            control={<Radio />}
                            label="More than 8 hours"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep12_2;
