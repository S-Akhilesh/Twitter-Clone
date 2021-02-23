import React from 'react'
import './SigninPage.css'
import twtLogin from './twtLogin.png';
import TwitterIcon from "@material-ui/icons/Twitter";

function SigninPage() {
    return (
        <div className="signinPage">
            <div className="signin__top">
                <div className="signin__left">
                    <div className="img">
                        <img src={twtLogin} alt="image" />
                    </div>
                </div>
                <div className="signin__right">
                    <TwitterIcon />
                    <h2>Happenning now</h2>
                    <h3>Join twitter today.</h3>
                    <button className="signin__button" >Sign up</button>
                    <button className="login__button">Log in</button>
                </div>
            </div>
            <div className="signin__bottom">
                <div className="links">
                    <a href='#'> About</a>
                    <a href='#'> Help Center</a>
                    <a href='#'> Terms of Service</a>
                    <a href='#'> Privacy Policy</a>
                    <a href='#'> Cookie Policy</a>
                    <a href='#'> Ads info</a>
                    <a href='#'> Blog</a>
                    <a href='#'> Status</a>
                    <a href='#'> Careers</a>
                    <a href='#'> Brand Resources</a>
                    <a href='#'> Advertising</a>
                    <a href='#'> Marketing</a>
                    <a href='#'> Twitter for Business</a>
                    <a href='#'> Developers</a>
                    <a href='#'> Directory</a>
                    <a href='#'> Settings</a>
                </div>
                <span> © 2021 Twitter Clone, Inc.</span>
            </div>
        </div >
    )
}

export default SigninPage
