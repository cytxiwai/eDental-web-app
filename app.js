import express from 'express';


const app = express();
import path from 'path'
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    res.render('home')
  })

app.listen(3000, () => {
    console.log('serving on port 3000')

})
