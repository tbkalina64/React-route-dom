import React, {useState, useEffect} from 'react'
import config from './config';
import AlbumDetailsFotos from "./AlbumDetailsFotos";

export default function AlbumDetails() {
    const [fotos, albums, setFoto] = useState([]);

    useEffect(() => {
        fetch(`${config.fotoUrl}`)
            .then(res => res.json())
            .then(setFoto)
    }, [])
    return (
        <div>
            <h3>Albums Fotos</h3>
            <ul>
                {fotos.map(foto => (
                    <AlbumDetailsFotos
                        key={foto.id}
                        foto={foto} />
                ))}
            </ul>
        </div>
    )
}
