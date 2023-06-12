const express = require('express')
const app = express()

const port = process.env.PORT || 3030;

app.get('/', (req, res) => res.send(' ECS demo, Hello NTI Team!! '))

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
      console.log(`nodejs app listening on port ${port}`);
  });
