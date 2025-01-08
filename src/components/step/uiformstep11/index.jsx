import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './UIFormStep11.scss';

// eslint-disable-next-line react/prop-types
const UIFormStep11 = ({ handleNextStep1 }) => {
    return (
        <>
            <div className="form-step-11">
                <h1>Do you struggle with any of the following?</h1>
                <div className="form-step-11__content">
                    <div className="form-step-11__img" onClick={() => handleNextStep1('Sensitive back')}>
                        <img src="/img/age-40-49.png" alt="img" />
                        <div className="form-step-11__btn">
                            Sensitive back <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-11__img" onClick={() => handleNextStep1('Sensitive knees')}>
                        <img src="/img/age-50-59.png" alt="img" />
                        <div className="form-step-11__btn">
                            Age: Sensitive knees <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="form-step-11__img" onClick={() => handleNextStep1('None of the above')}>
                        <img src="/img/age-60-69.png" alt="img" />
                        <div className="form-step-11__btn">
                            None of the above <ChevronRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UIFormStep11;
