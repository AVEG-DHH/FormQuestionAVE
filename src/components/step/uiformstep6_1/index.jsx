import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './uiformstep6_1.scss';

const UIFormStep6_1 = ({ setIsCheckboxChecked, age, questionGoal }) => {
    useEffect(() => {
        setIsCheckboxChecked(true);
    }, [setIsCheckboxChecked]);
    return (
        <div className="form-step-6_1">
            <div className="form-step-6_1-content">
                <div className="form-step-6_1-content__title">
                    <h1>We’ve got just the solution!</h1>
                    <p>
                        For women in <span>their {age.substring(0, 2)}s</span>, Natural Cleansing is an excellent choice
                        to <span>{questionGoal}</span> with minimal effort.
                    </p>
                    <p>
                        Just follow our guidance, embrace the journey, and get ready to achieve your dream physique with
                        ease!
                    </p>
                </div>
                {/* <div className="form-step-6_1-content__img">
                    <img src="/img/form-step-6.png" alt="img" />
                </div> */}
            </div>
        </div>
    );
};
UIFormStep6_1.propTypes = {
    setIsCheckboxChecked: PropTypes.func.isRequired,
    age: PropTypes.string.isRequired,
    questionGoal: PropTypes.string.isRequired,
};
export default UIFormStep6_1;
