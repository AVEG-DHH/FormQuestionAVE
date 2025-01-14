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
                        <span>You&apos;ll do fantastic!</span>
                    </h1>
                    <p>
                        NaturalCleansing is a gentle and effective fitness <br className="responsive-br" /> option for
                        all levels.
                    </p>
                    <p>
                        You will <span>get in shape at home</span> by following us and <br className="responsive-br" />{' '}
                        being ready to go!
                    </p>
                </div>
                <div className="form-step-2_1-content__img">
                    <img src="/img/ave-02.png" alt="img" />
                </div>
            </div>
        </div>
    );
};

UIFormStep2_1.propTypes = {
    setIsCheckboxChecked: PropTypes.func.isRequired,
};

export default UIFormStep2_1;
