import PropTypes from 'prop-types';
import ButtonContinue from '../../buttoncontinue';
import './uiformstep4_1.scss';
import StartIcon from '../../../../public/icons/star.jsx';

const UIFormStep4_1 = ({ name, handleNext }) => {
    return (
        <>
            <div className="form-step-4_1">
                <div className="form-step-4_1-content">
                    <div className="form-step-4_1-content__title">
                        <div className="form-step-2_1-content__icon">
                            <div className="like-icon">
                                <StartIcon />
                            </div>
                        </div>

                        <h1>Hey {name}, keep going!</h1>
                        <p>Complete the survey to get your personalized plan and reach your goals faster!</p>
                        <p>
                            Each suggestion is designed to fit your lifestyle and keep you motivated every step of the
                            way.
                        </p>
                    </div>
                </div>
            </div>
            <ButtonContinue handleNext={handleNext} />
        </>
    );
};
UIFormStep4_1.propTypes = {
    name: PropTypes.string.isRequired,
    handleNext: PropTypes.func.isRequired,
};
export default UIFormStep4_1;
