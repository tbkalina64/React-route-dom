import React, {useState, useEffect} from 'react';
import config from './config';
import UserAlbumItem from './UserAlbumItem';

function UserAlbum() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(config.albumUrl)
            .then(res => res.json())
            .then(setAlbums)
    }, [])
    return (
        <ol>
            {albums.map(album => (
                <UserAlbumItem
                key={album.id}
                album={album} />
            ))}
        </ol>
)
}

export default UserAlbum
