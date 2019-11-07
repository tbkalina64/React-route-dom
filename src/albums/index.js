import React, {useState, useEffect} from 'react'
import { Switch, Route, useRouteMatch, useParams} from 'react-router-dom';
import UserAlbum from './UserAlbum';
import AlbumDetails from './AlbumDetails';



export default function Users() {
    const { url } = useRouteMatch();

    return (
        <div>
            <h2>Users Albums</h2>
                <Switch>
                    <Route path={`${url}/:id`} render={({match}) => {
                        return <AlbumDetails userId={match.params.id} />
                    }} />
                     <Route path={`${url}`} render={() => {
                    return <UserAlbum />
                }} />
                </Switch>
        </div>
    )
}
