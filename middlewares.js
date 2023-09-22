// middlewares.js

module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Substitua pelo domínio correto, se necessário
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  };
  