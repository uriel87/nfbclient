
import React, { memo } from "react";
import Signup from "../signup/signup";
import "./home.css"
import graph from '../../../images/graph.png';
import leverage from '../../../images/leverage.png';
import presentation from '../../../images/presentation.png';
import moneyTreeHand from '../../../images/Money-Tree-hand.jpg';

import LightboxBtn from '../lightboxBtn/lightboxBtn'
import { headerContent } from '../../constant'


export const Home = () => {

  return (
			<div className="home-container">
        <section className="home-wallpaper">
          <div className="home-title">
            <h3>Gain Total Control of Your Money</h3>
            <p>Stop living paycheck-to-paycheck, get out of debt, and save more money.</p>
            <div className="btn-signUp">
              <LightboxBtn content={headerContent.SIGNUP} headerContent = {headerContent.SIGNUP} cmp={<Signup />}/>
            </div>
          </div>

        </section>


        <section className="explaintaion">
          <div className="explaintaion-image">
            <img src={moneyTreeHand} />
          </div>
          <div className="explaintaion-content">
            <h2>All your money in one place</h2>
            <p>We’ve helped hundreds of thousands of people get out of debt and gain control of their money.</p>
            <ul>
              <li><i className="fas fa-check"></i><span>You won’t be spending less</span></li>
              <li><i className="fas fa-check"></i><span>See all of your bills and money at a glance</span></li>
              <li><i className="fas fa-check"></i><span>So what do you have to lose?</span></li>
              <li><i className="fas fa-check"></i><span>Create budgets easily with tips tailored to you</span></li>
            </ul>
          </div>
        </section>

        <section className="advantages">
          <h2>Changed lives speak for themselves.</h2>
          <p>versatile enough to help anyone’s money make sense without much effort. There’s no wrong way to use it, and nothing to lose getting started. You’ll be surprised how life-changing something so simple can be.</p>
          <section className="advantage">
            <div className="plan">
                <img src={graph} alt="All-in-one finances" />
                <h4>All-in-one finances</h4>
                <p>Keep Track of your Checking, Investment, Savings and even PayPal Accounts all from one screen.</p>
            </div>
 
            <div className="plan">
                <img src={leverage} alt="Budgets made simple" />
                <h4>Budgets made simple</h4>
                <p>Sync your Transactions by Importing them, or enter them Manually so you can always stay on top of your Budget.</p>
            </div>

            <div className="plan">
                <img src={presentation} alt="Unlimited credit scores" />
                <h4>Unlimited credit scores</h4>
                <p>Keep track of your Paychecks or other sources of Income on the My Income page.</p>
            </div>
          </section>
        </section>

        

        <section className="signUp-home-section">
            <h2>Sign up for free now</h2>
            <p>From budgets and bills to free credit score and more, you’ll discover the effortless way to stay on top of it all.</p>
            <div className="btn-signUp">
              <LightboxBtn content={headerContent.SIGNUP} headerContent = {headerContent.SIGNUP} cmp={<Signup />}/>
            </div>

        </section>
      </div>
    )
}

export default memo(Home);















{/* <div className="btn-signUp">
<button type="button" data-toggle="modal" data-target="#signup" data-backdrop="false">Signup</button>
<Signup />
</div> */}

// import LightBoxBtn from '../lightBoxBtn/lightBoxBtn'
// import { headerContent } from '../../constant'
{/* <LightBoxBtn content={headerContent.SIGNUP} headerContent = {headerContent.SIGNUP} cmp={<Signup />}/> */}
{/* <LightBoxBtn content={headerContent.SIGNUP} style={SIGNUP_HOME_PAGE} headerContent = {headerContent.SIGNUP} cmp={<Signup />}/> */}

