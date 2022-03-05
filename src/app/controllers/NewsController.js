class NewsController {
    //[Get]/news
    index(req, res) {
        res.render('news');
    }
    //[GET] /search
    show(req, res) {
        res.send('News details');
    }
}

module.exports = new NewsController();
