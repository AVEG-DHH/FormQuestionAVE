import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './UIFormStep13.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep13 = ({ handleNextStep13 }) => {
    return (
        <>
            <div className="form-step-13">
                <div>How much time do you usually spend on a workout?</div>
                <FormControl className="form-step-13__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep13}>
                        <FormControlLabel
                            className="form-step-13__label"
                            value="Less than 15 minutes"
                            control={<Radio />}
                            label="Less than 15 minutes"
                        />
                        <FormControlLabel
                            className="form-step-13__label"
                            value="15-30 minutes"
                            control={<Radio />}
                            label="15-30 minutes"
                        />
                        <FormControlLabel
                            className="form-step-13__label"
                            value="More than 60 minutes"
                            control={<Radio />}
                            label="More than 60 minutes"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep13;
