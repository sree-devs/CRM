const mongoose = require('mongoose');

const OpportunitySchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    stage: { type: String, enum: ['Prospecting', 'Qualified', 'Proposal Sent', 'Closed'], default: 'Prospecting' },
    expectedCloseDate: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Opportunity', OpportunitySchema);
