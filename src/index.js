const express = require('express');
const app = express();
const morgan = require('morgan');

//setting
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use('/api/projects',require('./routes/projects'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));


//Empezando el servidor
app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`);
});