import React, {useState, useEffect} from 'react'
import config from './config';

export default function AlbumDetails({albumId}) {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        fetch(`${config.albumUrl}/${albumId}`)
            .then(res => res.json())
            .then(setAlbum)
    }, [])
    return (
        <div>
            <h3>Albums Details</h3>
            <h4>{album.title}</h4>
        </div>
    )
}
