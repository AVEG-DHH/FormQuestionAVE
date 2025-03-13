import { useEffect } from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import './uiformstep18_3.scss';

const convertToMeters = (feet, inches = 0) => {
    const meters = feet * 0.3048 + inches * 0.0254;
    return parseFloat(meters.toFixed(2));
};

const UIFormStep18_3 = ({
    height,
    weight,
    setIsCheckboxChecked,
    questionExercise,
    goal,
    handleNext,
    isCheckboxChecked,
}) => {
    let heightNew = 0;
    if (height.includes('cm')) {
        heightNew = parseInt(height.split(' ')[0], 10) / 100;
    } else {
        const partsHeight = height.split(' ');
        const feet = parseInt(partsHeight[0]);
        const inches = parseInt(partsHeight[2]);

        heightNew = convertToMeters(feet, inches);
    }

    let weightNew = 0;

    if (weight.includes('kg')) {
        weightNew = parseFloat(weight.split(' ')[0], 10);
    } else {
        weightNew = parseFloat(weight.split(' ')[0], 10) * 0.45359237;
    }
    const bmi = weightNew / (heightNew * heightNew);
    const viewBMI = Math.round(parseFloat(bmi) * 10) / 10;
    let statusBMI = '';
    switch (true) {
        case bmi < 18.5:
            statusBMI = `
                <div class="form-step-18-3_body_desc under-weight ">
                    <div class="form-step-18-3_body_desc-header">Risks of underweight BMI:</div>
                    <div class="form-step-18-3_body_desc-container">
                        Weakened immune system, nutrient deficiencies (e.g., iron, calcium), brittle bones, hair loss, chronic fatigue, increased risk of infections, and potential fertility issues.
                    </div>
                </div>`;
            break;

        case bmi >= 18.5 && bmi <= 24.9:
            statusBMI = `
                <div class="form-step-18-3_body_desc normal-weight">
                    <div class="form-step-18-3_body_desc-header">Benefits of healthy BMI:</div>
                    <div class="form-step-18-3_body_desc-container">
                    Lower risk of chronic diseases (e.g., heart disease, diabetes), improved energy levels, better hormonal balance, and reduced strain on joints and muscles.
                    </div>
                </div>`;
            break;

        case bmi >= 25 && bmi <= 29.9:
            statusBMI = `
                <div class="form-step-18-3_body_desc over-weight">
                    <div class="form-step-18-3_body_desc-header">Risks of overweight BMI:</div>
                    <div class="form-step-18-3_body_desc-container">
                    High blood pressure, increased cholesterol levels, risk of developing prediabetes, sleep apnea, chronic joint pain, reduced physical stamina, and higher likelihood of heart disease.
                    </div>
                </div>`;
            break;

        case bmi >= 30:
            statusBMI = `
                <div class="form-step-18-3_body_desc obese-weight">
                    <div class="form-step-18-3_body_desc-header">Risks of obesity BMI:</div>
                    <div class="form-step-18-3_body_desc-container">
                    Severe risk of type 2 diabetes, heart attack, stroke, high blood pressure, fatty liver disease, sleep disorders, chronic joint pain, and increased risk of certain cancers (e.g., breast, colon).
                    </div>
                </div>`;
            break;

        default:
            statusBMI = `
                <div class="form-step-18-3_body_desc">
                    <div class="form-step-18-3_body_desc-header">Invalid BMI value:</div>
                    <div class="form-step-18-3_body_desc-container">
                    Please check your input and try again.
                    </div>
                </div>`;
            break;
    }
    useEffect(() => {
        setIsCheckboxChecked(true);
    }, [setIsCheckboxChecked]);
    return (
        <>
            <div className="form-step-18-3">
                <h1>Here’s your wellness profile</h1>
                <div className="form-step-18-3_body">
                    <h2>Body Mass Index (BMI) - {viewBMI}</h2>
                    <div id="bmi-slider-container">
                        <div id="bmi-slider">
                            <input type="range" id="bmi-range" min="15" max="40" step="0.01" value={bmi} disabled />
                            <div id="bmi-labels">
                                <span>15</span>
                                <span>18.5</span>
                                <span>25</span>
                                <span>30</span>
                                <span>40</span>
                            </div>
                            <div id="bmi-categories">
                                <span>Underweight</span>
                                <span>Normal</span>
                                <span>Overweight</span>
                                <span>Obese</span>
                            </div>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: statusBMI }} />
                    <div className="form-step-18-3_footer">
                        <div className="form-step-18-3_footer-text">
                            <div className="form-step-18-3_footer-text_block">
                                <div className="form-step-18-3_footer-text_block-icons">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="40" height="40" rx="20" fill="#F6F7F9"></rect>
                                        <circle
                                            cx="20"
                                            cy="12.5"
                                            r="5.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        ></circle>
                                        <ellipse
                                            cx="20"
                                            cy="27.5"
                                            rx="10"
                                            ry="5.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        ></ellipse>
                                    </svg>
                                </div>
                                <div className="form-step-18-3_footer-text_block-info">
                                    <div className="form-step-18-3_footer-text_block-info-title">Body type</div>
                                    <div className="form-step-18-3_footer-text_block-info-desc">
                                        {bmi < 18.5 ? (
                                            <p>Ectomorph</p>
                                        ) : bmi > 29.9 ? (
                                            <p>Endomorph</p>
                                        ) : (
                                            <p>Mesomorph</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="form-step-18-3_footer-text_block">
                                <div className="form-step-18-3_footer-text_block-icons">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="40" height="40" rx="20" fill="#F6F7F9"></rect>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.4468 8.24762C19.7394 7.11306 21.0829 6.6297 22.0313 7.31781L29.7594 12.9251C30.4089 13.3964 30.8684 14.0844 31.0548 14.8649C31.456 16.5445 30.8739 18.3066 29.551 19.4166L14.7969 31.7967C13.186 33.1485 10.9144 33.3833 9.06101 32.3896C8.17369 31.9138 7.77496 30.8552 8.12795 29.9123L13.8154 14.7199C14.2004 13.6915 15.1086 12.9493 16.1931 12.7768L18.0945 12.4745C18.2605 12.4481 18.395 12.3258 18.4369 12.1631L19.4468 8.24762ZM21.2194 9.11807L20.3095 12.646C20.0753 13.5543 19.3246 14.237 18.3983 14.3843L16.4969 14.6867C16.0999 14.7499 15.7675 15.0215 15.6266 15.398L9.93908 30.5903C9.92556 30.6264 9.94084 30.667 9.97483 30.6852C11.1313 31.3052 12.5487 31.1587 13.5539 30.3153L28.308 17.9352C29.0696 17.296 29.4049 16.2814 29.1738 15.3143C29.0947 14.9828 28.8995 14.6905 28.6236 14.4904L21.2194 9.11807Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M21.0037 30.4971C21.0037 29.963 21.4366 29.5301 21.9707 29.5301H29.8387C30.3727 29.5301 30.8056 29.963 30.8056 30.4971C30.8056 31.0311 30.3727 31.464 29.8387 31.464H21.9707C21.4366 31.464 21.0037 31.0311 21.0037 30.4971Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M25.4296 25.8699C24.8956 25.8699 24.4627 26.3029 24.4627 26.8369C24.4627 27.3709 24.8956 27.8038 25.4296 27.8038H29.2954C29.8294 27.8038 30.2623 27.3709 30.2623 26.8369C30.2623 26.3029 29.8294 25.8699 29.2954 25.8699H25.4296Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="form-step-18-3_footer-text_block-info">
                                    <div className="form-step-18-3_footer-text_block-info-title">Lifestyle</div>
                                    <div className="form-step-18-3_footer-text_block-info-desc">
                                        {questionExercise[0] === '2' ? 'Sedentary' : 'Active'}
                                    </div>
                                </div>
                            </div>
                            <div className="form-step-18-3_footer-text_block">
                                <div className="form-step-18-3_footer-text_block-icons">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="40" height="40" rx="20" fill="#F6F7F9"></rect>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M21.4572 8.86424C21.5382 8.85478 21.62 8.85478 21.701 8.86424C21.8015 8.87597 21.9512 8.92233 22.2495 9.15901C22.5632 9.4079 22.9395 9.78221 23.5149 10.3576L29.6424 16.4851C30.2178 17.0605 30.5921 17.4368 30.841 17.7505C31.0777 18.0488 31.124 18.1985 31.1358 18.299C31.1452 18.38 31.1452 18.4618 31.1358 18.5428C31.124 18.6433 31.0777 18.793 30.841 19.0913C30.5921 19.405 30.2178 19.7813 29.6424 20.3567C29.067 20.9321 28.6907 21.3064 28.377 21.5553C28.0787 21.792 27.929 21.8383 27.8285 21.85C27.7475 21.8595 27.6657 21.8595 27.5847 21.85C27.4842 21.8383 27.3345 21.792 27.0362 21.5553C26.7225 21.3064 26.3462 20.9321 25.7708 20.3567L19.6433 14.2292C19.0679 13.6538 18.6936 13.2775 18.4447 12.9638C18.208 12.6655 18.1617 12.5158 18.15 12.4153C18.1405 12.3343 18.1405 12.2525 18.15 12.1715C18.1617 12.071 18.208 11.9213 18.4447 11.623C18.6936 11.3093 19.0679 10.933 19.6433 10.3576C20.2187 9.78221 20.595 9.4079 20.9087 9.15901C21.207 8.92233 21.3567 8.87597 21.4572 8.86424ZM21.9165 7.01964C21.6923 6.99345 21.4659 6.99345 21.2417 7.01964C20.6586 7.08774 20.1867 7.36117 19.7544 7.70418C19.3469 8.02747 18.8952 8.4792 18.3671 9.00741L18.367 9.00746L18.367 9.00747L18.367 9.00747L18.3301 9.04438L18.2932 9.08129C17.765 9.60948 17.3132 10.0612 16.9899 10.4687C16.6469 10.901 16.3735 11.3729 16.3053 11.956C16.2792 12.1802 16.2792 12.4066 16.3053 12.6308C16.3735 13.2139 16.6469 13.6858 16.9899 14.1181C17.3132 14.5256 17.7649 14.9773 18.2932 15.5055L18.2932 15.5055L18.6352 15.8475L15.8475 18.6352L15.5055 18.2932C14.9773 17.7649 14.5256 17.3132 14.1181 16.9899C13.6858 16.6469 13.2139 16.3735 12.6308 16.3053C12.4066 16.2792 12.1802 16.2792 11.956 16.3053C11.3729 16.3735 10.901 16.6469 10.4687 16.9899C10.0612 17.3132 9.60948 17.765 9.08129 18.2932L9.04438 18.3301L9.00747 18.367C8.47924 18.8952 8.02748 19.3469 7.70418 19.7544C7.36117 20.1867 7.08774 20.6586 7.01964 21.2417C6.99345 21.4659 6.99345 21.6923 7.01964 21.9165C7.08774 22.4996 7.36117 22.9715 7.70418 23.4038C8.02748 23.8113 8.47924 24.263 9.00747 24.7912L15.2088 30.9925C15.737 31.5208 16.1887 31.9725 16.5962 32.2958C17.0285 32.6388 17.5004 32.9123 18.0835 32.9804C18.3077 33.0065 18.5341 33.0065 18.7583 32.9804C19.3414 32.9123 19.8133 32.6388 20.2456 32.2958C20.6531 31.9725 21.1048 31.5208 21.633 30.9925L21.7068 30.9187C22.2351 30.3905 22.6868 29.9388 23.0101 29.5313C23.3531 29.099 23.6265 28.6271 23.6947 28.044C23.7208 27.8198 23.7208 27.5934 23.6947 27.3692C23.6265 26.7861 23.3531 26.3142 23.0101 25.8819C22.6868 25.4745 22.2351 25.0228 21.707 24.4947L21.7069 24.4946L21.7069 24.4946L21.7068 24.4945L20.9077 23.6954L23.6954 20.9077L24.4945 21.7068C25.0227 22.2351 25.4744 22.6868 25.8819 23.0101C26.3142 23.3531 26.7861 23.6265 27.3692 23.6947C27.5934 23.7208 27.8198 23.7208 28.044 23.6947C28.6271 23.6265 29.099 23.3531 29.5313 23.0101C29.9388 22.6868 30.3905 22.2351 30.9187 21.7068L30.9925 21.633C31.5208 21.1048 31.9725 20.6531 32.2958 20.2456C32.6388 19.8133 32.9123 19.3414 32.9804 18.7583C33.0065 18.5341 33.0065 18.3077 32.9804 18.0835C32.9123 17.5004 32.6388 17.0285 32.2958 16.5962C31.9726 16.1888 31.5209 15.7371 30.9927 15.209L30.9927 15.2089L30.9926 15.2089L30.9925 15.2088L24.7912 9.00747L24.7912 9.00744C24.263 8.47922 23.8113 8.02748 23.4038 7.70418C22.9715 7.36117 22.4996 7.08774 21.9165 7.01964ZM22.3822 19.5945L19.9484 17.1607L17.1607 19.9484L19.5945 22.3822L22.3822 19.5945ZM12.4153 18.15C12.3343 18.1405 12.2525 18.1405 12.1715 18.15C12.071 18.1617 11.9213 18.208 11.623 18.4447C11.3093 18.6936 10.933 19.0679 10.3576 19.6433C9.78221 20.2187 9.4079 20.595 9.15901 20.9087C8.92233 21.207 8.87597 21.3567 8.86424 21.4572C8.85478 21.5382 8.85478 21.62 8.86424 21.701C8.87597 21.8015 8.92233 21.9512 9.15902 22.2495C9.4079 22.5632 9.78221 22.9395 10.3576 23.5149L16.4851 29.6424C17.0605 30.2178 17.4368 30.5921 17.7505 30.841C18.0488 31.0777 18.1985 31.124 18.299 31.1358C18.38 31.1452 18.4618 31.1452 18.5428 31.1358C18.6433 31.124 18.793 31.0777 19.0913 30.841C19.405 30.5921 19.7813 30.2178 20.3567 29.6424C20.9321 29.067 21.3064 28.6907 21.5553 28.377C21.792 28.0787 21.8383 27.929 21.85 27.8285C21.8595 27.7475 21.8595 27.6657 21.85 27.5847C21.8383 27.4842 21.792 27.3345 21.5553 27.0362C21.3064 26.7225 20.9321 26.3462 20.3567 25.7708L14.2292 19.6433C13.6538 19.0679 13.2775 18.6936 12.9638 18.4447C12.6655 18.208 12.5158 18.1617 12.4153 18.15ZM26.609 7.87319C26.9716 7.51056 27.5596 7.51056 27.9222 7.87319L31.6692 11.6202C32.0318 11.9828 32.0318 12.5707 31.6692 12.9334C31.3066 13.296 30.7186 13.296 30.356 12.9334L26.609 9.18638C26.2464 8.82375 26.2464 8.23582 26.609 7.87319ZM9.18584 26.6078C8.82321 26.2452 8.23528 26.2452 7.87265 26.6078C7.51002 26.9705 7.51002 27.5584 7.87265 27.921L11.6196 31.668C11.9823 32.0307 12.5702 32.0307 12.9328 31.668C13.2955 31.3054 13.2955 30.7175 12.9328 30.3548L9.18584 26.6078Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="form-step-18-3_footer-text_block-info">
                                    <div className="form-step-18-3_footer-text_block-info-title">Fitness level</div>
                                    <div className="form-step-18-3_footer-text_block-info-desc">
                                        {questionExercise[0] === '5'
                                            ? 'Advanced'
                                            : questionExercise[0] === '4'
                                            ? 'Medium'
                                            : 'Basic'}
                                    </div>
                                </div>
                            </div>
                            <div className="form-step-18-3_footer-text_block">
                                <div className="form-step-18-3_footer-text_block-icons">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="40" height="40" rx="20" fill="#F6F7F9"></rect>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M23.9079 7.59068C22.872 6.81865 21.6546 6.84622 20.7199 7.42531C19.8073 7.99065 19.2024 9.05 19.2024 10.2772V10.6924C19.2024 11.5109 19.0318 12.7098 18.6184 13.8568C18.2008 15.0156 17.5797 16.0011 16.7625 16.5484C16.6549 16.6204 16.584 16.626 16.5401 16.6226C16.4872 16.6185 16.4051 16.5943 16.3025 16.5144C16.084 16.344 15.8724 15.9921 15.8299 15.5645L15.7231 14.4898C15.6328 13.582 15.1329 12.8018 14.4085 12.3942C13.6564 11.971 12.7046 11.9826 11.9145 12.6038C10.0118 14.0996 8 16.7441 8 20.6693C8 25.4835 9.75095 28.6063 12.0381 30.5077C14.2876 32.378 16.9742 33 18.7947 33C18.9796 33 19.1728 32.995 19.3731 32.9844C19.5232 32.995 19.6661 33 19.8 33C20.3393 33 21.0258 32.9011 21.7247 32.6417C23.246 32.2832 24.8983 31.6264 26.3859 30.5443C28.9739 28.6617 31 25.5324 31 20.6693C31 14.4507 27.2208 10.0598 23.9079 7.59068ZM24.7817 29.3963C24.9603 29.2833 25.1367 29.1638 25.3101 29.0377C27.4243 27.4997 29.16 24.9279 29.16 20.6693C29.16 15.2742 25.8825 11.3709 22.8149 9.08466C22.4088 8.78199 22.0066 8.80721 21.6824 9.00809C21.3359 9.22271 21.0424 9.6705 21.0424 10.2772V10.6924C21.0424 11.7233 20.8356 13.1373 20.3476 14.4916C19.8637 15.8343 19.0592 17.2389 17.7798 18.0958C16.8664 18.7076 15.8788 18.5306 15.1779 17.9842C14.5182 17.4701 14.0867 16.6311 13.9991 15.7499L13.8923 14.6752C13.8583 14.3335 13.6788 14.1098 13.5126 14.0163C13.4318 13.9709 13.3575 13.9565 13.2939 13.9607C13.234 13.9645 13.1497 13.9868 13.0451 14.0689C11.4663 15.3101 9.84 17.4583 9.84 20.6693C9.84 24.9767 11.3806 27.5551 13.2079 29.0743C13.6083 29.4071 14.0264 29.6924 14.4508 29.9352C14.1662 29.3104 14 28.578 14 27.728C14 25.1681 15.6878 23.3699 17.1474 22.3594C17.8241 21.8909 18.6484 21.9034 19.2734 22.2638C19.8695 22.6075 20.2353 23.2305 20.2353 23.9171C20.2353 24.2046 20.2362 24.5316 20.277 24.8567L20.2829 24.9015C20.4961 24.5096 20.8478 24.1988 21.2689 24.0249C21.8269 23.7944 22.5384 23.8011 23.125 24.2213C24.0326 24.8716 25 26.0265 25 27.728C25 28.3436 24.9222 28.8985 24.7817 29.3963ZM21.1612 30.8666C20.4831 31.0179 19.8385 31.101 19.2656 31.1305C18.6803 31.0552 17.9768 30.8554 17.3804 30.4658C16.638 29.9808 16 29.1674 16 27.728C16 26.0265 17.0827 24.737 18.2351 23.9056L18.2353 23.9171L18.2353 23.9301C18.2353 24.2091 18.2353 24.6293 18.2901 25.0663C18.3446 25.5001 18.4617 26.0329 18.7504 26.5021C18.9505 26.8271 19.2648 27.114 19.7058 27.2377C20.1421 27.3602 20.5568 27.282 20.8747 27.1389C21.4597 26.8756 21.8696 26.3414 22.0504 25.786C22.5504 26.1945 23 26.8259 23 27.728C23 29.2162 22.4175 30.0356 21.7935 30.5015C21.5922 30.6518 21.3772 30.772 21.1612 30.8666Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="form-step-18-3_footer-text_block-info">
                                    <div className="form-step-18-3_footer-text_block-info-title">Metabolism</div>
                                    <div className="form-step-18-3_footer-text_block-info-desc">
                                        {questionExercise[0] === '2' ? 'Low, difficult to' : 'Fast, easy to'}
                                        {goal}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-step-18-3_footer-img">
                            {bmi < 18.5 ? (
                                <img src="/img/ave-7_1-Slim.png" alt="Ectomorph" />
                            ) : bmi > 29.9 ? (
                                <img src="img/ave-7_1-Extended.png" alt="Endomorph" />
                            ) : (
                                <>
                                    <img src="/img/ave-7_1-Mid-Size.png" alt="Ectomorph" />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-continue" style={{ textAlign: 'center' }}>
                <Button
                    className="custom-btn-continue"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={!isCheckboxChecked}
                    style={{ marginTop: '20px' }}
                >
                    Continue
                </Button>
            </div>
        </>
    );
};
UIFormStep18_3.propTypes = {
    height: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    questionExercise: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    setIsCheckboxChecked: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    isCheckboxChecked: PropTypes.bool.isRequired,
};
export default UIFormStep18_3;
