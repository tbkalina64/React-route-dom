import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom';


export default function AlbumDetailsFotos({ foto }) {
	const { url } = useRouteMatch();

	return (
		<li>
			<Link to={`${url}}/`}>{foto.url}</Link>
		</li>
	)
}