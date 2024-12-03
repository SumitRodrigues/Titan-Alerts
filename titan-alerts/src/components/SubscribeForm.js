import React, { useState } from 'react';
import axios from 'axios';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users/subscribe', { email })
            .then(() => alert('Subscribed successfully!'))
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Subscribe for Notifications</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Subscribe</button>
        </form>
    );
};

export default SubscribeForm;