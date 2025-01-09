import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';
import './uiformstep2.scss';

const UIFormStep2 = ({ handleNextStep2 }) => {
    return (
        <>
            <div className="form-step-2">
                <div>
                    Have you tried practicing these exercises <br /> at home before?
                </div>
                <FormControl className="form-step-2__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep2}>
                        <FormControlLabel
                            className="form-step-2__label"
                            value="Yes"
                            control={<Radio />}
                            label={<p className="form-step-2__content">Yes</p>}
                        />
                        <FormControlLabel
                            className="form-step-2__label"
                            value="No"
                            control={<Radio />}
                            label={<p className="form-step-2__content">No</p>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};
UIFormStep2.propTypes = {
    handleNextStep2: PropTypes.func.isRequired,
};
export default UIFormStep2;
