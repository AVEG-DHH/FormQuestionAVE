import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './uiformstep7_1.scss';

// eslint-disable-next-line react/prop-types
const UIFormStep7_1 = ({ handleNextStep1 }) => {
    return (
        <>
            <div className="form-step-7-1">
                <h1>How would you describe your build?</h1>
                <div className="form-step-7-1__content">
                    <div className="form-step-7-1__img" onClick={() => handleNextStep1('Slim')}>
                        <img src="/img/age-40-49.png" alt="img" />
                        <div className="form-step-7-1__btn">
                            Slim <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-1__img" onClick={() => handleNextStep1('Mid-sized')}>
                        <img src="/img/age-50-59.png" alt="img" />
                        <div className="form-step-7-1__btn">
                            Age: Mid-sized <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-1__img" onClick={() => handleNextStep1('Full-figured')}>
                        <img src="/img/age-60-69.png" alt="img" />
                        <div className="form-step-7-1__btn">
                            Age: 60-69 <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-1__img" onClick={() => handleNextStep1('Extended size')}>
                        <img src="/img/age-70+.png" alt="img" />
                        <div className="form-step-7-1__btn">
                            Age: 70+ <ChevronRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UIFormStep7_1;
