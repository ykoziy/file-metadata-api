const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/metadata', upload.single('upfile'), (req, res) => {
  const fileName = req.file.originalname;
  const fileType = req.file.mimetype;
  const fileSize = req.file.size;
  res.json({name:fileName, type:fileType, size:fileSize});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));