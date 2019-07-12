import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks'
import useForm from '../hooks/useForm';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import Header from '../components/Header';


const CREATE_POST = gql`

	mutation CreatePost($data:createPostAuthor!){
		createPost(data:$data){
			_id,
			title
		}
	}


`;


function Create() {

	const [cover_photo, setCoverPhoto] = useState('')
	const [coverPreview, setCoverPreview] = useState('')


	const [sendPost, { data, error }] = useMutation(CREATE_POST);

	const handleCover = (event) => {

		const reader =  new FileReader();
		const file =  event.target.files[0];

		reader.onloadend = () => {

			setCoverPhoto(file)
			setCoverPreview(reader.result)

		}

		reader.readAsDataURL(file);

	}

	const catchPost = async (fields) => {

		await sendPost({ variables:{data:{ ...fields, cover_photo }} })

		if (data) {
			console.log(data.createPost)
		} else {
			console.log(error)
		}
	}

	const { inputs, handleInputChange, handleSubmit } = useForm(catchPost)


	return (
		<>
			<Navbar />
			<Header />
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form onSubmit={handleSubmit} >
							<Input
								name="title"
								label="Title"
								type="text"
								placeholder="Title"
								value={inputs.title}
								onChange={handleInputChange}
								requiredç
							/>
							<div className="control-group">
								<div className="form-group floating-label-form-group controls">
									<label htmlFor="">Content</label>
									<textarea name="content"
										placeholder="Content"
										cols="60"
										value={inputs.content}
										onChange={handleInputChange}
										rows="10"
									/>
								</div>
							</div>
							<Input
								name="cover_photo"
								label="Cover Photo"
								type="file"
								placeholder="Cover Photo"
								onChange={handleCover}
								required
							/>

							<img src={coverPreview} width="150" />

							<button type="submit" className="btn btn-primary mt-4">Send</button>

						</form>
					</div>
				</section>
			</main>
		</>
	)



}
export default Create;