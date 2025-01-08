import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { IoFemaleSharp, IoMale } from 'react-icons/io5';
import './uiformstep9.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep9 = ({ handleNextStep2 }) => {
    return (
        <>
            <div className="form-step-9">
                <div>Have you tried practicing these exercises at home before?</div>
                <FormControl className="form-step-9__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep2}>
                        <FormControlLabel
                            className="form-step-9__label"
                            value="Belly"
                            control={<Radio />}
                            label={
                                <p className="form-step-9__content">
                                    <IoMale className="form-step-9__icon" />
                                    Belly
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-9__label"
                            value="Butt"
                            control={<Radio />}
                            label={
                                <p className="form-step-9__content">
                                    <IoFemaleSharp className="form-step-9__icon" />
                                    Butt
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-9__label"
                            value="Legs"
                            control={<Radio />}
                            label={
                                <p className="form-step-9__content">
                                    <IoMale className="form-step-9__icon" />
                                    Legs
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-9__label"
                            value="Chest"
                            control={<Radio />}
                            label={
                                <p className="form-step-9__content">
                                    <IoMale className="form-step-9__icon" />
                                    Chest
                                </p>
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};
export default UIFormStep9;
