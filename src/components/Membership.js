import React from 'react';
import '../styles/membership.css';
import { FaLocationArrow } from "react-icons/fa6";

const Membership = () => {
  return (
    <div className='membershipSection'>
        <div className="membershipHeader">Our pricing</div>
        <div className="membershipTagline">Join our membership</div>
        <div className="membershipPlansSection">
            <div className="planDetails">
                <div className="planType">FlexMonthly Plan</div>
                <div className="planPricing">
                    <div className="planPricingAmount">2999/-</div>
                    <div className="planPricingDuration">1 month</div>
                </div>
                <div className="planFeaturesSection">
                    <div><FaLocationArrow className="pricingIcon"/>Unlimited access to gym facilities</div>
                    <div><FaLocationArrow className="pricingIcon"/>Basic fitness classes with steam</div>
                    <div><FaLocationArrow className="pricingIcon"/>Monthly fitness assessments</div>
                    <div><FaLocationArrow className="pricingIcon"/>Personalised diet charts</div>
                </div>
                <button className="planBtn">Join now</button>
            </div>
            <div className="planDetails">
            <div className="planType">FlexQuarterly Plan</div>
                <div className="planPricing">
                    <div className="planPricingAmount">4999/-</div>
                    <div className="planPricingDuration">3 months</div>
                </div>
                <div className="planFeaturesSection">
                    <div><FaLocationArrow className="pricingIcon"/>Unlimited access to gym facilities</div>
                    <div><FaLocationArrow className="pricingIcon"/>Basic fitness classes with steam</div>
                    <div><FaLocationArrow className="pricingIcon"/>Monthly fitness assessments</div>
                    <div><FaLocationArrow className="pricingIcon"/>Personalised diet charts</div>
                </div>
                <button className="planBtn">Join now</button>
            </div>
            <div className="planDetails">
            <div className="planType">FlexHalfYearly Plan</div>
                <div className="planPricing">
                    <div className="planPricingAmount">6999/-</div>
                    <div className="planPricingDuration">6 months</div>
                </div>
                <div className="planFeaturesSection">
                    <div><FaLocationArrow className="pricingIcon"/>Unlimited access to gym facilities</div>
                    <div><FaLocationArrow className="pricingIcon"/>Basic fitness classes with steam</div>
                    <div><FaLocationArrow className="pricingIcon"/>Monthly fitness assessments</div>
                    <div><FaLocationArrow className="pricingIcon"/>Personalised diet charts</div>
                </div>
                <button className="planBtn">Join now</button>
            </div>
            <div className="planDetails">
            <div className="planType">FlexYearly Plan</div>
                <div className="planPricing">
                    <div className="planPricingAmount">12999/-</div>
                    <div className="planPricingDuration">1 year</div>
                </div>
                <div className="planFeaturesSection">
                    <div><FaLocationArrow className="pricingIcon"/>Unlimited access to gym facilities</div>
                    <div><FaLocationArrow className="pricingIcon"/>Basic fitness classes with steam</div>
                    <div><FaLocationArrow className="pricingIcon"/>Monthly fitness assessments</div>
                    <div><FaLocationArrow className="pricingIcon"/>Personalised diet charts</div>
                </div>
                <button className="planBtn">Join now</button>
            </div>
        </div>
    </div>
  )
}

export default Membership