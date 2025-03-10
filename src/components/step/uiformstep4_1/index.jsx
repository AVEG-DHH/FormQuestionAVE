import PropTypes from 'prop-types';
import ButtonContinue from '../../buttoncontinue';
import './uiformstep4_1.scss';

const UIFormStep4_1 = ({ name, handleNext }) => {
    return (
        <>
            <div className="form-step-4_1">
                <div className="form-step-4_1-content">
                    <div className="form-step-4_1-content__title">
                        <div className="form-step-2_1-content__icon">
                            🚀
                        </div>
                        <h1>Hey {name}, keep going!</h1>
                        <p>
                            Complete the survey to get your personalized plan and reach your goals faster! 🚀 Stay on track, and in just a few moments, you'll unlock expert recommendations tailored just for you—bringing you one step closer to your dream results! 💪✨
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
    handleNext: PropTypes.func.isRequired
};
export default UIFormStep4_1;
