import React from 'react';
import { Link } from 'react-router-dom'

function PostPreview() {

	return (
		<div className="post-preview">
			<Link to="/post/unid">
				<h2 className="post-title">
					Man must explore, and this is exploration at its greatest
		  </h2>
				<h3 className="post-subtitle">
					Problems look mighty small from 150 miles up
		  </h3>
			</Link>
			<p className="post-meta">Posted by
		  <a href="#">Start Bootstrap</a>
				on September 24, 2019</p>
		</div>
	)

}

export default PostPreview;