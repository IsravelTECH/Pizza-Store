const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path'); 
const expressLayouts = require('express-ejs-layouts');
const pizzaRoutes = require('./routes/pizzas');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/pizza_store', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'layouts/main'); 


app.use('/pizzas', pizzaRoutes);

app.get('/', (req, res) => {
    res.redirect('/pizzas');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
