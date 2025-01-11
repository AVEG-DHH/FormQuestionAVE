import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Thay ChevronRightIcon bằng icon tick
import PropTypes from 'prop-types';
import { useState } from 'react';
import './uiformstep7_2.scss';

const UIFormStep7_2 = ({ handleNextStep7_2 }) => {
    const [selected, setSelected] = useState('');

    const imageMapping = {
        Thin: '/img/ave-7_2-Thin.png',
        Toned: '/img/ave-7_2-Toned.png',
        Curvy: '/img/ave-7_1-Mid-Size.png',
        Average: '/img/ave-7_2-Thin.png',
    };

    const handleSelect = (value) => {
        setSelected(value);
        handleNextStep7_2(value);
    };

    return (
        <div className="form-step-7-2">
            <h1>What’s your dream body?</h1>
            <div className="form-step-7-2__content">
                {Object.keys(imageMapping).map((option) => (
                    <div
                        key={option}
                        className={`form-step-7-2__img ${selected === option ? 'selected' : ''}`}
                        onClick={() => handleSelect(option)}
                    >
                        <img src={imageMapping[option]} alt={`${option} img`} />
                        <div className="form-step-7-2__btn">
                            {option}
                            {selected === option ? <CheckCircleIcon /> : <div className="circle" />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

UIFormStep7_2.propTypes = {
    handleNextStep7_2: PropTypes.func.isRequired,
};

export default UIFormStep7_2;
