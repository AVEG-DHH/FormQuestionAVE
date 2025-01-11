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
                            label={
                                <p className="form-step-11-2__content">
                                    <img
                                        src="/icons/low-energy.webp"
                                        alt="Low, I feel tired throughout the day"
                                        className="form-step-11-2__icon"
                                    />
                                    Low, I feel tired throughout the day
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-11-2__label"
                            value="Post lunch slump"
                            control={<Radio />}
                            label={
                                <p className="form-step-11-2__content">
                                    <img
                                        src="/icons/post-lunch.webp"
                                        alt="Post lunch slump"
                                        className="form-step-11-2__icon"
                                    />
                                    Post lunch slump
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-11-2__label"
                            value="Dragging before meals"
                            control={<Radio />}
                            label={
                                <p className="form-step-11-2__content">
                                    <img
                                        src="/icons/before-meat.webp"
                                        alt="Dragging before meals"
                                        className="form-step-11-2__icon"
                                    />
                                    Dragging before meals
                                </p>
                            }
                        />
                        <FormControlLabel
                            className="form-step-11-2__label"
                            value="High and steady"
                            control={<Radio />}
                            label={
                                <p className="form-step-11-2__content">
                                    <img
                                        src="/icons/high.webp"
                                        alt="High and steady"
                                        className="form-step-11-2__icon"
                                    />
                                    High and steady
                                </p>
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep11_2;
