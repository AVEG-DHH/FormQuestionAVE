import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PropTypes from 'prop-types';
import './uiformstep7_2.scss';

const UIFormStep7_2 = ({ handleNextStep7_2 }) => {
    return (
        <>
            <div className="form-step-7-2">
                <h1>What’s your dream body?</h1>
                <div className="form-step-7-2__content">
                    <div className="form-step-7-2__img" onClick={() => handleNextStep7_2('Thin')}>
                        <img src="/img/age-40-49.png" alt="img" />
                        <div className="form-step-7-2__btn">
                            Thin <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-2__img" onClick={() => handleNextStep7_2('Toned')}>
                        <img src="/img/age-50-59.png" alt="img" />
                        <div className="form-step-7-2__btn">
                            Toned <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-2__img" onClick={() => handleNextStep7_2('Curvy')}>
                        <img src="/img/age-60-69.png" alt="img" />
                        <div className="form-step-7-2__btn">
                            Curvy <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-2__img" onClick={() => handleNextStep7_2('Average')}>
                        <img src="/img/age-70+.png" alt="img" />
                        <div className="form-step-7-2__btn">
                            Average <ChevronRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
UIFormStep7_2.propTypes = {
    handleNextStep7_2: PropTypes.func.isRequired,
};
export default UIFormStep7_2;
