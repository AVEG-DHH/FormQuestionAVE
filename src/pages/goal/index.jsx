import { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './style.scss';
import { Divider } from '@mui/material';

const Goal = () => {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="block-goal">
                <h1>Your Chair Yoga Plan is ready!</h1>
                <div className="block-goal-container">
                    <div className="block-goal-container__header">
                        <div className="block-goal-container__header-title">Now</div>
                        <div className="block-goal-container__header-separation">
                            <Divider
                                orientation="vertical"
                                style={{
                                    height: '100%',
                                    width: '1px',
                                    backgroundColor: 'lightgray',
                                }}
                            />
                        </div>
                        <div className="block-goal-container__header-title goal-color">Your Goal</div>
                    </div>
                    <div className="block-goal-container__body">
                        <div className="block-goal-container__header__body-img">
                            <img src="/img/goal-1.png" alt="img" />
                        </div>
                        <div className="block-goal-container__header__body-icons">
                            {[...Array(3)].map((_, index) => (
                                <FaChevronRight
                                    key={index}
                                    className={`icon ${visibleCount > index ? 'visible' : 'hidden'}`}
                                />
                            ))}
                        </div>
                        <div className="block-goal-container__header__body-img">
                            <img src="/img/goal-2.png" alt="img" />
                        </div>
                    </div>
                    <div className="block-goal-container__footer">
                        <div className="block-goal-container__footer__description">
                            <div className="block-goal-container__footer__description-block">
                                <div className="block-goal-container__footer__description-block-detail">
                                    <div className="block-goal-container__footer__description-block-detail__bodyfat">
                                        <div className="block-goal-container__footer__description-block-detail__bodyfat-title">
                                            Body Fat
                                        </div>
                                        <div className="block-goal-container__footer__description-block-detail__bodyfat-value">
                                            High
                                        </div>
                                    </div>
                                    <Divider
                                        orientation="horizontal"
                                        style={{
                                            height: '100',
                                            width: '100%',
                                            backgroundColor: 'lightgray',
                                        }}
                                    />
                                    <div className="block-goal-container__footer__description-block-detail__bodyfat">
                                        <div className="block-goal-container__footer__description-block-detail__bodyfat-title">
                                            Chair yoga level
                                        </div>
                                        <div className="block-goal-container__footer__description-block-detail__bodyfat-value">
                                            Beginner
                                        </div>
                                        <div className="progress-bar">
                                            {Array.from({ length: 3 }).map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`progress-bar__segment ${index < 1 ? 'active' : ''}`}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="block-goal-container__footer__description-block-separation">
                                    <Divider
                                        orientation="vertical"
                                        style={{
                                            height: '100%',
                                            width: '1px',
                                            backgroundColor: 'lightgray',
                                        }}
                                    />
                                </div>
                                <div className="block-goal-container__footer__description-block-detail">
                                    <div className="block-goal-container__footer__description-block-detail__bodyfat">
                                        <div className="block-goal-container__footer__description-block-detail__bodyfat-title">
                                            Body Fat
                                        </div>
                                        <div className="block-goal-container__footer__description-block-detail__bodyfat-value">
                                            Normal
                                        </div>
                                    </div>
                                    <Divider
                                        orientation="horizontal"
                                        style={{
                                            height: '100',
                                            width: '100%',
                                            backgroundColor: 'lightgray',
                                        }}
                                    />
                                    <div className="block-goal-container__footer__description-block-detail__bodyfat">
                                        <div className="block-goal-container__footer__description-block-detail__bodyfat-title">
                                            Chair yoga level
                                        </div>
                                        <div className="block-goal-container__footer__description-block-detail__bodyfat-value">
                                            Advanced
                                        </div>
                                        <div className="progress-bar">
                                            {Array.from({ length: 3 }).map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`progress-bar__segment ${index < 3 ? 'active' : ''}`}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Goal;
