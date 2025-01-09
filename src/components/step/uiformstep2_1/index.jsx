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
                    <h1>
                        <span>Natural Cleansing</span>
                    </h1>
                    <p>is the perfect choice for workouts at any fitness level!</p>
                    <p>
                        Just follow our guidance, embrace the journey, <br /> and get ready to achieve your dream
                        physique <br /> with ease!
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
