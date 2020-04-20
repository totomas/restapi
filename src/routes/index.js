const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
  const data = {
    "name": "Tomas",
    "website": "tomasorellana.com"
  };
  res.json(data);
});

module.exports = router;