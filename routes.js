module.exports = (server) => {
  server.get("/", (req, res) => {
    server.locals.title = 'Design além da solução';
    res.render('index', { whiteHeader: true });
  });

  server.get("/contato", (req, res) => {
    server.locals.title = 'Contate-nos';
    res.render('contact', { whiteHeader: true });
  });

  server.get("/servicos", (req, res) => {
    server.locals.title = 'O que fazemos de melhor';
    res.render('services');
  });

  server.use((req, res) => {
    server.locals.title = '404';
    res.status(404).render('404', { whiteHeader: true });
  })
};
