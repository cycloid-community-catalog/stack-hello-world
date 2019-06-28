exports.helloOwl = (req, res) => {
  let message = req.query.message || req.body.message || 'Awesome owl!';
  res.status(200).send(message);
};
