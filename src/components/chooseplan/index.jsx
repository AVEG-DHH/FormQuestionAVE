import { useState, useRef, useEffect } from 'react';
import { TbTargetArrow } from 'react-icons/tb';
import { LiaWeightSolid } from 'react-icons/lia';
import './style.scss';

const ChoosePlan = () => {
    const [selectedPlan, setSelectedPlan] = useState('4-Week Plan');
    const [isAgreed, setIsAgreed] = useState(false);
    const targetWeight = localStorage.getItem('targetWeight') ? parseInt(localStorage.getItem('targetWeight'), 10) : 0;
    const goal = localStorage.getItem('goal') ? localStorage.getItem('goal') : '';
    const bodyRef = useRef(null); // Ref cho body
    const bodyHeightRef = useRef(0); // Ref lưu chiều cao trước đó
    useEffect(() => {
        const updateBodyHeight = () => {
            if (bodyRef.current) {
                const newHeight = bodyRef.current.offsetHeight;

                // Chỉ cập nhật ref nếu chiều cao thực sự thay đổi
                if (newHeight !== bodyHeightRef.current) {
                    bodyHeightRef.current = newHeight; // Lưu chiều cao mới vào ref
                }

                window.parent.postMessage({ bodyHeight: newHeight }, '*');
            }
        };

        // Gọi hàm để cập nhật chiều cao ban đầu
        updateBodyHeight();

        // Lắng nghe sự kiện resize
        window.addEventListener('resize', updateBodyHeight);

        return () => {
            window.removeEventListener('resize', updateBodyHeight);
        };
    }, []);
    const plans = [
        {
            name: '1-Week Trial',
            label: '7-Day Free Workout + 7-Day Free Protein Meal Plan (PDF)',
            originalPrice: '$10',
            highlightedPrice: '$1,4',
            perDay: ' per day',
            mostPopular: false,
            planDetail: [],
        },
        {
            name: '4-Week Plan',
            label: '30-Day Free Workout + 30-Day Free Protein Meal Plan (PDF)',
            originalPrice: '$30',
            highlightedPrice: '$1',
            perDay: ' per day',
            mostPopular: true,
            planDetail: ['E-Book', 'Video', '24/7 Support'],
        },
        {
            name: '12-Week Plan',
            label: '90-Day Free Workout + 90-Day Free Protein Meal Plan (PDF)',
            originalPrice: '$50',
            highlightedPrice: '$0,6',
            perDay: ' per day',
            mostPopular: false,
            planDetail: ['E-Book', 'Video', '24/7 Support', 'Free access to the 90-day community'],
        },
    ];

    const handlePlanSelection = (planName) => {
        setSelectedPlan(planName);
    };

    const handleCheckboxChange = (event) => {
        setIsAgreed(event.target.checked);
    };

    const handleGetMyPlan = () => {
        console.log('Get my plan: ', selectedPlan);
        // Gửi giá trị selectedPlan đến parent window
        window.parent.postMessage({ selectedPlan, goal }, '*');
    };

    return (
        <div className="choose-plan" ref={bodyRef}>
            <h1>Choose Your Plan</h1>
            <div className="goals-container">
                <div className="goal-section">
                    <div className="goal-icon">
                        <TbTargetArrow />
                    </div>
                    <div className="goal-text">
                        <span>Goal</span>
                        <strong>{goal}</strong>
                    </div>
                </div>
                <div className="divider" />
                <div className="target-section">
                    <div className="target-icon">
                        <LiaWeightSolid />
                    </div>
                    <div className="target-text">
                        <span>Target Weight</span>
                        <strong>{targetWeight} kg</strong>
                    </div>
                </div>
            </div>
            <div className="plans">
                {plans.map((plan) => (
                    <>
                        <div
                            key={plan.name}
                            className={`plan-card ${selectedPlan === plan.name ? 'selected' : ''}`}
                            onClick={() => handlePlanSelection(plan.name)}
                        >
                            {plan.mostPopular && <div className="block-plans-title">MOST POPULAR</div>}
                            <div className="plan-header-parent-first-parent">
                                <div className="plan-header-parent-first">
                                    <div className="plan-header-parent">
                                        <div className="plan-header">
                                            <h3>{plan.name}</h3>

                                            {plan.label && <div className="plan-label plan-label-sp">{plan.label}</div>}
                                            <div className="original-price">{plan.originalPrice}</div>
                                        </div>
                                        <div className={`status-circle ${selectedPlan === plan.name ? 'active' : ''}`}>
                                            {selectedPlan === plan.name && <span className="tick">✔</span>}
                                        </div>
                                    </div>
                                    <div className="plan-custom-list">
                                        {plan.planDetail.map((detail, index) => (
                                            <div className="plan-label plan-custom-item" key={index}>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="highlighted-section">
                                    <span className="highlighted-price">{plan.highlightedPrice}</span>
                                    <span className="per-day">{plan.perDay}</span>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div className="terms">
                <input type="checkbox" id="terms" checked={isAgreed} onChange={handleCheckboxChange} />
                <label htmlFor="terms">
                    I agree to the{' '}
                    <a href="https://naturalcleansingae.com/policies/terms-of-service">Terms and Conditions</a>,{' '}
                    <a href="https://naturalcleansingae.com/policies/privacy-policy">Privacy policy</a>, and the{' '}
                    <a href="https://naturalcleansingae.com/policies/refund-policy">Refund and Cancellation policy</a>.
                </label>
            </div>
            <button
                className={`get-plan-button ${isAgreed ? 'enabled' : 'disabled'}`}
                disabled={!isAgreed}
                onClick={handleGetMyPlan}
            >
                GET MY PLAN
            </button>
            <p className="disclaimer">
                By clicking GET MY PLAN, I agree that the plan I have selected will automatically renew until I cancel,
                Natural Cleansing will automatically charge my payment method $30 every 4-week. I can cancel online by
                visiting the subscription page in{' '}
                <a href="https://naturalcleansingae.com/policies/refund-policy">Refund and Cancellation policy</a> on
                the website to avoid being charged for the next billing cycle.
            </p>
        </div>
    );
};

export default ChoosePlan;
