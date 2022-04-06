import React from 'react';
import { useState } from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';
import "./Main.css";

const Main = () => {
    const [volunteers, setVolunteers] = useVolunteers();
    const [searchResult, setSearchResult] = useState([])
    const handleSearchChange = event => {
        const searchText = event.target.value;
        const match = volunteers.filter(v => v.title.includes(searchText));
        setSearchResult(match);
    }


    return (
        <div>
            <h2>Volunteers ={volunteers.length}</h2>
            <div className="input-field">
                <input onChange={handleSearchChange} type="text" placeholder="search here" />
            </div>
            <div className="activity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;