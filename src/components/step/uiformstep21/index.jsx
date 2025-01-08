import './uiformstep21.scss';
import { useState } from 'react';

const UIFormStep21 = () => {
    const [nameValue, setNameValue] = useState('');

    return (
        <div className="form-step-21">
            <h1>What’s your name?</h1>
            <div className="form-step-21__container">
                <div className="form-step-21__input">
                    <div className="input-wrapper">
                        <input value={nameValue} placeholder="Name" onChange={(e) => setNameValue(e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UIFormStep21;
