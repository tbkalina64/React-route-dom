import React from 'react'
import config from './config';
import {Link, useRouteMatch} from 'react-router-dom';


export default function AlbumDetailsFotos({ foto }) {
	const { url } = useRouteMatch();
	

	return (
		<li>
			<Link to={`${foto.url}?albumId=${foto.id}`}><img src={foto.url}/></Link>
		</li>
	)
}
