const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb+srv://dbUser:passwordDB@app.4zhvch0.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.get('/', (req, res) => {
      res.send('Welcome to the Magic Chef App!');
});

// Routes
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
