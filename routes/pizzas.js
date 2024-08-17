const express = require('express');
const router = express.Router();
const Pizza = require('../models/pizza');

// Route to list all pizzas
router.get('/', async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.render('pizzas/index', { pizzas, title: 'Pizza List' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to show the form for adding a new pizza
router.get('/new', (req, res) => {
    res.render('pizzas/new', { title: 'Add New Pizza' });
});

// Route to handle form submission and add a new pizza
router.post('/', async (req, res) => {
    try {
        const { name, price, size } = req.body;
        await Pizza.create({ name, price, size });
        res.redirect('/pizzas');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to show details of a specific pizza
router.get('/:id', async (req, res) => {
    try {
        const pizza = await Pizza.findById(req.params.id);
        if (!pizza) {
            return res.status(404).send('Pizza not found');
        }
        res.render('pizzas/show', { pizza, title: 'Pizza Details' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to show form for editing a pizza
router.get('/:id/edit', async (req, res) => {
    try {
        const pizza = await Pizza.findById(req.params.id);
        if (!pizza) {
            return res.status(404).send('Pizza not found');
        }
        res.render('pizzas/edit', { pizza, title: 'Edit Pizza' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to handle updating a pizza
router.put('/:id', async (req, res) => {
    try {
        const { name, price, size } = req.body;
        const pizza = await Pizza.findByIdAndUpdate(req.params.id, { name, price, size }, { new: true });
        if (!pizza) {
            return res.status(404).send('Pizza not found');
        }
        res.redirect(`/pizzas/${pizza._id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to handle deleting a pizza
router.delete('/:id', async (req, res) => {
    try {
        const pizza = await Pizza.findByIdAndDelete(req.params.id);
        if (!pizza) {
            return res.status(404).send('Pizza not found');
        }
        res.redirect('/pizzas');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
