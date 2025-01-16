// import { useState, useEffect } from 'react';
// import './submitmodal.scss';

// const ModalSubmit = ({ isOpen, onClose }) => {
//     const [showCircle, setShowCircle] = useState(false);
//     const [showCheck, setShowCheck] = useState(false);

//     useEffect(() => {
//         if (isOpen) {
//             setTimeout(() => setShowCircle(true), 500);

//             setTimeout(() => setShowCheck(true), 1500);

//             setTimeout(() => onClose(), 300000);
//         } else {
//             setShowCircle(false);
//             setShowCheck(false);
//         }
//     }, [isOpen, onClose]);

//     if (!isOpen) return null;

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <div className="modal-circle-container">
//                     {showCircle && (
//                         <div className={`modal-circle ${showCheck ? 'circle-completed' : ''}`}>
//                             {showCheck && <div className="modal-check"></div>}
//                         </div>
//                     )}
//                 </div>
//                 <p className="modal-thank-you">Thank you for selecting your age!</p>
//             </div>
//         </div>
//     );
// };

// export default ModalSubmit;
