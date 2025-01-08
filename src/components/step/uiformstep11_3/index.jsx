import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './uiformstep11_3.scss';

const UIFormStep11_3 = ({ setIsCheckboxChecked }) => {
    useEffect(() => {
        setIsCheckboxChecked(true);
    }, [setIsCheckboxChecked]);
    return (
        <div className="form-step-11-3">
            <div className="form-step-11-3-content">
                <div className="form-step-11-3-content__title">
                    <h1>No Problem!</h1>
                    <p>
                        Our exercises are designed to boost your energy levels and keep you feeling your best every day.
                    </p>
                </div>
                <div className="form-step-11-3-content__img">
                    <img src="/img/form-step-6.png" alt="img" />
                </div>
            </div>
        </div>
    );
};
UIFormStep11_3.propTypes = {
    setIsCheckboxChecked: PropTypes.func.isRequired,
};
export default UIFormStep11_3;
