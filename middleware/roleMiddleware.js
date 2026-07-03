const requireAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({
            message: 'Access denied. Admins only.',
        });
    }
    next();
};

const allowSelfOrAdmin = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Authentication required.' });
    }

    if (req.user.role === 'admin') {
        return next();
    }

    if (req.user._id.toString() === req.params.id) {
        return next();
    }

    return res.status(403).json({
        message: 'Access denied. You can only access your own user data.',
    });
};

module.exports = {
    requireAdmin,
    allowSelfOrAdmin,
};
