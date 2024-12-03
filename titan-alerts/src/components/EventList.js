import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/events')
            .then(res => setEvents(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Upcoming Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event._id}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <p>{new Date(event.date).toLocaleString()}</p>
                        <p>{event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;