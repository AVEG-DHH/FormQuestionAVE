import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';
import './uiformstep16.scss';

const UIFormStep16 = ({ handleNextStep16 }) => {
    return (
        <div className="form-step-16">
            <div>What type of diet do you prefer?</div>
            <FormControl className="form-step-16__radio">
                <RadioGroup name="radio-buttons-group" onChange={handleNextStep16}>
                    <div className="form-step-16__columns">
                        {/* Left Column */}
                        <div className="form-step-16__left-column">
                            <h1>WITH MEAT</h1>
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Traditional"
                                control={<Radio />}
                                label={
                                    <div className="form-step-16__content">
                                        <img
                                            src="/icons/icons-Q16/Traditional.webp"
                                            alt="Traditional"
                                            className="form-step-16__icon"
                                        />
                                        <div className="form-step-16__text">
                                            <span>Traditional</span>
                                            <p>I enjoy everything</p>
                                        </div>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Keto"
                                control={<Radio />}
                                label={
                                    <div className="form-step-16__content">
                                        <img
                                            src="/icons/icons-Q16/Keto.webp"
                                            alt="Keto"
                                            className="form-step-16__icon"
                                        />
                                        <div className="form-step-16__text">
                                            <span>Keto</span>
                                            <p>I prefer high-fat low-carb meals</p>
                                        </div>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Paleo"
                                control={<Radio />}
                                label={
                                    <div className="form-step-16__content">
                                        <img
                                            src="/icons/icons-Q16/Paleo.webp"
                                            alt="Paleo"
                                            className="form-step-16__icon"
                                        />
                                        <div className="form-step-16__text">
                                            <span>Paleo</span>
                                            <p>I don{"'"}t eat processed foods</p>
                                        </div>
                                    </div>
                                }
                            />

                            <h1>WITHOUT MEAT</h1>
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Vegetarian"
                                control={<Radio />}
                                label={
                                    <div className="form-step-16__content">
                                        <img
                                            src="/icons/icons-Q16/Vegetarian.webp"
                                            alt="Vegetarian"
                                            className="form-step-16__icon"
                                        />
                                        <div className="form-step-16__text">
                                            <span>Vegetarian</span>
                                            <p>I avoid meat and fish</p>
                                        </div>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Vegan (Plant Diet)"
                                control={<Radio />}
                                label={
                                    <div className="form-step-16__content">
                                        <img
                                            src="/icons/icons-Q16/Vegan.webp"
                                            alt="Vegan (Plant Diet)"
                                            className="form-step-16__icon"
                                        />
                                        <div className="form-step-16__text">
                                            <span>Vegan (Plant Diet)</span>
                                            <p>I do not eat animal products</p>
                                        </div>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Keto Vegan"
                                control={<Radio />}
                                label={
                                    <div className="form-step-16__content">
                                        <img
                                            src="/icons/icons-Q16/Keto_Vegan.webp"
                                            alt="Keto Vegan"
                                            className="form-step-16__icon"
                                        />
                                        <div className="form-step-16__text">
                                            <span>Keto Vegan</span>
                                            <p>I eat low-carb plant-based meals only</p>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        {/* Right Column */}
                        <div className="form-step-16__right-column">
                            <h1>WITH FISH</h1>
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Mediterranean"
                                control={<Radio />}
                                label={
                                    <div className="form-step-16__content">
                                        <img
                                            src="/icons/icons-Q16/Mediterranean.webp"
                                            alt="Mediterranean"
                                            className="form-step-16__icon"
                                        />
                                        <div className="form-step-16__text">
                                            <span>Mediterranean</span>
                                            <p>I eat plenty of veggies, grains, and seafood</p>
                                        </div>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Pescatarian"
                                control={<Radio />}
                                label={
                                    <div className="form-step-16__content">
                                        <img
                                            src="/icons/icons-Q16/Pescatarian.webp"
                                            alt="Pescatarian"
                                            className="form-step-16__icon"
                                        />
                                        <div className="form-step-16__text">
                                            <span>Pescatarian</span>
                                            <p>I avoid meat but enjoy fish</p>
                                        </div>
                                    </div>
                                }
                            />

                            <h1>WITHOUT ALLERGENS</h1>
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Lactose Free"
                                control={<Radio />}
                                label={
                                    <div className="form-step-16__content">
                                        <img
                                            src="/icons/icons-Q16/Lactose.webp"
                                            alt="Lactose Free"
                                            className="form-step-16__icon"
                                        />
                                        <div className="form-step-16__text">
                                            <span>Lactose Free</span>
                                            <p>I do not consume foods with lactose</p>
                                        </div>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Gluten Free"
                                control={<Radio />}
                                label={
                                    <div className="form-step-16__content">
                                        <img
                                            src="/icons/icons-Q16/Gluten.webp"
                                            alt="Gluten Free"
                                            className="form-step-16__icon"
                                        />
                                        <div className="form-step-16__text">
                                            <span>Gluten Free</span>
                                            <p>I avoid gluten-containing grains</p>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
    );
};

UIFormStep16.propTypes = {
    handleNextStep16: PropTypes.func.isRequired, // Xác định handleNextStep16 là một hàm bắt buộc
};

export default UIFormStep16;
