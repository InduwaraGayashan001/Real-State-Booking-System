import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);

    } catch (error) {
    res.status(500).json({ message: "Failed to get users!" });
  }
}

export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id},
        })
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Failed to get user!" });
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUerId = req.userId;
    const { password, avatar,...inputs } = req.body;
    if (tokenUerId !== id) {
        return res.status(403).json({ message: "Not Authorized!" });
    }
    let updatedPassword = null;
    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar }),
            },
        })
        const {password:userPassword, ...rest} = updatedUser;
        res.status(200).json(rest);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update user!" });
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const tokenUerId = req.userId;
    if (tokenUerId !== id) {
        return res.status(403).json({ message: "Not Authorized!" });
    }
    try {
        await prisma.user.delete({
            where: { id },
        })
        res.status(200).json({ message: "User deleted successfully!" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to delete user!" });
    }
}