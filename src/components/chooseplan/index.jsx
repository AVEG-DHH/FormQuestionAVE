import { useState } from 'react';
import { TbTargetArrow } from 'react-icons/tb';
import { LiaWeightSolid } from 'react-icons/lia';
import './style.scss';

const ChoosePlan = () => {
    const [selectedPlan, setSelectedPlan] = useState('4-Week Plan');

    const plans = [
        {
            name: '1-Week Trial',
            originalPrice: '₫70,000',
            highlightedPrice: '₫10,000',
            perDay: ' per day',
            mostPopular: false,
        },
        {
            name: '4-Week Plan',
            originalPrice: '₫224,000',
            highlightedPrice: '₫8,000',
            perDay: ' per day',
            mostPopular: true,
        },
        {
            name: '12-Week Plan',
            originalPrice: '₫504,000',
            highlightedPrice: '₫6,000',
            perDay: ' per day',
            mostPopular: false,
        },
    ];

    const handlePlanSelection = (planName) => {
        setSelectedPlan(planName);
    };

    const handleCheckout = () => {
        const selectedPlanData = plans.find((plan) => plan.name === selectedPlan);
        if (selectedPlanData) {
            const iframe = document.getElementById('checkout-iframe');
            iframe.contentWindow.postMessage({ action: 'redirect', checkoutLink: selectedPlanData.checkoutLink }, '*');
        }
    };

    return (
        <div className="choose-plan">
            <h1>Choose Your Plan</h1>
            <div className="goals-container">
                <div className="goal-section">
                    <div className="goal-icon">
                        <TbTargetArrow />
                    </div>
                    <div className="goal-text">
                        <span>Goal</span>
                        <strong>Lose weight</strong>
                    </div>
                </div>
                <div className="divider" />
                <div className="target-section">
                    <div className="target-icon">
                        <LiaWeightSolid />
                    </div>
                    <div className="target-text">
                        <span>Target weight</span>
                        <strong>60 kg</strong>
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
                            <div className="plan-header-parent">
                                <div className="plan-header">
                                    <h3>{plan.name}</h3>

                                    {plan.label && <div className="plan-label">{plan.label}</div>}
                                    <div className="original-price">{plan.originalPrice}</div>
                                </div>
                                <div className={`status-circle ${selectedPlan === plan.name ? 'active' : ''}`}>
                                    {selectedPlan === plan.name && <span className="tick">✔</span>}
                                </div>
                            </div>
                            <div className="highlighted-section">
                                <span className="highlighted-price">{plan.highlightedPrice}</span>
                                <span className="per-day">{plan.perDay}</span>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div className="terms">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                    I agree to the <a href="#">Terms and Conditions</a>, <a href="#">Privacy policy</a>,{' '}
                    <a href="#">Subscription policy</a>, and the <a href="#">Refund and Cancellation policy</a>.
                </label>
            </div>
            <button className="get-plan-button" onClick={handleCheckout}>
                GET MY PLAN
            </button>
            <p className="disclaimer">
                By clicking START MY TRIAL, I agree that the plan I have selected will automatically renew until I
                cancel, BetterMe will automatically charge my payment method ₫224,000 every 4-week. I can cancel online
                by visiting the subscription page in <a href="#">my account</a> on the website or in the app to avoid
                being charged for the next billing cycle.
            </p>
        </div>
    );
};

export default ChoosePlan;
