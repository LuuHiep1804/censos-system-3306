import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import person from './routers/person.js';
import province from './routers/province.js';
import district from './routers/district.js';
import ward from './routers/ward.js';

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://admin:bMOY3X2waXbvKwDx@cluster0.dc4ca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/api/person/', person);

app.use('/api/province/', province);

app.use('/api/district/', district);

app.use('/api/ward/', ward);


mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to database!');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    });
}).catch(err => {
    console.log('err', err);
})

