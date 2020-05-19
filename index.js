const express = require('express');
const cors = require('cors');
const app = express();

const db = require('./core/db');
const patientValidation = require('./utils/validation/patient');
const appointmentValidation = require('./utils/validation/appointment');

const { PatientCtrl, AppointmentCtrl } = require('./controllers');

app.use(express.json());
app.use(cors());

app.get('/patients', PatientCtrl.all);
app.post('/patients', patientValidation.create , PatientCtrl.create);
app.get('/appointments', AppointmentCtrl.all);
app.post('/appointments', appointmentValidation.create , AppointmentCtrl.create);

app.listen(6666, function (error) {
    if (error) {
        return console.log(error)
    }

    console.log('Server is running!')


});


