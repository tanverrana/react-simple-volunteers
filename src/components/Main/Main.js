import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Main = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return (
        <div>
            <h2>Volunteers ={volunteers.length}</h2>
        </div>
    );
};

export default Main;