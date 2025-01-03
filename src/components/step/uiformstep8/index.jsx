import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './UIFormStep8.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep8 = ({ handleNextStep8 }) => {
    return (
        <>
            <div className="form-step-8">
                <div>Are you pregnant or postpartum?</div>
                <FormControl className="form-step-8__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep8}>
                        <FormControlLabel className="form-step-8__label" value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel className="form-step-8__label" value="No" control={<Radio />} label="No" />
                        <FormControlLabel
                            className="form-step-8__label"
                            value="Not applicable"
                            control={<Radio />}
                            label="Not applicable"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep8;
