import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Thay ChevronRightIcon bằng icon tick
import PropTypes from 'prop-types';
import { useState } from 'react';
import './uiformstep7_1.scss';

const UIFormStep7_1 = ({ handleNextStep7_1 }) => {
    const [selected, setSelected] = useState('');

    const imageMapping = {
        'Slim': '/img/ave-7_1-Slim.png',
        'Mid-sized': '/img/ave-7_1-Mid-Size.png',
        'Full-figured': '/img/ave-7_1-Full-Figured.png',
        'Extended size': '/img/ave-7_1-Extended.png',
    };

    const handleSelect = (value) => {
        setSelected(value);
        handleNextStep7_1(value);
    };

    return (
        <div className="form-step-7-1">
            <h1>How would you describe your build?</h1>
            <div className="form-step-7-1__content">
                {Object.keys(imageMapping).map((option) => (
                    <div
                        key={option}
                        className={`form-step-7-1__img ${selected === option ? 'selected' : ''}`}
                        onClick={() => handleSelect(option)}
                    >
                        <img src={imageMapping[option]} alt={`${option} img`} />
                        <div className="form-step-7-1__btn">
                            {option}
                            {selected === option ? <CheckCircleIcon /> : <div className="circle" />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

UIFormStep7_1.propTypes = {
    handleNextStep7_1: PropTypes.func.isRequired,
};

export default UIFormStep7_1;
