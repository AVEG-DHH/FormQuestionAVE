import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ImgAge25 from '/img/age-25-40.png';
import ImgAge40 from '/img/age-40-49.png';
import ImgAge50 from '/img/age-50-59.png';
import ImgAge60 from '/img/age-60-69.png';

import './uiformstep1.scss';

// eslint-disable-next-line react/prop-types
const UIFormStep1 = ({ handleNextStep1 }) => {
    return (
        <>
            <div className="form-step-1">
                <h1>WALL PILATES WORKOUT PLAN</h1>
                <h2>BASED ON YOUR AGE</h2>
                <div className="form-step-1__content">
                    <div className="form-step-1__img" onClick={() => handleNextStep1('25-40')}>
                        <img src={ImgAge25} alt="img" loading="lazy" />
                        <div className="form-step-1__btn">
                            Age: 25-40 <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-1__img" onClick={() => handleNextStep1('40-49')}>
                        <img src={ImgAge40} alt="img" loading="lazy" />
                        <div className="form-step-1__btn">
                            Age: 40-49 <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-1__img" onClick={() => handleNextStep1('50-59')}>
                        <img src={ImgAge50} alt="img" loading="lazy" />
                        <div className="form-step-1__btn">
                            Age: 50-59 <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-1__img" onClick={() => handleNextStep1('60-69')}>
                        <img src={ImgAge60} alt="img" loading="lazy" />
                        <div className="form-step-1__btn">
                            Age: 60-69 <ChevronRightIcon />
                        </div>
                    </div>
                </div>
                <div className="form-step-1__footer">
                    <p>
                        By <span> choosing your age and continuing </span> you agree to our{' '}
                        <a href="https://naturalcleansingae.com/policies/terms-of-service" target="_blank">
                            <span>Terms of Service</span>
                        </a>{' '}
                        |{' '}
                        <a href="https://naturalcleansingae.com/policies/privacy-policy" target="_blank">
                            <span>Privacy Policy</span>
                        </a>
                    </p>
                    <p>Please review before continuing</p>
                </div>
            </div>
        </>
    );
};
export default UIFormStep1;
