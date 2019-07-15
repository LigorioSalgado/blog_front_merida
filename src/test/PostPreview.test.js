import React from 'react';
import { shallow } from 'enzyme';
import PostPreview from '../components/PostPreview';

describe("<PostPreview/>", ()=> {

	it("Render works",() =>{
		const component = shallow(<PostPreview />)
		expect(component).toMatchSnapshot();
	})


	it("Render with props works",() =>{
		const component = shallow(<PostPreview _id={"21432535"} title={"Prueba"} />)
		expect(component.find(".post-title").text()).toBe('Prueba');
	})

})