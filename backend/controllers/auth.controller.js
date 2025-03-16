import bycrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {

    try {
        const { userName, email, password } = req.body;
        const hashedPassword = await bycrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                userName,
                email,
                password: hashedPassword,
            },
        });
        res.json({message: "User Created Succesfully",newUser});
    }
    catch (error) {
        res.status(500).json({message: "Failed to create user!", error: error.message});
    }    
};

export const login = async (req, res) => {
    const { userName, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                userName,
            },
        });
        if (!user) {
            return res.status(401).json({message: "Invalid Credentials"});
        }
        const validPassword = await bycrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({message: "Invalid Credentials"});
        }
        const age = 1000 * 60 * 60 * 24 * 7 ;
        const token = jwt.sign({
            id: user.id,
            isAdmin: false,
        }, process.env.JWT_SECRET_KEY, { expiresIn: age });

        const {password: userPassword, ...userInfo} = user;
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,
            //secure: true,
        })
            .status(200)
            .json(userInfo);
    }
    catch (error) {
        res.status(500).json({message: "Failed to login", error: error.message});
    }
};

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({message: "Logout Successfull"});
};