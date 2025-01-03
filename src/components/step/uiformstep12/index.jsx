import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep12.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep12 = ({ handleNextStep12 }) => {
    return (
        <>
            <div className="form-step-12">
                <div>What type of exercises do you enjoy?</div>
                <FormControl className="form-step-12__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep12}>
                        <FormControlLabel
                            className="form-step-12__label"
                            value="Cardio (running, jumping rope)"
                            control={<Radio />}
                            label="Cardio (running, jumping rope)"
                        />
                        <FormControlLabel
                            className="form-step-12__label"
                            value="Strength (weights, planks)"
                            control={<Radio />}
                            label="Strength (weights, planks)"
                        />
                        <FormControlLabel
                            className="form-step-12__label"
                            value="Flexibility/Balance exercises"
                            control={<Radio />}
                            label="Flexibility/Balance exercises"
                        />
                        <FormControlLabel
                            className="form-step-12__label"
                            value="Not sure yet"
                            control={<Radio />}
                            label="Not sure yet"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep12;
