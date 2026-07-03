const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const { createUserValidator } = require('../validators/user');
const authMiddleware = require('../middleware/authMiddleware');
<<<<<<< HEAD
const { requireAdmin, allowSelfOrAdmin } = require('../middleware/roleMiddleware');
const { hasPermission } = require('../middleware/permissionMiddleware');
=======
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d
const validateInput = require('../validators/validateInput');

router.post(
  '/create',
<<<<<<< HEAD
  authMiddleware,
  requireAdmin,
=======
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d
  createUserValidator,
  validateInput,
  userController.createUser
);

<<<<<<< HEAD
router.get('/me', authMiddleware, hasPermission('view_own_user'), userController.getMe);

router.get('/:id', authMiddleware, allowSelfOrAdmin, userController.getUserById);

router.put('/:id', authMiddleware, allowSelfOrAdmin, userController.updateUser);
=======
router.get('/', authMiddleware, userController.getAllUsers);

router.get('/:id', userController.getUserById); 

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);
>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d

module.exports = router;