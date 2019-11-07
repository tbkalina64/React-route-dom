import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom';

function UserAlbumItem({album}) {
    const { url } = useRouteMatch();

    return (
        <li>
            <Link to={`${url}/${album.id}`}>{album.title}</Link>
        </li>
)

}
export default UserAlbumItem
