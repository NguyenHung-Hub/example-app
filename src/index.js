const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { extname } = require('path');

const app = express();
const port = 3000;
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
// app.use(morgan('combined'));

//Template engine
var hbs = handlebars.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        // foo: function () { return 'FOO!'; },
        // bar: function () { return 'BAR!'; }
    },
    extname: '.hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));


route(app);

app.listen(port, () => console.log(`listening at ${port}`));