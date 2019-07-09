import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';

function Login(){

	return(
		<>
			<Navbar />
			<Header />
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form>
							
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
							

							<button type="submit" className="btn btn-primary">Send</button>

						</form>
					</div>
				</section>
			</main>
		</>
	)

}

export default Login;