const mongo = require('mongodb');
const express = require('express')
const mongoose = require('mongoose');


const Review = require('./Models/reviewModel.js');


const app = express();

const dbURI = 'mongodb+srv://BenDibley:Welly2251@cluster0.nstdf.mongodb.net/Gumboot?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(process.env.PORT || 4000))
.catch((err) => console.log(err))


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/reviews', async (req, res) => {
    
    try {
        const reviews = await Review.find(req.body.review)
         res.json(reviews)
         console.log(reviews)
         
} catch (err) {
        res.status(500).json({ message: err.message})
        } 
})

app.post('/reviews', (req, res) => {

    const { title, name, rating, body, date } = req.body;
    
    const newReview = new Review(req.body)

    newReview.save()
    .then((result) => {
       console.log(result)
    }).catch((err) => console.log(err))
});
