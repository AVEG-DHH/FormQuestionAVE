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
                    {/* <div className="form-step-2_1-content__icon">
                        <svg
                            className="like-icon"
                            viewBox="0 0 32 32"
                            width="1em"
                            height="1em"
                            data-icon="LikeOutlinedIcon"
                            data-test="infoPage__icon"
                        >
                            <path
                                fillOpacity="0.72"
                                fillRule="evenodd"
                                d="M16.32 4.848a.72.72 0 0 0-.53.036.622.622 0 0 0-.338.4L14.877 7.5a10.13 10.13 0 0 1-.872 2.23c-.586 1.096-1.472 1.94-2.294 2.648l-1.74 1.5a1.11 1.11 0 0 0-.38.936l.982 11.358c.05.574.529 1.013 1.102 1.013h5.621c3.793 0 6.989-2.639 7.602-6.183l.853-4.934a1.108 1.108 0 0 0-1.09-1.297h-6.266a1.914 1.914 0 0 1-1.888-2.225l.801-4.891c.11-.67.079-1.356-.092-2.013a1.07 1.07 0 0 0-.72-.738l-.175-.057.277-.862-.277.862ZM15.004 3.25a2.534 2.534 0 0 1 1.872-.129l.176.057-.278.863.278-.863a2.884 2.884 0 0 1 1.921 2.01c.234.901.277 1.842.126 2.761l-.801 4.891a.1.1 0 0 0 .098.118h6.266a2.922 2.922 0 0 1 2.877 3.42l-.853 4.934C25.914 25.772 21.923 29 17.296 29h-5.621a2.921 2.921 0 0 1-2.91-2.67l-.982-11.36a2.924 2.924 0 0 1 1.004-2.466l1.74-1.499c.792-.683 1.46-1.345 1.878-2.129.31-.58.55-1.195.716-1.83l.575-2.218a2.436 2.436 0 0 1 1.307-1.578ZM4.868 12.959c.485-.021.9.344.943.828l1.175 13.588A1.496 1.496 0 1 1 4 27.504v-13.64c0-.485.383-.885.868-.905Z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div> */}
                    <h1>
                        <span>You&apos;ll do fantastic!</span>
                    </h1>
                    <p>
                        NaturalCleansing is a gentle and effective fitness <br /> option for all levels.
                    </p>
                    <p>
                        You will <span>get in shape at home</span> by following us and <br /> being ready to go!
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
