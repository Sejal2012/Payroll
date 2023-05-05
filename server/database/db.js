import mongoose from "mongoose"

const connection = async ()=>{
    
    const URL = `mongodb+srv://shubham:shubham@crud.2qv7cn6.mongodb.net/crud?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
        console.log("db connected successfully")
    }catch(error){
        console.log("error while connecting db ", error);
    }
}

export default connection;