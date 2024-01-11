const User = require('../models/User');
const {hashPassword, comparePassword} = require('../helpers/auth');
const jwt = require('jsonwebtoken')


const test = (req, res) => {
    res.json('JSON is Working');
}

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
            if(!name){
                return res.json({
                    error : 'Name is required'
            })
            }
            // Your custom password complexity validation logic
            const hasMinLength = password.length >= 8;
            const hasMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
            const hasLetters = /[a-zA-Z]/.test(password);
            const hasNumbers = /\d/.test(password);
            if(!password ||!(hasMinLength && hasMixedCase && hasLetters && hasNumbers)){
                return res.json({
                    error: 'Password validation failed! Minimum length: 8, mixed case, letters, numbers.',
            });
            }

            const exist = await User.findOne({email});
            if(exist){
                return res.json({
                    error: 'Email is already taken!'
                })
            }

            const hashedPassword = await hashPassword(password)

            const user = await User.create({
                name, 
                email, 
                password: hashedPassword,
            });
            return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // Check if user exists
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.json({
          error: "Email or password incorrect"
        });
      }
  
      // Check for password match
      const match = await comparePassword(password, user.password);
  
      if (match) {
        jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
          if (err) throw err;
          res.cookie('token', token).json(user);
        });
      } else {
        res.json({
          error: "Email or password incorrect"
        });
      }
    } catch (error) {
      console.log('Error', error);
      res.status(500).json({
        error: "Internal Server Error"
      });
    }
  };
  
    const getProfile = (req, res) => {
        const { token } = req.cookies;
        if(token){
          jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user)
          })
        }else{
          res.json(null)
        }
    }

module.exports = {
    test, registerUser, loginUser, getProfile
}