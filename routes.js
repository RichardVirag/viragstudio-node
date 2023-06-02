const twilio = require('twilio');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (server) => {
  server.get("/", (req, res) => {
    server.locals.title = 'Design muito além da solução';
    res.render('index', { whiteHeader: true });
  });

  server.get("/contato", (req, res) => {
    server.locals.title = 'Contate-nos agora mesmo';
    res.render('contact', { whiteHeader: true });
  });

  server.post("/send", (req, res) => {
    const client = new twilio('ACa1d50ecd5cac6ad0393ca2e7831d99e0', '8d4b3cfe0b4a76b141228f73621bd5c1');
    client.messages.create({
        body: 'teste de teste',
        from: '+13613095255',
        to: '01511995701084'
      })
      .then(message => {
        res.render('contact', { whiteHeader: true });
      })
      .catch(error => {
        console.error(error, 'Message not sent');
      })
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

  server.get("/portfolio/professionaladvisor", (req, res) => {
    server.locals.title = 'Portfolio Professional Advisor';
    res.render('professionaladvisor');
  });

  server.get("/portfolio/viragstudio", (req, res) => {
    server.locals.title = 'Portfolio ViragStudio';
    res.render('viragstudio');
  });

  server.get("/portfolio/tornero", (req, res) => {
    server.locals.title = 'Portfolio Tornerô';
    res.render('tornero');
  });

  server.get("/portfolio/belaflora", (req, res) => {
    server.locals.title = 'Portfolio Bela Flora Jardinagem';
    res.render('belaflora');
  });

  server.get("/portfolio/rockdimension", (req, res) => {
    server.locals.title = 'Portfolio Rock Dimension';
    res.render('rockdimension');
  });

  server.get("/portfolio/fofypaes", (req, res) => {
    server.locals.title = 'Portfolio Fofy Pães';
    res.render('fofypaes');
  });

  server.get("/portfolio/ceakmaua", (req, res) => {
    server.locals.title = 'Portfolio CEAK Mauá';
    res.render('ceakmaua');
  });

  server.get("/portfolio/ceam", (req, res) => {
    server.locals.title = 'Portfolio Casa Esperança Amor e Misericórdia';
    res.render('ceam');
  });

  server.get("/portfolio/lafragranza", (req, res) => {
    server.locals.title = 'Portfolio La Fragranza';
    res.render('lafragranza');
  });

  server.get("/portfolio/pililo", (req, res) => {
    server.locals.title = 'Portfolio Pililo';
    res.render('pililo');
  });

  server.get("/portfolio/zetaquara", (req, res) => {
    server.locals.title = 'Portfolio Zé Taquara';
    res.render('zetaquara');
  });

  server.use((req, res) => {
    server.locals.title = 'Ops, algo de errado não está certo';
    res.status(404).render('404', { whiteHeader: true });
  })
};
