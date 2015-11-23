import express from 'express';
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});

app.listen(3200, () => {
  console.log('Server started on port 3200; Ctrl C to stop.')
});
