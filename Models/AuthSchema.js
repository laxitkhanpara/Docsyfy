const mongoose = require('mongoose');

const institute= new mongoose.Schema(
    {
        Institute_ID:
    }
)
//=============Authentication==================================================
const AdminUser = new mongoose.Schema(
    {
        UserName: {
            type: String,
            required: true,
            index: true,
        },
        Password: {
            type: String,
            required: true,
            index: true,
        },     
    }
)
const AdminUserauth =new  mongoose.model('AdminUserauth', AdminUser);

/*=============Export the model==============*/

module.exports={AdminUserauth}