import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { IoFemaleSharp, IoMale } from 'react-icons/io5';
import './uiformstep2.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep2 = ({ handleNextStep2 }) => {
    return (
        <>
            <div className="form-step-2">
                <div>Have you tried practicing these exercises at home before?</div>
                <FormControl className="form-step-2__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep2}>
                        <FormControlLabel
                            className="form-step-2__label"
                            value="Yes"
                            control={<Radio />}
                            label={
                                <p className="form-step-2__content">
                                    <IoMale className="form-step-2__icon" />
                                    Yes
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-2__label"
                            value="No"
                            control={<Radio />}
                            label={
                                <p className="form-step-2__content">
                                    <IoFemaleSharp className="form-step-2__icon" />
                                    No
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
