import React, { Suspense } from 'react';
import { mount } from 'enzyme';
import { ApolloProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import createClient from './mockClient';
import Home from '../views/Home';
import PostPreview from '../components/PostPreview';
import gql from 'graphql-tag';

const ALL_POST = gql`
	query ALLPOST {
		listPosts{
			_id,
			title
		}
	}
`

const ALL_POST_MOCKS = [
	{
		request: {
			query: ALL_POST,
			variables: {},
		},
		result: {
			data: {
				listPosts: [
					{ _id: "782636238823746283", title: "Post 1" },
					{ _id: "782636238823746284", title: "Post 2" },
					{ _id: "782636238823746285", title: "Post 3" }
				]
			},
		},
	},
];

const waitForNextTick = () => new Promise(resolve => setTimeout(resolve));


describe("<Home />", () => {

	it("Render works", () => {
		const client = createClient(ALL_POST_MOCKS);
		const component = mount(
			<ApolloProvider client={client} >
				<Router>
					<Home />
				</Router>
			</ApolloProvider>
		);
		expect(component).toMatchSnapshot();
	})

	it("Render Count posts",() => {
		act(() => {
			const testPosts = async () => {
				const client = createClient(ALL_POST_MOCKS);

				/* fire events that update state */
				await waitForNextTick();

				const component = mount(
					<Suspense fallback={<div>Loading</div>}>
						<ApolloProvider client={client} >
							<Router>
								<Home />
							</Router>
						</ApolloProvider>
					</Suspense>
				);

				expect(component.find(PostPreview)).toHaveLength(3);

			}

			testPosts();

		});



	})


})