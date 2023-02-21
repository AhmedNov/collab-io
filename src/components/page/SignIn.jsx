import React from 'react'
import './SignIn.css'
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router , Routes,   Route , Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <div className='signin'>
     
      
        <div className="main-es" data-aos='zoom-in'>  	
		    <input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<LinkContainer to="/"><button>Login</button></LinkContainer>
				</form>
			</div>
      <div/>
	
      </div>
      </div>
  )
}

export default SignIn