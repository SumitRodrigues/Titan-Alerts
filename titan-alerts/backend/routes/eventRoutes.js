const express = require('express');
const Event = require('../models/Event');

const router = express.Router();

// Create an event
router.post('/', async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;