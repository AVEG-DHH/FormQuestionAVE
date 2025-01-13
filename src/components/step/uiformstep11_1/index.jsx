import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './uiformstep11_1.scss';

const UIFormStep11_1 = ({ target, goal, setIsCheckboxChecked }) => {
    useEffect(() => {
        setIsCheckboxChecked(true);
    }, [setIsCheckboxChecked]);
    return (
        <div className="form-step-11-1">
            <div className="form-step-11-1-content">
                <div className="form-step-11-1-content__title">
                    <div className="form-step-2_1-content__icon">
                        <svg
                            className="like-icon"
                            viewBox="0 0 32 32"
                            width="1em"
                            height="1em"
                            data-icon="DoubleCheckIcon"
                            data-test="infoPage__icon"
                        >
                            <path
                                fillRule="evenodd"
                                d="M21.589 8.296a1.2 1.2 0 0 1 .115 1.693L9.132 24.39a1.2 1.2 0 0 1-1.807 0l-5.029-5.76a1.2 1.2 0 0 1 1.808-1.578l4.125 4.724L19.896 8.411a1.2 1.2 0 0 1 1.693-.115ZM29.628 8.431a1.2 1.2 0 0 1 .041 1.697l-13.715 14.4a1.2 1.2 0 0 1-1.823-.101l-.686-.9a1.2 1.2 0 0 1 1.72-1.651L27.932 8.472a1.2 1.2 0 0 1 1.697-.04Z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <h1>We got you!</h1>
                    <p>
                        Get ready to explore a variety of <span>{target.replaceAll(',', ', ')}</span> exercises.
                        Transform your strength and achieve <span>{goal}</span> effortlessly!
                    </p>
                </div>
            </div>
        </div>
    );
};

UIFormStep11_1.propTypes = {
    setIsCheckboxChecked: PropTypes.func.isRequired,
    goal: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
};
export default UIFormStep11_1;
