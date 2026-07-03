require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');
const permissionRoutes = require('./routes/permission');
const roleRoutes = require("./routes/role");
const adminRoutes = require("./routes/admin");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDB();
app.use("/roles", roleRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', require('./routes/auth'));
app.use("/permissions", permissionRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
