import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { IoFemaleSharp, IoMale } from 'react-icons/io5';
import './uiformstep2.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep2 = ({ handleNextStep2 }) => {
    return (
        <>
            <div className="form-step-2">
                <div>What is your Gender?</div>
                <FormControl className="form-step-2__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep2}>
                        <FormControlLabel
                            className="form-step-2__label"
                            value="Male"
                            control={<Radio />}
                            label={
                                <p className="form-step-2__content">
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
                                <p className="form-step-2__content">
                                    <IoFemaleSharp className="form-step-2__icon" />
                                    Female
                                </p>
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};
export default UIFormStep2;
