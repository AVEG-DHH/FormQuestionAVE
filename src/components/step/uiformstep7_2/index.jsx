import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './uiformstep7_2.scss';

// eslint-disable-next-line react/prop-types
const UIFormStep7_2 = ({ handleNextStep1 }) => {
    return (
        <>
            <div className="form-step-7-2">
                <h1>What’s your dream body?</h1>
                <div className="form-step-7-2__content">
                    <div className="form-step-7-2__img" onClick={() => handleNextStep1('Thin')}>
                        <img src="/img/age-40-49.png" alt="img" />
                        <div className="form-step-7-2__btn">
                            Age: Thin <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-2__img" onClick={() => handleNextStep1('Toned')}>
                        <img src="/img/age-50-59.png" alt="img" />
                        <div className="form-step-7-2__btn">
                            Age: Toned <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-2__img" onClick={() => handleNextStep1('Curvy')}>
                        <img src="/img/age-60-69.png" alt="img" />
                        <div className="form-step-7-2__btn">
                            Age: Curvy <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-7-2__img" onClick={() => handleNextStep1('Average')}>
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
export default UIFormStep7_2;
