const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = "mongodb+srv://Adam3340:Adam3340@cluster0.znhmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema and model
const ContactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: { type: Date, default: Date.now }
});

const ContactMessage = mongoose.model('ContactMessage', ContactMessageSchema);

// API Endpoint to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new ContactMessage({ name, email, message });
    
    await newMessage.save();

    res.status(201).json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
});

// Start the server
const PORT = 4000; // Use the required port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
