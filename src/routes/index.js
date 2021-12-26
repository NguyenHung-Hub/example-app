const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app) {


    app.use('/news', newsRouter);
    app.get('/', siteRouter);

    app.get('/search', (req, res) => {
        console.log(req.query.q);
        res.render('search');
    });
}

module.exports = route;
