import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './uiformstep2_1.scss';

const UIFormStep2_1 = ({ setIsCheckboxChecked }) => {
    useEffect(() => {
        setIsCheckboxChecked(true);
    }, [setIsCheckboxChecked]);
    return (
        <div className="form-step-2_1">
            <div className="form-step-2_1-content">
                <div className="form-step-2_1-content__title">
                    <h1><span>Natural Cleansing</span> is the perfect choice for workouts at any fitness level!</h1>
                    <p>
                        Just follow our guidance, embrace the journey, and get ready to achieve your dream physique with
                        ease!
                    </p>
                </div>
                {/* <div className="form-step-2_1-content__img">
                    <img src="/img/form-step-6.png" alt="img" />
                </div> */}
            </div>
        </div>
    );
};
UIFormStep2_1.propTypes = {
    setIsCheckboxChecked: PropTypes.func.isRequired,
};
export default UIFormStep2_1;
