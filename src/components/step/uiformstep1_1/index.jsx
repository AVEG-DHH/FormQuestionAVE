import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './uiformstep1_1.scss';

const UIFormStep1_1 = ({ setIsCheckboxChecked, age }) => {
    useEffect(() => {
        setIsCheckboxChecked(true);
    }, [setIsCheckboxChecked]);
    return (
        <div className="form-step-1_1">
            <div className="form-step-1_1-content">
                <div className="form-step-1_1-content__title">
                    <h1>
                        Over 1 million <br /> women
                    </h1>
                    <p>
                        in <span>their {age.substring(0, 2)}s</span> have already tried <br />
                        Natural Cleansing
                    </p>
                </div>
                <div className="form-step-1_1-content__img">
                    <img src="/img/form-step-6.png" alt="img" />
                </div>
            </div>
        </div>
    );
};
UIFormStep1_1.propTypes = {
    setIsCheckboxChecked: PropTypes.func.isRequired,
    age: PropTypes.string.isRequired,
};
export default UIFormStep1_1;
