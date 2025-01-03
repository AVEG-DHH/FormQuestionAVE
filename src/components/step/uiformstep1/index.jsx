import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './uiformstep1.scss';
// eslint-disable-next-line react/prop-types
const UIFormStep1 = ({ handleNextStep1 }) => {
    return (
        <>
            <div className="form-step-1">
                <h1>WALL PILATES WORKOUT PLAN</h1>
                <h2>BASED ON YOUR AGE</h2>
                <div className="form-step-1__content">
                    <div className="form-step-1__img" onClick={() => handleNextStep1('18-29')}>
                        <img src="/img/age-40-49.png" alt="img" />
                        <div className="form-step-1__btn">
                            Age: 40-49 <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-1__img" onClick={() => handleNextStep1('30-39')}>
                        <img src="/img/age-50-59.png" alt="img" />
                        <div className="form-step-1__btn">
                            Age: 50-59 <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-1__img" onClick={() => handleNextStep1('40-49')}>
                        <img src="/img/age-60-69.png" alt="img" />
                        <div className="form-step-1__btn">
                            Age: 60-69 <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-1__img" onClick={() => handleNextStep1('50+')}>
                        <img src="/img/age-70+.png" alt="img" />
                        <div className="form-step-1__btn">
                            Age: 70+ <ChevronRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UIFormStep1;
