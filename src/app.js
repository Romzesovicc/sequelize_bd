const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import sequelizeInstance, {Diagnose, Medicine, Patient} from "./models";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.get('/', async (req, res) => {
    const diagnose = await Diagnose.findByPk(1, { include: [ { model: Medicine } ] });
    console.log(diagnose);
    res.json({ status: 'OK' });
});

sequelizeInstance.sync()
    .then(() => {
        app.listen('3001', (error) => {
            if (error) return console.log(`Error: ${error}`);
            console.log(`App is ready for use. Port: 3001; PID: ${process.pid}`);
        });
    }).catch(() => console.error('Failed to connect to DB'));

