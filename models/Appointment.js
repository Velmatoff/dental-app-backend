const mongoose = require('mongoose');
const {Schema} = mongoose;

const AppointmentSchema = new Schema({
        patientId: {type: Schema.Types.ObjectId, ref: 'Patient' },
        toothNumber: Number,
        diagnosis: String,
        price: Number,
        data: String,
        time: String
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;



