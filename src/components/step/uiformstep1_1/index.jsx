import { useEffect } from 'react';
import ImgAve1_1 from '/img/ave-1_1.png';
import PropTypes from 'prop-types';
import ButtonContinue from '../../buttoncontinue';
import './uiformstep1_1.scss';

const UIFormStep1_1 = ({ setIsCheckboxChecked, handleNext, age }) => {
    useEffect(() => {
        setIsCheckboxChecked(true);
    }, [setIsCheckboxChecked]);
    return (
        <>
            <div className="form-step-1_1">
                <div className="form-step-1_1-content">
                    <div className="form-step-1_1-content__title">
                        <h1>
                            Over 1.8 million <br /> women
                        </h1>
                        <p>
                            in <span>their {age.substring(0, 2)}s</span> have already tried <br /> Natural Cleansing
                        </p>

                        <p>
                            It only takes 1 minute to fill out the survey to receive a <span style={{ color: '#55ac60' }}>FREE</span> personalized workout plan to help you reach your goals faster!
                        </p>
                    </div>
                    <div className="form-step-1_1-content__img">
                        <img src={ImgAve1_1} alt="img" loading="lazy" />
                    </div>
                </div>
            </div>
            <ButtonContinue handleNext={handleNext} />
        </>
    );
};

UIFormStep1_1.propTypes = {
    setIsCheckboxChecked: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    age: PropTypes.string.isRequired,
};
export default UIFormStep1_1;
