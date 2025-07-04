const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const runAI = require('../services/matchAI');

router.post('/upload', async (req, res) => {
  try {
    const { name, skills, goals } = req.body;
    const profile = await Profile.create({ name, skills, goals });
    const aiResults = await runAI(profile);

    res.json({
      profile,
      gigs: aiResults.gigs,
      coachingTip: aiResults.tip,
    });
  } catch (error) {
    console.error('Upload Route Error:', error.message);
    res.status(500).json({ error: 'Internal server error during AI processing' });
  }
});

module.exports = router;