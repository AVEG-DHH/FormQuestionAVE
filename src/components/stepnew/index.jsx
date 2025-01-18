import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';
import './stepnew.scss';

const StepNew = ({ propsFormStep }) => {
    console.log(propsFormStep);
    return (
        <div className="block-step-new">
            <div className="block-step-new__header">{propsFormStep.title}</div>
            <div className="block-step-new__body">
                <FormControl className="block-step-new__body__radio">
                    <RadioGroup name="block-step-new__body__radio__button__group" onChange={propsFormStep.handleStep}>
                        {propsFormStep.arrQuestion.map((item) => (
                            <FormControlLabel
                                key={item.value} // Sử dụng item làm key
                                className="block-step-new__body__radio__label"
                                value={item.value}
                                control={<Radio />}
                                label={<p className="block-step-new__body__radio__content">{item.icon} {item.value}</p>}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    );
};

StepNew.propTypes = {
    propsFormStep: PropTypes.shape({
        title: PropTypes.node.isRequired,
        handleStep: PropTypes.func.isRequired,
        arrQuestion: PropTypes.array.isRequired,
    }).isRequired,
};

export default StepNew;
