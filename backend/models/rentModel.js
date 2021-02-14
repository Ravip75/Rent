import mongoose from 'mongoose';

const rentSchema=new mongoose.Schema({
    name: {type: String},
    rentPrice: {type: Number},
    manufactureDate: {type: Date},
    actualPrice: {type: Number}
});
const rentModel=mongoose.model('Rent',rentSchema);
export default rentModel;