const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  projectId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'project', 
    required: true 
  },
  freelancerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
//   coverLetter: { 
//     type: String, 
//     required: true 
//   },
  bidAmount: { 
    type: Number, 
    required: true 
  },
  estimatedTime: { 
    type: Number, 
    required: true,
    description: 'Estimated time in days' 
  },
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'rejected', 'withdrawn'], 
    default: 'pending' 
  },
  revisions: { 
    type: Number, 
    default: 0 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

bidSchema.index({ projectId: 1, freelancerId: 1 });

module.exports = mongoose.model('Bid', bidSchema);