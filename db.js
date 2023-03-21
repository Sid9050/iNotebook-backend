const mongoose =require('mongoose')
const mongoUri='mongodb://27017/iNotebook'



const connectToMongo=()=>{
    mongoose.connect(mongoUri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));
}

module.exports=connectToMongo;
