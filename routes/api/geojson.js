const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const request = require('request');
const config = require('config');
const jsonData = require('../../config/geoJsonData.json');


// @Route   Get api/profile
// @Desc    Get all Profiles
// @Access  public

router.get('/', async (req, res) => {
    
  try {
    console.log("hello")
    res.json(jsonData[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
