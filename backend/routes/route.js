const express = require('express');
const router = express.Router();

// Import controller
const { createContact, getContacts } = require('../Controller/formcontroller');

// Routes
router.post('/contact', createContact);   // Create a new contact
router.get('/contacts', getContacts);    // Get all contacts

module.exports = router;