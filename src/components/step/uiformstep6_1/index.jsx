import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonContinue from '../../buttoncontinue';
import './uiformstep6_1.scss';

const UIFormStep6_1 = ({ setIsCheckboxChecked, age, questionGoal, handleNext }) => {
    useEffect(() => {
        setIsCheckboxChecked(true);
    }, [setIsCheckboxChecked]);
    return (
        <>
            <div className="form-step-6_1">
                <div className="form-step-6_1-content">
                    <div className="form-step-6_1-content__title">
                        <div className="form-step-2_1-content__icon">
                            <svg
                                className="like-icon"
                                viewBox="0 0 32 32"
                                width="1em"
                                height="1em"
                                data-icon="ScalesIcon"
                                data-test="infoPage__icon"
                            >
                                <path
                                    fillOpacity="0.72"
                                    fillRule="evenodd"
                                    d="m4.248 9.44.9 13.021.002.06c0 2.574 2.184 4.72 4.953 4.72h11.794c2.77 0 4.953-2.146 4.953-4.72 0-.02 0-.04.002-.06l.9-13.021c-.017-2.561-2.194-4.692-4.953-4.692H9.2c-2.759 0-4.936 2.13-4.953 4.692ZM2.5 9.468C2.5 5.863 5.534 3 9.201 3H22.8C26.466 3 29.5 5.863 29.5 9.468c0 .02 0 .04-.002.06l-.9 13.025c-.017 3.59-3.045 6.437-6.701 6.437H10.103c-3.656 0-6.684-2.846-6.701-6.437l-.9-13.024a.871.871 0 0 1-.002-.06Z"
                                    clipRule="evenodd"
                                ></path>
                                <path
                                    fillOpacity="0.72"
                                    fillRule="evenodd"
                                    d="M16.24 6.734a12.291 12.291 0 0 0-8.256 3.117 2.848 2.848 0 0 0-.954 1.942 2.837 2.837 0 0 0 .696 2.05l1.915 2.199.002.001a2.451 2.451 0 0 0 3.102.474c.848-.51 2.114-1.08 3.496-1.08 1.381 0 2.648.57 3.496 1.08a2.451 2.451 0 0 0 3.102-.474l.001-.002 1.913-2.199c.493-.565.745-1.3.696-2.049a2.848 2.848 0 0 0-.954-1.942 12.291 12.291 0 0 0-8.256-3.117Zm-7.37 5.18c.016-.258.135-.505.339-.686a10.448 10.448 0 0 1 7.03-2.65c3.401 0 5.737 1.5 7.031 2.65a.993.993 0 0 1 .093 1.403l-1.912 2.199a.608.608 0 0 1-.76.11h-.002c-.983-.592-2.59-1.347-4.448-1.347-.126 0-.251.004-.375.01l-.947-3.44c-.13-.472-.63-.738-1.116-.593-.487.144-.776.643-.646 1.115l.892 3.243a9.969 9.969 0 0 0-2.257 1.012l-.002.001a.608.608 0 0 1-.76-.111L9.115 12.63a.993.993 0 0 1-.246-.717Z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <h1>We’ve got just the solution!</h1>
                        <p>
                            For women in <span>their {age.substring(0, 2)}s</span>, Natural Cleansing is an excellent choice
                            to <span>{questionGoal}</span> with minimal effort.
                        </p>
                        <p>
                            Just follow our guidance, embrace the journey, and get ready to achieve your dream physique with
                            ease!
                        </p>
                    </div>
                </div>
            </div>
            <ButtonContinue handleNext={handleNext} />
        </>
    );
};
UIFormStep6_1.propTypes = {
    setIsCheckboxChecked: PropTypes.func.isRequired,
    age: PropTypes.string.isRequired,
    questionGoal: PropTypes.string.isRequired,
    handleNext: PropTypes.func.isRequired,
};
export default UIFormStep6_1;
