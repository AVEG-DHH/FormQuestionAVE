import { useEffect, useRef } from 'react';
import './style.scss';

const HightLightYourPlan = () => {
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
                window.parent.postMessage({ bodyHeightHighlightYourPlan: newHeight }, '*');
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

    return (
        <>
            <div className="block-highlight-your-plan" ref={bodyRef}>
                <div className="block-highlight-your-plan-left">
                    <div className="block-highlight-your-plan-left-title">Highlights of your plan</div>
                    <div className="block-highlight-your-plan-left-desc">
                        <div className="block-highlight-your-plan-left-desc-parent">
                            <div className="block-highlight-your-plan-left-desc-parent-img">
                                <img src="/icons/highlight-your-plan-icons-1.png" alt="img" />
                            </div>
                            <div className="block-highlight-your-plan-left-desc-parent-content">
                                <strong>Easy and gentle workouts</strong>
                                <p>to slim down and tone up easily at home</p>
                            </div>
                        </div>
                        <div className="block-highlight-your-plan-left-desc-parent">
                            <div className="block-highlight-your-plan-left-desc-parent-img">
                                <img src="/icons/highlight-your-plan-icons-2.png" alt="img" />
                            </div>
                            <div className="block-highlight-your-plan-left-desc-parent-content">
                                <strong>10-20 min routines</strong>
                                <p>to increase strength and relieve back, neck and shoulder tension</p>
                            </div>
                        </div>
                        <div className="block-highlight-your-plan-left-desc-parent">
                            <div className="block-highlight-your-plan-left-desc-parent-img">
                                <img src="/icons/highlight-your-plan-icons-3.png" alt="img" />
                            </div>
                            <div className="block-highlight-your-plan-left-desc-parent-content">
                                <strong>Beginner-friendly exercises</strong>
                                <p>to improve mobility and flexibility</p>
                            </div>
                        </div>
                        <div className="block-highlight-your-plan-left-desc-parent">
                            <div className="block-highlight-your-plan-left-desc-parent-img">
                                <img src="/icons/highlight-your-plan-icons-4.png" alt="img" />
                            </div>
                            <div className="block-highlight-your-plan-left-desc-parent-content">
                                <strong>Personalized meal plan</strong>
                                <p>with over 1000 tasty recipes for losing weight</p>
                            </div>
                        </div>
                        <div className="block-highlight-your-plan-left-desc-parent">
                            <div className="block-highlight-your-plan-left-desc-parent-img">
                                <img src="/icons/highlight-your-plan-icons-5.png" alt="img" />
                            </div>
                            <div className="block-highlight-your-plan-left-desc-parent-content">
                                <strong>Expert tips and hacks</strong>
                                <p>to improve your lifestyle and keep the weight off</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-highlight-your-plan-right">
                    <div className="block-highlight-your-plan-right-img">
                        <img src="/gif/HighLight_01.gif" alt="img" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HightLightYourPlan;
