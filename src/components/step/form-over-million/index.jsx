import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { IoFemaleSharp, IoMale } from 'react-icons/io5';
import './uiformstep2.scss';

// eslint-disable-next-line react/prop-types
const UIFormStep2 = ({ handleNextStep2 }) => {
    return (
        <div className="form-step-2">
            <div className="form-step-2__content">
                <div className="form-step-2__question">
                    <h1>Over 2 million women</h1>
                    <p>in their 40s have already tried Natural Cleansing</p>
                </div>

                <div className="form-step-2__img">
                    <FormControl className="form-step-2__radio">
                        <RadioGroup name="radio-buttons-group" onChange={handleNextStep2}>
                            <FormControlLabel
                                className="form-step-2__label"
                                value="Male"
                                control={<Radio />}
                                label={
                                    <p className="form-step-2__label-content">
                                        <IoMale className="form-step-2__icon" />
                                        Male
                                    </p>
                                }
                            />
                            <FormControlLabel
                                className="form-step-2__label"
                                value="Female"
                                control={<Radio />}
                                label={
                                    <p className="form-step-2__label-content">
                                        <IoFemaleSharp className="form-step-2__icon" />
                                        Female
                                    </p>
                                }
                            />
                            <img src="/img/form-step-6.png" alt="img" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default UIFormStep2;
