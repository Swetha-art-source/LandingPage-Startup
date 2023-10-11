import React from 'react';

function LandingPage() {
  return (
    <div className="landing-page">
      <nav>
        <ul>
            <div className='logo'>
          <li><a href="#" className='startup'>Startup 3</a></li>
          </div>
          <div className="navLinks">
          <li><a href="#" className='overView'>Overview</a></li>
          <li><a href="#" className='links'>Prices</a></li>
          <li><a href="#" className='links'>Blog</a></li>
          <li><a href="#" className='links'>Feedback</a></li>
          <button className='purchaseButton'>Purchase</button>
          </div>
        </ul>
      </nav>
      <div className='container'>
        <div className='headerContainer'>
      <header>
        <h1>Generate Awesome Web Pages</h1>
        <p>The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.</p>
        <div className='learnButton'><button>Learn More</button></div>
      </header>
      </div>
      <div>
      <main>
        <form>
            <h1>Sign Up Now</h1>
          <input type="email" placeholder='Your email' className='inputField' />
          <br />
          <input type="password" placeholder='Your password' className='inputField' />
          <br />
          <label htmlFor="checkBox"> 
            <input type="checkbox" className='checkBox' id="checkBox" />
            I agree to the Terms of Service.
            </label>
          <br />
          <button className='signIn'>Sign In</button>
          <div class="horizontal-line-row">
          <hr/><span className='or'>or</span><hr/>
          </div>
          <button className='loginButton'>Login via Twitter</button>
          <p className='account'>Do you have an Account? <span className='accountSign'><a href="#">Sign In</a></span></p>
        </form>
      </main>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
