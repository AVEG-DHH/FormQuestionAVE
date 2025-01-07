import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { IoFemaleSharp, IoMale } from 'react-icons/io5';
import './uiformstep2.scss';

// eslint-disable-next-line react/prop-types
const UIFormStep2 = ({ handleNextStep2 }) => {
    return (
        <div className="form-step-2">
            <div className="form-step-2__content">
                <div className="form-step-2__question">
                    <h1>Natural Cleansing is the perfect choice for workouts at any fitness level.</h1>
                    <p>
                        Just follow our guidance, embrace the journey, and get ready to achieve your dream physique with
                        ease!
                    </p>
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
