import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { IoFemaleSharp, IoMale } from 'react-icons/io5';
import './uiformstep10.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep10 = ({ handleNextStep10 }) => {
    return (
        <>
            <div className="form-step-10">
                <div>How often do you exercise?</div>
                <FormControl className="form-step-10__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep10}>
                        <FormControlLabel
                            className="form-step-10__label"
                            value="Almost every day"
                            control={<Radio />}
                            label={
                                <p className="form-step-10__content">
                                    <IoMale className="form-step-10__icon" />
                                    Almost every day
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-10__label"
                            value="Several times a week"
                            control={<Radio />}
                            label={
                                <p className="form-step-10__content">
                                    <IoFemaleSharp className="form-step-10__icon" />
                                    Several times a week
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-10__label"
                            value="Several times a month"
                            control={<Radio />}
                            label={
                                <p className="form-step-10__content">
                                    <IoFemaleSharp className="form-step-10__icon" />
                                    Several times a month
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-10__label"
                            value="Never"
                            control={<Radio />}
                            label={
                                <p className="form-step-10__content">
                                    <IoFemaleSharp className="form-step-10__icon" />
                                    Never
                                </p>
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};
export default UIFormStep10;
