import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';
import useForm from '../hooks/useForm';

const LOGIN = gql`
	mutation LOGIN($email:String!,$password:String!){
		login(email:$email,password:$password){
			token
		}
	}
`;

function Login({history}){
	const  sendLogin = useMutation(LOGIN);
	const submitLogin = async(fields) => {
		console.log(fields)
		const mutation = await sendLogin({variables:{...inputs}}).catch(e =>  console.log(e));
		if(mutation){
			const {login} = mutation.data;
			localStorage.setItem('tokenBlog', login.token)
			history.push('/');
		}
	}

	const { inputs, handleInputChange,handleSubmit} = useForm(submitLogin)



	return(
		<>
			<Navbar />
			<Header />
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form onSubmit={handleSubmit}>
							
							<Input name="email"
							label="Email"
							type="email"
							placeholder="Email"
							value={inputs.email}
							onChange={handleInputChange}
							required 
							/>
							<Input name="password"
							label="Password"
							type="password"
							placeholder="password"
							value={inputs.password}
							onChange={handleInputChange}
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