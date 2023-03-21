const mongoose =require('mongoose')
const mongoUri='mongodb+srv://sidchawla2015:<password>@cluster0.2hcl3yq.mongodb.net/?retryWrites=true&w=majority'



const connectToMongo=()=>{
    mongoose.connect(mongoUri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));
}

module.exports=connectToMongo;
