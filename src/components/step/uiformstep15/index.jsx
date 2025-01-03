import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep15.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep15 = ({ handleNextStep15 }) => {
    return (
        <>
            <div className="form-step-15">
                <div>What equipment do you have access to?</div>
                <FormControl className="form-step-15__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep15}>
                        <FormControlLabel
                            className="form-step-15__label"
                            value="None"
                            control={<Radio />}
                            label="None"
                        />
                        <FormControlLabel
                            className="form-step-15__label"
                            value="Chair/mat"
                            control={<Radio />}
                            label="Chair/mat"
                        />
                        <FormControlLabel
                            className="form-step-15__label"
                            value="Dumbbells"
                            control={<Radio />}
                            label="Dumbbells"
                        />
                        <FormControlLabel
                            className="form-step-15__label"
                            value="Resistance bands"
                            control={<Radio />}
                            label="Resistance bands"
                        />
                        <FormControlLabel
                            className="form-step-15__label"
                            value="Other advanced equipment"
                            control={<Radio />}
                            label="Other advanced equipment"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep15;
