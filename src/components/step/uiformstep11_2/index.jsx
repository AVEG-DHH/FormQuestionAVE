import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep11_2.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep11_2 = ({ handleNextStep11_2 }) => {
    return (
        <>
            <div className="form-step-11-2">
                <div>How are your energy levels during the day?</div>
                <FormControl className="form-step-11-2__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep11_2}>
                        <FormControlLabel
                            className="form-step-11-2__label"
                            value="Low, I feel tired throughout the day"
                            control={<Radio />}
                            label="Low, I feel tired throughout the day"
                        />
                        <FormControlLabel
                            className="form-step-11-2__label"
                            value="Post lunch slump"
                            control={<Radio />}
                            label="Post lunch slump"
                        />
                        <FormControlLabel
                            className="form-step-11-2__label"
                            value="Dragging before meals"
                            control={<Radio />}
                            label="Dragging before meals"
                        />
                        <FormControlLabel
                            className="form-step-11-2__label"
                            value="High and steady"
                            control={<Radio />}
                            label="High and steady"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep11_2;
