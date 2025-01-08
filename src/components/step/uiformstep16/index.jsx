import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './uiformstep16.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep16 = ({ handleNextStep13 }) => {
    return (
        <>
            <div className="form-step-16">
                <div>What type of diet do you prefer?</div>
                <FormControl className="form-step-16__radio">
                    <RadioGroup name="radio-buttons-group" onChange={handleNextStep13}>
                        <h1>WITH MEAT</h1>
                        <FormControlLabel
                            className="form-step-16__label"
                            value="Traditional"
                            control={<Radio />}
                            label="Traditional"
                        />
                        <p>I enjoy everything</p>
                        <FormControlLabel
                            className="form-step-16__label"
                            value="Keto"
                            control={<Radio />}
                            label="Keto"
                        />
                        <p>I prefer high-fat low-carb meals</p>
                        <FormControlLabel
                            className="form-step-16__label"
                            value="Paleo"
                            control={<Radio />}
                            label="Paleo"
                        />
                        <p>I dont eat processed foods</p>

                        <h1>WITHOUT MEAT</h1>
                        <FormControlLabel
                            className="form-step-16__label"
                            value="Vegetarian"
                            control={<Radio />}
                            label="Vegetarian"
                        />
                        <p>I avoid meat and fish</p>
                        <FormControlLabel
                            className="form-step-16__label"
                            value="Vegan (Plant Diet)"
                            control={<Radio />}
                            label="Vegan (Plant Diet)"
                        />
                        <p>I do not eat animal products</p>
                        <FormControlLabel
                            className="form-step-16__label"
                            value="Keto Vegan"
                            control={<Radio />}
                            label="Keto Vegan"
                        />
                        <p>I eat low-carb plant-based meals only</p>

                        <h1>WITH FISH</h1>
                        <FormControlLabel
                            className="form-step-16__label"
                            value="Mediterranean"
                            control={<Radio />}
                            label="Mediterranean"
                        />
                        <p>I eat plenty of veggies, grains, and seafood</p>
                        <FormControlLabel
                            className="form-step-16__label"
                            value="Pescatarian"
                            control={<Radio />}
                            label="Pescatarian"
                        />
                        <p>I avoid meat but enjoy fish</p>

                        <h1>WITHOUT ALLERGENS</h1>
                        <FormControlLabel
                            className="form-step-16__label"
                            value="Lactose Free"
                            control={<Radio />}
                            label="Lactose Free"
                        />
                        <p>I do not consume foods with lactose</p>
                        <FormControlLabel
                            className="form-step-16__label"
                            value="Gluten Free"
                            control={<Radio />}
                            label="Gluten Free"
                        />
                        <p>I avoid gluten-containing grains</p>
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};

export default UIFormStep16;
