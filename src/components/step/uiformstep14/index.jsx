import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './UIFormStep14.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep14 = ({ handleNextStep14 }) => {
    return (
        <>
            <div className="form-step-14">
                <div>Where do you prefer to work out?</div>
                <FormControl className="form-step-14__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep14}>
                        <FormControlLabel
                            className="form-step-14__label"
                            value="At home"
                            control={<Radio />}
                            label="At home"
                        />
                        <FormControlLabel
                            className="form-step-14__label"
                            value="Outdoors"
                            control={<Radio />}
                            label="Outdoors"
                        />
                        <FormControlLabel
                            className="form-step-14__label"
                            value="In a gym"
                            control={<Radio />}
                            label="In a gym"
                        />
                        <FormControlLabel
                            className="form-step-14__label"
                            value="No preference"
                            control={<Radio />}
                            label="No preference"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep14;
