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
                                    <div>
                                        <span>Traditional</span>
                                        <p>I enjoy everything</p>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Keto"
                                control={<Radio />}
                                label={
                                    <div>
                                        <span>Keto</span>
                                        <p>I prefer high-fat low-carb meals</p>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Paleo"
                                control={<Radio />}
                                label={
                                    <div>
                                        <span>Paleo</span>
                                        <p>I dont eat processed foods</p>
                                    </div>
                                }
                            />

                            <h1>WITHOUT MEAT</h1>
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Vegetarian"
                                control={<Radio />}
                                label={
                                    <div>
                                        <span>Vegetarian</span>
                                        <p>I avoid meat and fish</p>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value=" Vegan (Plant Diet)"
                                control={<Radio />}
                                label={
                                    <div>
                                        <span> Vegan (Plant Diet)</span>
                                        <p>I do not eat animal products</p>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value=" Keto Vegan"
                                control={<Radio />}
                                label={
                                    <div>
                                        <span> Keto Vegan</span>
                                        <p>I eat low-carb plant-based meals only</p>
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
                                    <div>
                                        <span>Mediterranean</span>
                                        <p>I eat plenty of veggies, grains, and seafood</p>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Pescatarian"
                                control={<Radio />}
                                label={
                                    <div>
                                        <span>Pescatarian</span>
                                        <p>I avoid meat but enjoy fish</p>
                                    </div>
                                }
                            />

                            <h1>WITHOUT ALLERGENS</h1>
                            <FormControlLabel
                                className="form-step-16__label"
                                value=" Lactose Free"
                                control={<Radio />}
                                label={
                                    <div>
                                        <span> Lactose Free</span>
                                        <p>I do not consume foods with lactose</p>
                                    </div>
                                }
                            />
                            <FormControlLabel
                                className="form-step-16__label"
                                value="Gluten Free"
                                control={<Radio />}
                                label={
                                    <div>
                                        <span>Gluten Free</span>
                                        <p>I avoid gluten-containing grains</p>
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
