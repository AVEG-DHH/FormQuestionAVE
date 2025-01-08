import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PropTypes from 'prop-types';
import './uiformstep7_1.scss';

const UIFormStep7_1 = ({ handleNextStep7_1 }) => {
    return (
        <>
            <div className="form-step-7-1">
                <h1>How would you describe your build?</h1>
                <div className="form-step-7-1__content">
                    <div className="form-step-7-1__img" onClick={() => handleNextStep7_1('Slim')}>
                        <img src="/img/age-40-49.png" alt="img" />
                        <div className="form-step-7-1__btn">
                            Slim <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-1__img" onClick={() => handleNextStep7_1('Mid-sized')}>
                        <img src="/img/age-50-59.png" alt="img" />
                        <div className="form-step-7-1__btn">
                            Mid-sized <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-1__img" onClick={() => handleNextStep7_1('Full-figured')}>
                        <img src="/img/age-60-69.png" alt="img" />
                        <div className="form-step-7-1__btn">
                            Full-figured <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-1__img" onClick={() => handleNextStep7_1('Extended size')}>
                        <img src="/img/age-70+.png" alt="img" />
                        <div className="form-step-7-1__btn">
                            Extended size <ChevronRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
UIFormStep7_1.propTypes = {
    handleNextStep7_1: PropTypes.func.isRequired,
};
export default UIFormStep7_1;
