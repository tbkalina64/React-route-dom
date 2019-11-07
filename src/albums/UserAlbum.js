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
        <ul>
            {albums.map(album => (
                    <UserAlbumItem
                        key={album.id}
                        album={album} />
            ))}
        </ul>
)
}

export default UserAlbum
