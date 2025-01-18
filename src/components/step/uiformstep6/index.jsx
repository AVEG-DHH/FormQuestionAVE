import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';
import './uiformstep6.scss';

const UIFormStep6 = ({ handleNextStep6 }) => {
    return (
        <>
            <div className="form-step-6">
                <div className="form-step-6-header">
                    How many days a week do you <br className="br-sp" /> want to exercise?
                </div>
                <div className="form-step-6-body">
                    <div className="form-step-6-body-img">
                        <img src="/img/form-step-6.png" alt="img" />
                    </div>
                    <FormControl className="form-step-6__radio">
                        <RadioGroup name="radio-buttons-group" onChange={handleNextStep6}>
                            <FormControlLabel
                                className="form-step-6__label"
                                value="2 days"
                                control={<Radio />}
                                label={<p>2 days</p>}
                            />
                            <FormControlLabel
                                className="form-step-6__label"
                                value="3 days"
                                control={<Radio />}
                                label={<p>3 days</p>}
                            />
                            <FormControlLabel
                                className="form-step-6__label"
                                value="4 days"
                                control={<Radio />}
                                label={<p>4 days</p>}
                            />
                            <FormControlLabel
                                className="form-step-6__label"
                                value="5 or more days"
                                control={<Radio />}
                                label={<p>5 or more days</p>}
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </>
    );
};
UIFormStep6.propTypes = {
    handleNextStep6: PropTypes.func.isRequired,
};
export default UIFormStep6;
