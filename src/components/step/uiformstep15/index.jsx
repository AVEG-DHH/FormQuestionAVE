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
                            label={
                                <p className="form-step-15__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    None
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-15__label"
                            value="Chair/mat"
                            control={<Radio />}
                            label={
                                <p className="form-step-15__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    Chair/mat
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-15__label"
                            value="Dumbbells"
                            control={<Radio />}
                            label={
                                <p className="form-step-15__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    Dumbbells
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-15__label"
                            value="Resistance bands"
                            control={<Radio />}
                            label={
                                <p className="form-step-15__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    Resistance bands
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-15__label"
                            value="Other advanced equipment"
                            control={<Radio />}
                            label={
                                <p className="form-step-15__content">
                                    {/* <img
                                        src="/icons/women-weight-decrease-icon.png"
                                        alt="Maintain Weight Icon"
                                        className="form-step-5__icon"
                                    /> */}
                                    Other advanced equipment
                                </p>
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep15;
