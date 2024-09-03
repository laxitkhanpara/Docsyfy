const express = require('express')
const app = express();
require('dotenv').config();
const router = express.Router();
// const { AdminUserauth, Blogs, Events } = require("../models/Auth")
// const { FacultyDetails } = require('../models/feacultySchema')
// const { StudentDetails } = require('../models/studentSchema')
const bcrypt = require('bcrypt');
// const { checkUserAuth } = require("../middleware/authMiddleware")
// const { genrateTocken } = require('../middleware/jwtToken');
const multer = require('multer');
const path = require('path');
const { log } = require('util');
// const nodemailer = require("nodemailer");
const fs = require('fs');

router.get("/", async (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        console.log(error);
    }
})

//===========export router=============
module.exports = router;