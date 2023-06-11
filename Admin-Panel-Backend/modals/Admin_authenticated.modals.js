const mongoose = require('mongoose')


const Admin_Authenticated_schema = mongoose.Schema({
    profile_img : String,
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female' , 'Other'] },
    maritalStatus : {type : String , enum : ['Single' , 'Married']}
} , {
    versionKey : false,
    timestamps : true

})

const Admin_authenticated_modal = mongoose.model('Admin_collection', Admin_Authenticated_schema)

module.exports = { Admin_authenticated_modal }

// {
//     "profile_img" : "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
//     "name": "Abc123",
//     "email": "abc123@gmail.com",
//     "password": "A@bc123",
//     "gender": "Male",
//     "maritalStatus": "Single"
// }