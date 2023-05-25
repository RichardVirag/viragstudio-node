module.exports = (server) => {
  server.get("/", (req, res) => {
    server.locals.title = 'Design muito além da solução';
    res.render('index', { whiteHeader: true });
  });

  server.get("/contato", (req, res) => {
    server.locals.title = 'Contate-nos agora mesmo';
    res.render('contact', { whiteHeader: true });
  });

  server.get("/servicos", (req, res) => {
    server.locals.title = 'A melhor experiência para você';
    res.render('services');
  });

  server.get("/sobre", (req, res) => {
    server.locals.title = 'Descubra mais sobre nós';
    res.render('about', { whiteHeader: true });
  });

  server.get("/portfolio", (req, res) => {
    server.locals.title = 'O que fazemos de melhor em nossos clientes';
    res.render('portfolio');
  });

  server.get("/portfolio/totalmegastore", (req, res) => {
    server.locals.title = 'Portfolio Total Megastore';
    res.render('totalmegastore');
  });

  server.get("/portfolio/honofreviagens", (req, res) => {
    server.locals.title = 'Portfolio Honofre viagens';
    res.render('honofreviagens');
  });

  server.get("/portfolio/openmilhas", (req, res) => {
    server.locals.title = 'Portfolio Open Milhas';
    res.render('openmilhas');
  });

  server.get("/portfolio/netmugs", (req, res) => {
    server.locals.title = 'Portfolio Netmugs';
    res.render('netmugs');
  });

  server.get("/portfolio/wilsondias", (req, res) => {
    server.locals.title = 'Portfolio Wilson Dias eventos';
    res.render('wilsondias');
  });

  server.use((req, res) => {
    server.locals.title = 'Ops, algo de errado não está certo';
    res.status(404).render('404', { whiteHeader: true });
  })
};
