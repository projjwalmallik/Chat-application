import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';
    location = useLocation();

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        console.log(location.search);
        console.log(name, room);
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);
        socket.emit();
    }, [ENDPOINT, location.search]);

    return (
        <h1>Chat</h1>
    )
}

export default Chat;