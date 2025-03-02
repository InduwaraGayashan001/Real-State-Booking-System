import express from 'express';

const router = express.Router();

router.post("/register", (req, res) => {
    res.send("Register");
});

router.post("/login", (req, res) => {
    res.send("Login");
});

router.post("/logout", (req, res) => {    
    res.send("Logout");
});

export default router;