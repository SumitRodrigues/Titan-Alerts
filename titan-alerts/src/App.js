import React from 'react';
import EventList from './components/EventList';
import SubscribeForm from './components/SubscribeForm';

function App() {
    return (
        <div>
            <h1>CSUF Event Notifications</h1>
            <SubscribeForm />
            <EventList />
        </div>
    );
}

export default App;