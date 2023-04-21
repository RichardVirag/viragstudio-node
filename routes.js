module.exports = (server) => {
  server.get("/", (req, res) => {
    server.locals.title = 'Home';
    res.render("index");
  });

  server.get("/about", (req, res) => {
    server.locals.title = 'About';
    res.render("about");
  });

  server.use((req, res) => {
    server.locals.title = '404';
    res.status(404).render('404');
  })
};
