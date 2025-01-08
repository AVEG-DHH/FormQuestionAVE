import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './uiformstep11_1.scss';

const UIFormStep11_1 = ({ setIsCheckboxChecked }) => {
    useEffect(() => {
        setIsCheckboxChecked(true);
    }, [setIsCheckboxChecked]);
    return (
        <div className="form-step-11-1">
            <div className="form-step-11-1-content">
                <div className="form-step-11-1-content__title">
                    <h1>We got you!</h1>
                    <p>
                        Get ready to explore a variety of XXX exercises tailored to boost your XXX. Transform your
                        strength and achieve YYY effortlessly!
                    </p>
                </div>
                <div className="form-step-11-1-content__img">
                    <img src="/img/form-step-6.png" alt="img" />
                </div>
            </div>
        </div>
    );
};

UIFormStep11_1.propTypes = {
    setIsCheckboxChecked: PropTypes.func.isRequired,
};
export default UIFormStep11_1;
