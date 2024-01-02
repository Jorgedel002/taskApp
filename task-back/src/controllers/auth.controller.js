import User from "../models/user.model.js";
import { createAccessToken } from "../libs/jwt.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js";

export const signup = async (req, res) => {
    const {completeName, email, password, role} = req.body;
    
    const encriptedPassword = await bcrypt.hash(password, 5);

    try {
        const userFound = await User.findOne({email});

        if(userFound){
            return res.status(400).json(['El usuario ya existe']);
        }

        const newUser = new User({
            completeName,
            email,
            password: encriptedPassword,
            role
        })

        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved.id});

        res.cookie('token', token);

        res.json({
            id: userSaved.id,
            completeName: userSaved.completeName,
            email: userSaved.email,
            role: userSaved.role,
            password: userSaved.password
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const signin = async (req, res) => {
    const {email, password} = req.body;

    try {
        const userFound = await User.findOne({email});
        if(!userFound) return res.status(400).json({
            message: "User not found"
        })

        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json({
            message: "Incorrect password"
        });

        const token = await createAccessToken({id: userFound.id});

        res.cookie('token', token);
        res.json({
            completeName: userFound.completeName,
            email: userFound.email,
            role: userFound.role
        })

    } catch (error) {
        console.log(error)
    }
}

export const logout = async (req,res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })

    res.status(200).json({
        message: "Bye!"
    })
}

export const getUsers = async (req,res) => {
    const usersFound = await User.find();

    try {
        if(usersFound.length){
            res.json(usersFound)
        }else{
            res.status(400).json({error: "users not found"})
        }
    } catch (error) {
        res.status(500).json({message: message.error})
    }
}

export const verifyToken = async (req, res) => {
    const {token} = req.token;

    if(!token) return res.status(401).json({message: "Unauthorized"})

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if(err) return res.status(401).json({message: "Unauthorized"})

        const userFound = await User.findById(user.id);

        if(!userFound) return res.status(401).json({message: 'Not user found'});

        res.json({
            id: userFound.id,
            completeName: userFound.completeName,
            email: userFound.email
        })
    })
}