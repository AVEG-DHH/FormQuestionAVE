import { BiArrowBack } from 'react-icons/bi';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ currentStep, handleBack }) => {
    return (
        <header className="header">
            <div className="header-content">
                {currentStep > 0 && (
                    <div className="header-content-btn-back" onClick={handleBack}>
                        <BiArrowBack className="header-content-btn-back-icons" />
                    </div>
                )}
                <a href="#" className="header-content-img" rel="noopener noreferrer">
                    <img src="/img/logo-1.png" alt="logo" />
                </a>
            </div>
        </header>
    );
};
Header.propTypes = {
    currentStep: PropTypes.number.isRequired,
    handleBack: PropTypes.func.isRequired,
};

export default Header;
