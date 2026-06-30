const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    unique: true, // optional, if you want emails to be unique
    lowercase: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      'Please fill a valid email address'
    ]
  },
  message: { 
    type: String, 
    required: [true, 'Message is required'] 
  },
}, { timestamps: true });

const Contact = mongoose.model('HelixSynergyCropFormDetails', contactSchema);

module.exports = Contact;