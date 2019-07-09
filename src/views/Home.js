import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header'
import PostPreview from '../components/PostPreview';
import Footer from '../components/Footer';

function Home(){
	
	return(
		<>
			<Navbar />
			<Header />
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<PostPreview />
						<PostPreview />
						<PostPreview />
						<PostPreview />
						<PostPreview />
					</div>
				</section>
			</main>
			<Footer />
			{ /*Fragment */}
		</> 
		
	)

}

export default Home;