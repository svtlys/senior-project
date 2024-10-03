const router = require("express").Router();
const passport = require("passport");

const FRONTEND_URL = "http://localhost:3000/";

// Get method for google

router.get("/login/failed" , (req,res) =>{
  res.status(401).json({
    success: false,
    message: "failure to login",
  });
});
 
router.get("/google", passport.authenticate("google", {scope: ['email','profile']}));

router.get("/google/callback", passport.authenticate('google',{
    successRedirect:FRONTEND_URL, //Success, redirect
    failureRedirect: "/login/failed"
}))

router.get("/login/success", (req,res) => {
  if(req.user){
    res.status(200).json({
        success:true,
        message: "login successfull",
        user: req.user,
        
    });
  }
});

router.get("/logout", (req,res)=> {
    req.logout();
    res.redirect(FRONTEND_URL);
});

module.exports = router;