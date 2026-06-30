const Contact = require('../model/formmodel');

// Create a new contact
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic check (optional because Mongoose also validates)
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required!' });
    }

    // Create a new contact
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Contact submitted successfully!', contact: newContact });
  } catch (err) {
    console.error(err);

    // Handle duplicate email error
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Email already exists!' });
    }

    // Handle validation errors
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ error: messages });
    }

    res.status(500).json({ error: 'Server error' });
  }
};

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};