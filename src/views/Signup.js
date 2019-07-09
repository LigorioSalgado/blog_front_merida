import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';

function Signup(){

	return(
		<>
			<Navbar />
			<Header />
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form>
							<Input name="first_name"
							label="First Name"
							placeholder="First Name"
							type="text"
							value={''}
							onChange
							required 
							/>
							<Input name="last_name"
							label="Last Name"
							type="text"
							placeholder="Last Name"
							value={''}
							onChange
							required 
							/>
							<Input name="email"
							label="Email"
							type="email"
							placeholder="Email"
							value={''}
							onChange
							required 
							/>
							<Input name="password"
							label="Password"
							type="password"
							placeholder="password"
							value={''}
							onChange
							required 
							/>
							<Input name="confirm_password"
							label="Confirm Password"
							type="password"
							placeholder="Confirm Password"
							value={''}
							onChange
							required 
							/>

							<button type="submit" className="btn btn-primary">Send</button>

						</form>
					</div>
				</section>
			</main>
		</>
	)

}

export default Signup;