<<<<<<< HEAD
const User = require('../models/user');
=======
const user = require('../models/user');
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d
const bcrypt = require('bcryptjs');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, password, mobileNumber, role } = req.body;

        const hpass = await bcrypt.hash(password, 10);

<<<<<<< HEAD
        const newUser = await User.create({
=======
        const newUser = await user.create({
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d
            name,
            email,
            password: hpass,
            mobileNumber,
            role,
        });

        return res.status(201).json({
            message: "User created",
            data: newUser,
        });
    } catch (err) {
<<<<<<< HEAD
        console.error(err);
        return res.status(500).json({   
            message: "Server error",
            error: err.message
=======
        console.error(err.message);
        return res.status(500).json({   
            message: "Server error",
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d
        });
    }
};

// Get all users
exports.getAllUsers = async (req,res) => {
    try{
<<<<<<< HEAD
        const users = await User.find().select('-password');
=======
        const users = await user.find().select('-password');
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d

        return res.status(200).json({
            message: "Users fetched successfully",
            data: users,
        });
    }catch(error){
<<<<<<< HEAD
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

// Get current authenticated user
exports.getMe = async (req, res) => {
    try {
        const currentUser = await User.findById(req.user._id).select('-password');

        if (!currentUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json({
            message: "User fetched successfully",
            data: currentUser,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            error: error.message
=======
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d
        });
    }
};

// Get user by ID
exports.getUserById = async (req,res) => {
    try{
<<<<<<< HEAD
        const userId = await User.findById(req.params.id).select('-password');
=======
        const userId = await user.findById(req.params.id).select('-password');
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d

        if(!userId){
            return res.status(404).json({
                message: "User not found",
            });
        }
        return res.status(200).json({
            message: "User fetched successfully",
            data: userId,
        }); 
    } catch(error){
        return res.status(500).json({
            message: "Server error",
        }); 
    }
}

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
<<<<<<< HEAD
        const updates = { ...req.body };
        if (req.user.role !== 'admin') {
            delete updates.role;
        }

        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            updates,
=======
        const updatedUser = await user.findByIdAndUpdate(
            req.params.id,
            req.body,
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json({
            message: "User updated successfully",
            data: updatedUser,
        });
    } catch (err) {
<<<<<<< HEAD
        console.error(err);
        return res.status(500).json({
            message: "Server error",
            error: err.message
=======
        return res.status(500).json({
            message: "Server error",
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d
        });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
<<<<<<< HEAD
        const deletedUser = await User.findByIdAndDelete(req.params.id);
=======
        const deletedUser = await user.findByIdAndDelete(req.params.id);
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (err) {
        return res.status(500).json({
            message: "Server error",
        });
    }
};