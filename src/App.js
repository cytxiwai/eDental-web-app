
import express from 'express';
import path from 'path'

const app = express();

app.set('view engin', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('Serving on port 3000')

})