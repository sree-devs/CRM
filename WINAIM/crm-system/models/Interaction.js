const mongoose = require('mongoose');

const InteractionSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    type: { type: String, enum: ['Call', 'Meeting', 'Email'], required: true },
    notes: { type: String },
    interactionDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Interaction', InteractionSchema);
