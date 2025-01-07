import { BiArrowBack } from 'react-icons/bi';
import './header.scss';

const Header = ()=>{
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-content-btn-back">
                    <BiArrowBack className='header-content-btn-back-icons'/>
                </div>
                <div className="header-content-img">
                    <img src="/img/logo-1.png" alt="logo" />
                </div>
            </div>
        </header>
    );
};
export default Header;